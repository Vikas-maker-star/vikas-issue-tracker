
-- CreateTable
-- CREATE TABLE "Issue" (
--     "id" SERIAL NOT NULL,
--     "title" VARCHAR(255) NOT NULL,
--     "description" TEXT NOT NULL,
--     "status" "Status" NOT NULL DEFAULT 'OPEN',
--     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     "updatedAt" TIMESTAMP(3) NOT NULL,

--     CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
-- );


CREATE TABLE "Issue" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN', 'IN_PROGRESS', 'CLOSED')),
    createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP(3) NOT NULL
);

-- CreateEnum
-- CREATE TYPE "Status" AS ENUM ('OPEN', 'IN_PROGRESS', 'CLOSED');
