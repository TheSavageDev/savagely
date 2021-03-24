/*
  Warnings:

  - You are about to drop the column `group` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "group",
ADD COLUMN     "abs" BOOLEAN,
ADD COLUMN     "arms" BOOLEAN,
ADD COLUMN     "back" BOOLEAN,
ADD COLUMN     "chest" BOOLEAN,
ADD COLUMN     "legs" BOOLEAN,
ADD COLUMN     "shoulders" BOOLEAN;
