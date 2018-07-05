(function () {
    var app = angular.module("contactModule");
    app.controller("contactController", contactController);

    function contactController(contactDataSvc) {
        var self = this;
        self.editMode = false;
        self.addMode = false;
        contactDataSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
            })



        this.setContacts = function (index) {

            this.selectContacts = this.contacts[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectContacts;
            if (self.addMode) {
                contactDataSvc.createUser(userData)
                    .then(function () {
                        self.successMessage = "Data Updated Successfully";
                    },
                        function () {
                            self.errorMessage = "There was an error. please try again !!!"
                        }
                    );
                    self.addMode = false;

            }
            else {
                contactDataSvc.saveUser(userData)
                    .then(function () {
                        self.successMessage = "Data Updated Successfully";
                    },
                        function () {
                            self.errorMessage = "There was an error. please try again !!!"
                        }
                    );
            }
        }

        this.addContact = function () {
            self.addMode = true;
            this.selectContacts = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;
        }

    }
})();