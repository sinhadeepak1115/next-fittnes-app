-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "workoutName" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "trainerName" TEXT NOT NULL,
    "weightAfter" INTEGER NOT NULL,
    "weightBefore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorEmail" TEXT,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
