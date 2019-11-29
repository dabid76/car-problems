
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (80) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"admin" BOOLEAN default true
);


CREATE TABLE "issues" (
    "id" SERIAL PRIMARY KEY,
    "issues" varchar(255) NOT NULL
);

CREATE TABLE "followupQuestions" (
"id" SERIAL PRIMARY KEY,
"questions" varchar(255) NOT NULL,
"issues_id" INT REFERENCES "issues" ON DELETE CASCADE ON UPDATE CASCADE,
"solution" varchar(255) NOT NULL);