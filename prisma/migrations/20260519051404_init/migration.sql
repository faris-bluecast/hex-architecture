-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    CONSTRAINT "Task_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employee_code" TEXT NOT NULL,
    "employee_name" TEXT NOT NULL,
    "legacy_id" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "biometric_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_employeeId_key" ON "Task"("employeeId");
