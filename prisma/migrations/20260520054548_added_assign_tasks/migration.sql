/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Task` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "EmployeeAssignments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "task_id" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "done_qty" INTEGER,
    CONSTRAINT "EmployeeAssignments_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EmployeeAssignments_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "planned_qty" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Task" ("id", "title") SELECT "id", "title" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
