/*
  Warnings:

  - You are about to alter the column `access` on the `user` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `access` ENUM('true', 'false') NOT NULL DEFAULT 'true';
