self.onMessage = function(e) {

    try {
        var top = document.body.scrollTop / 1250;       // declaring variables outside the loop, so DOM call is made only once.
        for (var i = 0, len = items.length, phase; i < len; i++) {
        phase = Math.sin(top + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
        }
    }
    catch(e) {
<<<<<<< HEAD
        console.log("Error in try block.");
=======
        console.log("Error");
>>>>>>> 29ee9df7874c384ef11c1b33b4ee62bd1186b334
    }
};
