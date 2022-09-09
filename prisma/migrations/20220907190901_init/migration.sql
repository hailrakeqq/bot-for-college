-- CreateTable
CREATE TABLE "testDev" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" VARCHAR(64) NOT NULL,

    CONSTRAINT "testDev_pkey" PRIMARY KEY ("id")
);
