db name: oasis

create table Users (
	id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	user_name TEXT NOT NULL,
	email TEXT NOT NULL,
    password VARCHAR(100),
    position TEXT NOT NULL
	);

VALUES ('Crisis Management', 'false', 'true');    
--this password is "1" for both admins	
INSERT INTO users (first_name, last_name, user_name, email, password, position)
VALUES ('John', 'Doe', 'John', 'johndoe@themail.com','$2a$10$b2QDCEBm/twSssJ7jPNObO8rbTISTLbArfQHaYAhfWVtjUmg.HceG', 'IT Administrator'),
	('Jane', 'Joe', 'Jane', 'janejoe@themail.com', '$2a$10$b2QDCEBm/twSssJ7jPNObO8rbTISTLbArfQHaYAhfWVtjUmg.HceG','Social Worker');

--update both users with a position
UPDATE "public"."users" SET "position"='Social Worker' WHERE "id"=2 RETURNING "id", "first_name", "last_name", "user_name", "email", "password", "position";
UPDATE "public"."users" SET "position"='IT Administrator' WHERE "id"=1 RETURNING "id", "first_name", "last_name", "user_name", "email", "password", "position";

-- first training
INSERT INTO trainings (title, volunteers, employees)

--first volunteer
INSERT INTO "public"."volunteers"("first_name", "last_name", "middle_name", "address", "time_at_address", "primary_phone", "secondary_phone", "email", "preferred_contact", "emergency_name", "emergency_phone", "emergency_address", "emergency_relationship", "drivers_license", "reference_1_name", "reference_1_address", " reference_1_phone", "reference_1_email", "reference_1_years_known", "reference_1_relationship", "additional_hobbies", "volunteer_interests", "admin_notes", "tutoring_skill", "cooking_skill", "art_skill", "health_wellness_skill", "career_jobs_skill", "tutor_opportunity", "dropin_opportunity", "transportation_opportunity", "administration_opportunity", "marketing_opportunity", "supplies_donations_opportunity", "fundraising_events_opportunity", "english", "spanish", "hours_any", "no_day_preference", "monday_preference", "tuesday_preference", "wednesday_preference", "attended_orientation", "orientation_date") VALUES('James', 'Peach', 'Charlie', '1234 Scranton Way, Bloomington MN', '3 years', '6517633456', '6517635647', 'james.peach@themail.com', 'primary phone', 'Mary Peach', '6122344321', '1234 Scranton Way, Bloomington MN', 'Wife', TRUE, 'Tyler Burkhead', '654 Sprinfield Dr, Edina', '6518912345', 'tyler@workplace.com', '15 ', 'Childhood friend', 'Underwater basket weaving, Podcast', 'coach sports teams', 'has interview scheduled', TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, '10/15/16');

-- need to run this to add new field to your database
    ALTER TABLE "public"."volunteers"
  ADD COLUMN "attended_orientation" boolean DEFAULT false,
  ADD COLUMN "orientation_date" date;


--this takes out a column that is not needed or delete the volunteers table and run that code snippet below again
  ALTER TABLE "public"."volunteers" DROP COLUMN "languages";
	
create table Trainings (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	volunteers boolean DEFAULT false,
	employees boolean DEFAULT false
	);
	
create table Status (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL
	);
	
create table Interests (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL
	);
	
CREATE TABLE Volunteers (
	id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    middle_name TEXT,
    maiden_name TEXT,
    address TEXT NOT NULL,
    time_at_address TEXT NOT NULL,
    primary_phone VARCHAR(10) NOT NULL,
    secondary_phone VARCHAR(10),
    email TEXT NOT NULL,
    preferred_contact TEXT NOT NULL,
    emergency_name TEXT NOT NULL,
    emergency_phone VARCHAR(10) NOT NULL,
    emergency_address TEXT NOT NULL,
    emergency_relationship TEXT NOT NULL,
    drivers_license BOOLEAN NOT NULL,
    reference_1_name TEXT NOT NULL,
    reference_1_address TEXT NOT NULL,
    reference_1_phone TEXT NOT NULL,
    reference_1_email TEXT,
    reference_1_years_known TEXT NOT NULL,
    reference_1_relationship TEXT NOT NULL,
    reference_2_name TEXT,
    reference_2_address TEXT,
    reference_2_phone TEXT,
    reference_2_email TEXT,
    reference_2_years_known TEXT,
    reference_2_relationship TEXT,
    volunteer_experience TEXT,
    additional_hobbies TEXT,
    status TEXT NOT NULL,
    tutoring_skill BOOLEAN DEFAULT FALSE,
    cooking_skill BOOLEAN DEFAULT FALSE,
    art_skill BOOLEAN DEFAULT FALSE,
    health_wellness_skill BOOLEAN DEFAULT FALSE,
    career_jobs_skill BOOLEAN DEFAULT FALSE,
    tutor_opportunity BOOLEAN DEFAULT FALSE,
    dropin_opportunity BOOLEAN DEFAULT FALSE,
    transportation_opportunity BOOLEAN DEFAULT FALSE,
    administration_opportunity BOOLEAN DEFAULT FALSE,
    marketing_opportunity BOOLEAN DEFAULT FALSE,
    supplies_donations_opportunity BOOLEAN DEFAULT FALSE,
    fundraising_events_opportunity BOOLEAN DEFAULT FALSE,
    other_opportunity TEXT,
    english BOOLEAN DEFAULT TRUE,
    spanish BOOLEAN DEFAULT TRUE,
    language_other TEXT,
    hours_any BOOLEAN DEFAULT FALSE,
    hours_morning BOOLEAN DEFAULT FALSE,
    hours_afternoon BOOLEAN DEFAULT FALSE,
    hours_evening BOOLEAN DEFAULT FALSE,
    no_day_preference BOOLEAN DEFAULT FALSE,
    monday_preference BOOLEAN DEFAULT FALSE,
    tuesday_preference BOOLEAN DEFAULT FALSE,
    wednesday_preference BOOLEAN DEFAULT FALSE,
    thursday_preference BOOLEAN DEFAULT FALSE,
    friday_preference BOOLEAN DEFAULT FALSE,
    saturday_preference BOOLEAN DEFAULT FALSE,
    sunday_preference BOOLEAN DEFAULT FALSE,
    attended_orientation boolean DEFAULT false,
    orientation_date date;

);