
myApp.controller('VolunteerDetailController', ['VolunteerService', 'UserService', '$routeParams', 'TrainingService', '$http', '$location', '$mdDialog', function (VolunteerService, UserService, $routeParams, TrainingService, $http, $location, $mdDialog) {
    console.log('VolunteerDetailController created');
    var self = this;
    self.trainings = TrainingService.volunteerTrainings;
    self.volunteerDetail = VolunteerService.volunteerDetail;
    self.completedTrainings = TrainingService.completedTrainings;
    self.currentVolunteerId = $routeParams.id;//filters to the current user from the whole list of users instead of running another query
    VolunteerService.getVolunteerDetail($routeParams.id);
    TrainingService.getCompletedTrainings($routeParams.id);
    TrainingService.getVolunteerTrainings();
    self.updateCompletedTraining = function (completedDate, trainingId) {
        TrainingService.updateCompletedTraining($routeParams.id, trainingId, completedDate);
        console.log('completed date data controller, ', $routeParams.id, trainingId, completedDate);
    }
    self.udpateVolunteer = function () {
        console.log('update volunteer', self.volunteerDetail);
        VolunteerService.updateVolunteer(self.volunteerDetail.list);
    }
    self.showAlert = function (ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(false)
                .title('Volunteer Data saved')
                // .textContent('Oasis for Youth will contact you in 7-10 business days')
                .ariaLabel('Alert Dialog Demo')
                .ok('Okay')
                .targetEvent(ev)
        )
    }
    self.deleteVolunteer = function (ev) {
        let confirm = $mdDialog.confirm()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Delete volunteer?')
            .textContent('If you delete, all of this volunteers data will be lost.')
            .ariaLabel('Delete Dialog')
            .ok('Delete')
            .cancel('Do Not Delete')
            .targetEvent(ev)
        $mdDialog.show(confirm).then(function () {
            console.log('delete confirmed')
            VolunteerService.deleteVolunteer($routeParams.id);
        }, function(){
            console.log('delete cancelled')
        })
    }
}]);