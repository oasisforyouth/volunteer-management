myApp.filter('volunteerFilter', function () {
    return function (volunteerArray, volunteerSearchObject) {
        var output = [];

        for (var i = 0; i < volunteerArray.length; i++) {
            var addVolunteer = false;
            
            if (volunteerArray[i].tutor_opportunity && volunteerSearchObject.tutor_opportunity) {
                addVolunteer = true;
            }
            if (volunteerArray[i].dropin_opportunity && volunteerSearchObject.dropin_opportunity) {
                addVolunteer = true;
            }
            if (volunteerArray[i].transportation_opportunity && volunteerSearchObject.transportation_opportunity) {
                addVolunteer = true;
            }
            if (volunteerArray[i].administration_opportunity && volunteerSearchObject.administration_opportunity) {
                addVolunteer = true;
            }   
            if (volunteerArray[i].marketing_opportunity && volunteerSearchObject.marketing_opportunity) {
                addVolunteer = true;
            }
            if (volunteerArray[i].supplies_donations_opportunity && volunteerSearchObject.supplies_donations_opportunity) {
                addVolunteer = true;
            }
            if (volunteerArray[i].fundraising_events_opportunity && volunteerSearchObject.fundraising_events_opportunity) {
                addVolunteer = true;
            }

            if(addVolunteer) {
                output.push(volunteerArray[i]);
            }
        }
        return output;
    }
});


// function filterFunction(volunteerArray, searchObject) {


//     for(var i = 0; i < volunteerArray.length; i++) {
//         if (volunteerArray[i].tutor_opportunity && volunteerSearchObject.tutor_opportunity) {
//             self.tutorOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'tutorFiltervolunteerArray', self.tutorOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].dropin_opportunity && volunteerSearchObject.dropin_opportunity) {
//             self.dropinOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'dropinOppFilteredvolunteerArray', self.dropinOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].transportation_opportunity && volunteerSearchObject.transportation_opportunity) {
//             self.transportationOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'transportationOppFilteredvolunteerArray', self.transportationOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].administration_opportunity && volunteerSearchObject.administration_opportunity) {
//             self.administrationOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'administrationOppFilteredvolunteerArray', self.administrationOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].marketing_opportunity && volunteerSearchObject.marketing_opportunity) {
//             self.marketingOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'marketingOppFilteredvolunteerArray', self.marketingOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].supplies_donations_opportunity && volunteerSearchObject.supplies_donations_opportunity) {
//             self.supplies_donationsOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'supplies_donationsOppFilteredvolunteerArray', self.supplies_donationsOppFilteredvolunteerArray )
//         }
//         if (volunteerArray[i].fundraising_events_opportunity && volunteerSearchObject.fundraising_events_opportunity) {
//             self.fundraising_eventsOppFilteredvolunteerArray.push(volunteerArray[i]);
//             console.log( 'fundraising_eventsOppFilteredvolunteerArray', self.fundraising_eventsOppFilteredvolunteerArray )
//         }
//     }    
// }

// filterFunction(self.allVolunteers.list, volunteerSearchObject);