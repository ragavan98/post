(function () {
    var app = angular.module("contactModule");
    app.service("AppDataServiceSvc", function (AppNameSvc) {

        this.name = AppNameSvc;
        this.author = "ragavan";
        this.builtdate = new Date().toDateString();
        this.date = new Date();
        this.hours = date.getHours();
        this.days = date.getDay();
        this.minutes = date.getMinutes();
        this.ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        this.strTime = date + ' ' + hours + ' :' + minutes + ' ' + ampm;

    });
})();