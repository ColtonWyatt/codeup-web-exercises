(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {

            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: (rounded) " + Math.round(this.getArea()));
            }
                console.log('Area of a circle with radius: ' + this.radius + 'is: ' + this.getArea())

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius=5

    console.log("Raw circle information");
    circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();
