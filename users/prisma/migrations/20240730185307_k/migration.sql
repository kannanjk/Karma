/*
  Warnings:

  - Made the column `followerId` on table `follow` required. This step will fail if there are existing NULL values in that column.
  - Made the column `followingId` on table `follow` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `follow` DROP FOREIGN KEY `Follow_followerId_fkey`;

-- DropForeignKey
ALTER TABLE `follow` DROP FOREIGN KEY `Follow_followingId_fkey`;

-- AlterTable
ALTER TABLE `follow` MODIFY `followerId` INTEGER NOT NULL,
    MODIFY `followingId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
