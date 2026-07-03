/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `EventBooking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `EventBooking` table. All the data in the column will be lost.
  - Added the required column `venueName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `EventBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eventId` on the `EventBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- Drop foreign keys to allow type alteration
ALTER TABLE "EventBooking" DROP CONSTRAINT "EventBooking_eventId_fkey";

-- Drop historical primary key bounds
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey";
ALTER TABLE "Event" ALTER COLUMN "id" DROP DEFAULT;

ALTER TABLE "EventBooking" DROP CONSTRAINT "EventBooking_pkey";
ALTER TABLE "EventBooking" ALTER COLUMN "id" DROP DEFAULT;

-- Add the required column `venueName`
ALTER TABLE "Event" ADD COLUMN     "venueName" TEXT NOT NULL;

-- Cast the primary keys safely from Int to UUID bytes
ALTER TABLE "Event" 
  ALTER COLUMN "id" SET DATA TYPE UUID 
  USING LPAD(TO_HEX("id"), 32, '0')::UUID;

ALTER TABLE "EventBooking" 
  ALTER COLUMN "id" SET DATA TYPE UUID 
  USING LPAD(TO_HEX("id"), 32, '0')::UUID;

-- Cast the foreign key to UUID bytes to resolve the type error
ALTER TABLE "EventBooking" 
  ALTER COLUMN "eventId" SET DATA TYPE UUID 
  USING LPAD(TO_HEX("eventId"), 32, '0')::UUID;

-- Restore primary key rules
ALTER TABLE "Event" ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
ALTER TABLE "EventBooking" ADD CONSTRAINT "EventBooking_pkey" PRIMARY KEY ("id");

-- Restore the relationship link using matching structural types
ALTER TABLE "EventBooking" ADD CONSTRAINT "EventBooking_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
