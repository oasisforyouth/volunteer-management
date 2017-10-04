myApp.controller('ApplicationController', ['$http', '$location', 'UserService', 'VolunteerService',  function($http, $location, UserService, VolunteerService) {
    console.log('ApplicationController created');
    var self = this;
    self.newApplication = {};

    
    self.postApplication = function(){
        VolunteerService.postNewVolunteer(self.newApplication);

    }
    self.newApplication = {
        firstName: "",
        lastName: "",
        middleName:"",
        maidenName:"",
        address:"",
        timeAtAddress:"",
        primaryPhone:"",
        secondaryPhone:"",
        email:"",
        preferredContact:"Primary Phone",
        emergencyName:"",
        emergencyPhone:"",
        emergencyAddress:"",
        emergencyRelationship:"",
        driversLicense:false,
        reference1Name:"",
        reference1Address:"",
        reference1Phone:"",
        reference1Email:"",
        reference1Years_known:"",
        reference1Relationship:"",
        reference2Name:"",
        reference2Address:"",
        reference2Phone:"",
        reference2Email:"",
        reference2Years_known:"",
        reference2Relationship:"",
        volunteerExperience:"",
        additionalHobbies:"",
        status:"Applied",
        tutoringSkill:false,
        cookingSkill:false,
        artSkill:false,
        healthWellnessSkill:false,
        careerJobsSkill:false,
        tutorOpportunity:false,
        dropinOpportunity:false,
        transportationOpportunity:false,
        administrationOpportunity:false,
        marketingOpportunity:false,
        suppliesDonationsOpportunity:false,
        fundraisingEventsOpportunity:false,
        otherOpportunity:"",
        english:false,
        spanish:false,
        languageOther:"",
        hoursAny:false,
        hoursMorning:false,
        hoursAfternoon:false,
        hoursEvening:false,
        noDayPreference:false,
        mondayPreference:false,
        tuesdayPreference:false,
        wednesdayPreference:false,
        thursdayPreference:false,
        fridayPreference:false,
        saturdayPreference:false,
        sundayPreference:false,
        attendedOrientation:false,
        adminNotes:""
    
    }
}]);