/*
  Warnings:

  - You are about to drop the column `createdAt` on the `follow` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `follow` DROP COLUMN `createdAt`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `image`,
    ADD COLUMN `coverImage` VARCHAR(191) NULL,
    ADD COLUMN `profileImage` VARCHAR(191) NULL;
