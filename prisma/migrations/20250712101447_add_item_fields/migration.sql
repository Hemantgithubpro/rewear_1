/*
  Warnings:

  - You are about to drop the column `type` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "type",
ADD COLUMN     "brand" TEXT,
ADD COLUMN     "care_instructions" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "looking_for" TEXT,
ADD COLUMN     "material" TEXT;
