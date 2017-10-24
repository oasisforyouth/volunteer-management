myApp.filter('volunteerFilter', function () {
    return function (volunteerArray, volunteerSearchObject) {
        var output = [];
        
        for (var i = 0; i < volunteerArray.length; i++) {
            var addVolunteer = true;
            if (volunteerArray[i] && volunteerSearchObject.all) {
                volunteerSearchObject.all = true;
                addVolunteer = true;
            }
            if (volunteerArray[i].status == 'Ready to Volunteer!' && volunteerSearchObject.onboarding) {          
                addVolunteer = false;
            }

            if (volunteerArray[i].tutor_opportunity == false && volunteerSearchObject.tutor_opportunity) {          
                addVolunteer = false;
            }
            if (volunteerArray[i].dropin_opportunity == false && volunteerSearchObject.dropin_opportunity) {              
                addVolunteer = false;
            }
            if (volunteerArray[i].transportation_opportunity == false  && volunteerSearchObject.transportation_opportunity) {             
                addVolunteer = false;
            }
            if (volunteerArray[i].administration_opportunity == false && volunteerSearchObject.administration_opportunity) {              
                addVolunteer = false;
            }   
            if (volunteerArray[i].marketing_opportunity == false && volunteerSearchObject.marketing_opportunity) {              
                addVolunteer = false;
            }
            if (volunteerArray[i].supplies_donations_opportunity == false && volunteerSearchObject.supplies_donations_opportunity) {           
                addVolunteer = false;
            }
            if (volunteerArray[i].fundraising_events_opportunity == false && volunteerSearchObject.fundraising_events_opportunity) {    
                addVolunteer = false;
            }


            if (volunteerArray[i].tutoring_skill == false && volunteerSearchObject.tutoring_skill) {         
                addVolunteer = false;
            }
            if (volunteerArray[i].cooking_skill == false && volunteerSearchObject.cooking_skill) {
                addVolunteer = false;
            }
            if (volunteerArray[i].art_skill == false && volunteerSearchObject.art_skill) {
                addVolunteer = false;
            }
            if (volunteerArray[i].health_wellness_skill == false && volunteerSearchObject.health_wellness_skill) {
                addVolunteer = false;
            }
            if (volunteerArray[i].career_jobs_skill == false && volunteerSearchObject.career_jobs_skill) {
                addVolunteer = false;
            }
            

            if (volunteerArray[i].months >= 12 && volunteerSearchObject.months_underTwelve) {
                addVolunteer = false;
            }
            if ((volunteerArray[i].months < 12 || volunteerArray[i].months > 36) && volunteerSearchObject.months_underThirtySix) {
                addVolunteer = false;
            }
            if (volunteerArray[i].months < 36 && volunteerSearchObject.months_aboveThirtySix) {
                addVolunteer = false;
            }

            
            if (volunteerArray[i].status != 'Applied' && volunteerSearchObject.status_applied) {
                addVolunteer = false;
            }
            if (volunteerArray[i].status != 'Application in Review' && volunteerSearchObject.status_review) {
                addVolunteer = false;
            }
            if (volunteerArray[i].status != 'Checking Background/References' && volunteerSearchObject.status_background) {
                addVolunteer = false;
            }
            if (volunteerArray[i].status != 'Schedule Interview' && volunteerSearchObject.status_interview) { 
                addVolunteer = false;
            }
            if (volunteerArray[i].status != 'Schedule Training' && volunteerSearchObject.status_training) {
                addVolunteer = false;
            }
            if (volunteerArray[i].status != 'Ready to Volunteer!' && volunteerSearchObject.status_ready) {
                addVolunteer = false;
            }

            if (volunteerArray[i].status != 'Inactive' && volunteerSearchObject.status_inactive) {
                addVolunteer = false;
            }

            if(addVolunteer) {
                output.push(volunteerArray[i]);
            }
        }
        return output;
    }
});