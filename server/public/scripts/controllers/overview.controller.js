myApp.controller('OverviewController', ['$http', '$location', 'UserService', 'VolunteerService', '$routeParams', function($http, $location, UserService, VolunteerService, $routeParams) {
    // console.log('OverviewController created');
    var self = this;
    self.allVolunteers = VolunteerService.allVolunteers;
    self.currentPage = "overview";
    // self.showNav = true;

    self.volunteerSearchObject = { //interests object to use for the filter search
        all: true,
    };

    VolunteerService.getAllVolunteers();

    self.currentVolunteerId = $routeParams.id; 

    self.clearFilter = function(){

        self.volunteerSearchObject.onboarding = false;
        // self.volunteerSearchObject.ready = false;

        self.volunteerSearchObject.tutor_opportunity = false;
        self.volunteerSearchObject.transportation_opportunity = false;
        self.volunteerSearchObject.dropin_opportunity = false;
        self.volunteerSearchObject.administration_opportunity = false;
        self.volunteerSearchObject.marketing_opportunity = false;
        self.volunteerSearchObject.supplies_donations_opportunity = false;
        self.volunteerSearchObject.fundraising_events_opportunity = false;

        self.volunteerSearchObject.tutoring_skill = false;
        self.volunteerSearchObject.cooking_skill = false;
        self.volunteerSearchObject.art_skill = false;
        self.volunteerSearchObject.health_wellness_skill = false;
        self.volunteerSearchObject.career_jobs_skill = false;

        self.volunteerSearchObject.volunteerSearchObject.months_underTwelve = false;
        self.volunteerSearchObject.volunteerSearchObject.months_underThirtySix = false;
        self.volunteerSearchObject.volunteerSearchObject.months_aboveThirtySix = false;

        self.volunteerSearchObject.status_applied = false;
        self.volunteerSearchObject.status_review = false;
        self.volunteerSearchObject.status_background = false;
        self.volunteerSearchObject.status_interview = false;
        self.volunteerSearchObject.status_training = false;
        self.volunteerSearchObject.status_ready = false;
        self.volunteerSearchObject.status_inactive = false;
    }

}]);

// "tutor_opportunity":true,
// "dropin_opportunity":false,
// "transportation_opportunity":false,
// "administration_opportunity":false,
// "marketing_opportunity":true,
// "supplies_donations_opportunity":true,
// "fundraising_events_opportunity":true,
// "other_opportunity":null,

// "tutoring_skill":true,
// "cooking_skill":false,
// "art_skill":true,
// "health_wellness_skill":true,
// "career_jobs_skill":false,

// {"list":[{"id":1,
// "first_name":"Troy",
// "last_name":"Smith",
// "middle_name":"T",
// "maiden_name":null,

// "address":"123 Parkway Drive, Bloomington MN","time_at_address":"4",
// "primary_phone":"6512341234","secondary_phone":"6515431234",
// "email":"John.smith@themail.com",
// "preferred_contact":"Primary Phone",
// "emergency_name":"Terry Smith","emergency_phone":"6515431234","emergency_address":"123 Parkway Drive Bloomington MN","emergency_relationship":"Wife",

// "drivers_license":true,

// "reference_1_name":"James Peach",
// "reference_1_address":"678 Skyway AVE",
// "reference_1_phone":"6519871234",
// "reference_1_email":"james.peach@themail.com",
// "reference_1_years_known":"12",
// "reference_1_relationship":"Childhood friend",

// "reference_2_name":"Mary Houser",
// "reference_2_address":"543",
// "reference_2_phone":"6517652345",
// "reference_2_email":"Mary.houser@themail.com",
// "reference_2_years_known":"4",
// "reference_2_relationship":"coworker",

// "volunteer_experience":"Big Brother program",
// "additional_hobbies":"Spelunking",
// "status":"Applied",

// "english":true,
// "spanish":false,
// "language_other":null,

// "hours_any":false,
// "hours_morning":false,
// "hours_afternoon":false,
// "hours_evening":true,
// "no_day_preference":true,
// "monday_preference":false,
// "tuesday_preference":false,
// "wednesday_preference":false,
// "thursday_preference":false,
// "friday_preference":false,
// "saturday_preference":false,
// "sunday_preference":false,

// "attended_orientation":true,
// "orientation_date":"2017-10-16T05:00:00.000Z",
// "admin_notes":null,
// "volunteerInterests":"Tutoring, Marketing, Supplies/Donations, Fundraising/Events"

// }]}