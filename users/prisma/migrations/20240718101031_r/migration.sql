/*
  Warnings:

  - You are about to alter the column `access` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `access` BOOLEAN NOT NULL DEFAULT true;
