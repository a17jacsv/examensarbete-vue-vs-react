// ==UserScript==
// @name         Filter-Script
// @namespace    Jacob Svensson
// @version      0.1
// @description  Skript som tar tid hur lång tid en filtrering tar på båda implementationerna.
// @author       Jacob Svensson
// @match        http://localhost:8001
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';

    // URL for the php-file for the scrapper for both Vue and react.
    //const URL = 'http://localhost:8888/vue-measurement/scraped_receiver-vue.php';
    const URL = 'http://localhost:8888/react-measurement/scraped_receiver-react.php';

    // Container for the scraped data.
    var scrapedData = [];
    // Variable that tracks the start of the timer.
    var start;
    // Variable that tracks the end of the timer.
    var end;
    // The result/difference between end and start.
    var result;
    // Variable that tracks the quantity of searches.
    var counter;
    // All parkingslots button.
    const allaParkeringarBtn = document.querySelector('#allaParkeringar');
    // All available parkingslots button.
    const ledigaParkeringarBtn = document.querySelector('#ledigaParkeringar');

    // Number of times the script will filter the parkingslots.
    var numberOfClicks = 100;


    // Function that handles the datatransfer, taken from dugga.iit.his.se
    function ajaxCall(data) {
        try {
            GM_xmlhttpRequest({
                method: 'POST',
                url: URL,
                data: 'str=' + encodeURIComponent(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
        } catch (ex1) {
            console.log(ex1);
        }
    }

    // Eventlistener that start the timer
    allaParkeringarBtn.addEventListener('click', function () {
        //ledigaParkeringarBtn.addEventListener('click', function() {
        start = performance.now();
    });

    // Check if the script have been active before.
    if (counter == null) {
        counter = 0;
    }

    function script() {
        // Click the filterbutton you want to use.
        allaParkeringarBtn.click();
        //ledigaParkeringarBtn.click();

        // Checks if the application has loaded 100% before rendering the page
        window.requestAnimationFrame(function () {
            //window.onload = function () {
            // end-variable.
            end = performance.now();

            // Calculate the result.
            result = (end - start) + '\n';
            console.log("Result: " + result);
            // Push the result to the array
            scrapedData.push(result);

            counter++;
        });

        // Checks that the script is runned correct quantity searches.
        if (counter < numberOfClicks) {
            setTimeout(script, 2000);
        }
        else {
            alert("Clicked " + scrapedData.length + " button(s).");
            // Usage of .join() to delete the commas when printing out the result
            ajaxCall(scrapedData.join(''));
        }
    }


    //Starts the script
    script();
})();