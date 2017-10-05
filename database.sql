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
	
INSERT INTO users (first_name, last_name, user_name, email, password, position)
VALUES ('John', 'Doe', 'John', 'johndoe@themail.com','$2a$10$b2QDCEBm/twSssJ7jPNObO8rbTISTLbArfQHaYAhfWVtjUmg.HceG', 'IT Administrator'),
    ('Jane', 'Joe', 'Jane', 'janejoe@themail.com', '$2a$10$b2QDCEBm/twSssJ7jPNObO8rbTISTLbArfQHaYAhfWVtjUmg.HceG','Social Worker');
	);

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
    drivers_license BOOLEAN DEFAULT FALSE NOT NULL,
    reference_1_name TEXT NOT NULL,
    reference_1_address TEXT NOT NULL,
    reference_1_phone VARCHAR(10) NOT NULL,
    reference_1_email TEXT,
    reference_1_years_known TEXT NOT NULL,
    reference_1_relationship TEXT NOT NULL,
    reference_2_name TEXT,
    reference_2_address TEXT,
    reference_2_phone VARCHAR(10),
    reference_2_email TEXT,
    reference_2_years_known TEXT,
    reference_2_relationship TEXT,
    volunteer_experience TEXT,
    additional_hobbies TEXT,
    status TEXT NOT NULL,
    tutoring_skill BOOLEAN DEFAULT FALSE NOT NULL,
    cooking_skill BOOLEAN DEFAULT FALSE NOT NULL,
    art_skill BOOLEAN DEFAULT FALSE NOT NULL,
    health_wellness_skill BOOLEAN DEFAULT FALSE NOT NULL,
    career_jobs_skill BOOLEAN DEFAULT FALSE NOT NULL,
    tutor_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    dropin_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    transportation_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    administration_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    marketing_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    supplies_donations_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    fundraising_events_opportunity BOOLEAN DEFAULT FALSE NOT NULL,
    other_opportunity TEXT,
    english BOOLEAN DEFAULT TRUE NOT NULL,
    spanish BOOLEAN DEFAULT TRUE NOT NULL,
    language_other TEXT,
    hours_any BOOLEAN DEFAULT FALSE NOT NULL,
    hours_morning BOOLEAN DEFAULT FALSE NOT NULL,
    hours_afternoon BOOLEAN DEFAULT FALSE NOT NULL,
    hours_evening BOOLEAN DEFAULT FALSE NOT NULL,
    no_day_preference BOOLEAN DEFAULT FALSE NOT NULL,
    monday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    tuesday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    wednesday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    thursday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    friday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    saturday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    sunday_preference BOOLEAN DEFAULT FALSE NOT NULL,
    attended_orientation BOOLEAN DEFAULT false NOT NULL,
    orientation_date date,
    admin_notes TEXT
);
INSERT INTO "public"."volunteers"("first_name", "last_name", "middle_name", "address", "time_at_address", "primary_phone", "secondary_phone", "email", "preferred_contact", "emergency_name", "emergency_phone", "emergency_address", "emergency_relationship", "drivers_license", "reference_1_name", "reference_1_address", "reference_1_phone", "reference_1_email", "reference_1_years_known", "reference_1_relationship", "reference_2_name", "reference_2_address", "reference_2_phone", "reference_2_email", "reference_2_years_known", "reference_2_relationship", "volunteer_experience", "additional_hobbies", "status", "tutoring_skill", "cooking_skill", "art_skill", "health_wellness_skill", "career_jobs_skill", "tutor_opportunity", "dropin_opportunity", "transportation_opportunity", "administration_opportunity", "marketing_opportunity", "supplies_donations_opportunity", "fundraising_events_opportunity", "english", "spanish", "hours_any", "hours_morning", "hours_afternoon", "hours_evening", "no_day_preference", "monday_preference", "tuesday_preference", "wednesday_preference", "thursday_preference", "friday_preference", "saturday_preference", "sunday_preference", "attended_orientation", "orientation_date") VALUES('Troy', 'Smith', 'T', '123 Parkway Drive, Bloomington MN', '4', '6512341234', '6515431234', 'John.smith@themail.com', 'Primary Phone', 'Terry Smith', '6515431234', '123 Parkway Drive Bloomington MN', 'Wife', TRUE, 'James Peach', '678 Skyway AVE', '6519871234', 'james.peach@themail.com', '12', 'Childhood friend', 'Mary Houser', '543', '6517652345', 'Mary.houser@themail.com', '4', 'coworker', 'Big Brother program', 'Spelunking', 'Applied', TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, '10/16/17');