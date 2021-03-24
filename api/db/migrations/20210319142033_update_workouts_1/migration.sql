/*
  Warnings:

  - You are about to drop the column `time` on the `Workout` table. All the data in the column will be lost.
  - Added the required column `title` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "time",
ADD COLUMN     "title" TEXT NOT NULL;
