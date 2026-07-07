/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `EventBooking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "EventBooking" DROP COLUMN "createdAt";

-- CreateIndex
CREATE INDEX "Event_city_startDateTime_idx" ON "Event"("city", "startDateTime");

-- Create GIN index for full-text search (much faster than GIST for text search)
CREATE INDEX IF NOT EXISTS "Event_searchVector_idx" ON "Event" USING GIN("searchVector");
