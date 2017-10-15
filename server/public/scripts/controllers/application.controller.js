myApp.controller('ApplicationController', ['NgMap', '$http', '$location', 'UserService', 'VolunteerService', '$mdDialog', function(NgMap, $http, $location, UserService, VolunteerService, $mdDialog) {
    console.log('ApplicationController created');
    var self = this;

    self.postApplication = function() {
        console.log('submit clicked', self.newApplication)
        VolunteerService.postNewVolunteer(self.newApplication);

    }

    self.newApplication = {
        firstName: "",
        lastName: "",
        middleName: "",
        maidenName: "",
        address: "",
        timeAtAddress: "",
        primaryPhone: "",
        secondaryPhone: "",
        email: "",
        preferredContact: "",
        emergencyName: "",
        emergencyPhone: "",
        emergencyAddress: "",
        emergencyRelationship: "",
        driversLicense: false,
        reference1Name: "",
        reference1Address: "",
        reference1Phone: "",
        reference1Email: "",
        reference1Years_known: "",
        reference1Relationship: "",
        reference2Name: "",
        reference2Address: "",
        reference2Phone: "",
        reference2Email: "",
        reference2Years_known: "",
        reference2Relationship: "",
        volunteerExperience: "",
        additionalHobbies: "",
        status: "Applied",
        tutoringSkill: false,
        cookingSkill: false,
        artSkill: false,
        healthWellnessSkill: false,
        careerJobsSkill: false,
        tutorOpportunity: false,
        dropinOpportunity: false,
        transportationOpportunity: false,
        administrationOpportunity: false,
        marketingOpportunity: false,
        suppliesDonationsOpportunity: false,
        fundraisingEventsOpportunity: false,
        otherOpportunity: "",
        english: false,
        spanish: false,
        languageOther: "",
        hoursAny: false,
        hoursMorning: false,
        hoursAfternoon: false,
        hoursEvening: false,
        noDayPreference: false,
        mondayPreference: false,
        tuesdayPreference: false,
        wednesdayPreference: false,
        thursdayPreference: false,
        fridayPreference: false,
        saturdayPreference: false,
        sundayPreference: false,
        attendedOrientation: false,
        adminNotes: "",
        medicalConcerns:"",
        over21:false
        }

        
    self.showAlert = function(ev) {
        $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(false)
                .title('Thank you for volunteering!')
                .textContent('Oasis for Youth will contact you in 7-10 business days')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            )
            .finally(function() {
                window.location.replace('http://www.oasisforyouth.org/')
            })
    };
}]);