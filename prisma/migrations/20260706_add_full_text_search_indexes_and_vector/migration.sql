-- Add full-text search column with tsvector type
ALTER TABLE "Event" ADD COLUMN "searchVector" tsvector;

-- Create function to generate search vector
CREATE OR REPLACE FUNCTION update_event_search_vector() RETURNS TRIGGER AS $$
BEGIN
  NEW."searchVector" := (
    setweight(to_tsvector('english', coalesce(NEW."name", '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW."city", '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW."location", '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW."venueName", '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW."organizerName", '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW."description", '')), 'C')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update search vector on INSERT and UPDATE
DROP TRIGGER IF EXISTS event_search_vector_trigger ON "Event";
CREATE TRIGGER event_search_vector_trigger
BEFORE INSERT OR UPDATE ON "Event"
FOR EACH ROW
EXECUTE FUNCTION update_event_search_vector();

-- Populate existing records with search vectors
UPDATE "Event" SET "searchVector" = (
  setweight(to_tsvector('english', coalesce("name", '')), 'A') ||
  setweight(to_tsvector('english', coalesce("city", '')), 'B') ||
  setweight(to_tsvector('english', coalesce("location", '')), 'B') ||
  setweight(to_tsvector('english', coalesce("venueName", '')), 'B') ||
  setweight(to_tsvector('english', coalesce("organizerName", '')), 'B') ||
  setweight(to_tsvector('english', coalesce("description", '')), 'C')
);

-- Create GIN index for full-text search (much faster than GIST for text search)
CREATE INDEX IF NOT EXISTS "Event_searchVector_idx" ON "Event" USING GIN("searchVector");

-- Create additional indexes for common filter operations
CREATE INDEX IF NOT EXISTS "Event_startDateTime_idx" ON "Event"("startDateTime" ASC);
CREATE INDEX IF NOT EXISTS "Event_city_idx" ON "Event"("city");
