namespace filestack.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public file;

        public pickFile() {

                    this.filepickerService.pick(
                        { mimetype: 'image/*' },
                        this.fileUploaded.bind(this)
                    );
    }

    public fileUploaded(file) {
          // save file url to database
          this.file = file;
          this.$scope.$apply(); // force page to update
      }
   constructor(private filepickerService, private $scope: ng.IScope) { }

}

angular.module('filestack').controller('HomeController', HomeController);

export class AboutController {
    public message = 'Hello from the about page!';
 }

}
