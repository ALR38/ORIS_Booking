CREATE TABLE "Tours" (
    "Id" SERIAL PRIMARY KEY,
    "Image" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Duration" TEXT NOT NULL,
    "Cost" TEXT NOT NULL,
    "Reviews" INT NOT NULL,
    "Destination" TEXT NOT NULL
);

CREATE TABLE "Applications" (
    "Id" SERIAL PRIMARY KEY,
    "TourId" INT NOT NULL,
    "FullName" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Comment" TEXT NOT NULL,
    "SubmissionDate" TIMESTAMPTZ NOT NULL,
    CONSTRAINT fk_tour FOREIGN KEY ("TourId") REFERENCES "Tours"("Id") ON DELETE CASCADE
);
