/*
  Warnings:

  - You are about to alter the column `author` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - Made the column `author` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discordTag` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "author" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "discordTag" SET NOT NULL;

-- RenameIndex
ALTER INDEX "User_discord_key" RENAME TO "User_discordTag_key";
