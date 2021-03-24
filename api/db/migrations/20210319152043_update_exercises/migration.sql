/*
  Warnings:

  - You are about to drop the column `time` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `level` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "time",
ADD COLUMN     "minutes" INTEGER,
ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "equipment" TEXT NOT NULL;
