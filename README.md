# Utility to lookup carrier information

This utility provides a way to retrieve additional information about a phone number using the [Twilio Lookup API](https://www.twilio.com/docs/lookup/api).  This utility loads a CSV that contains [E.164](https://en.wikipedia.org/wiki/E.164) formatted phone numbers and makes a request to the API and then writes the results to a CSV.

## Getting Started

Step 1.  Git clone the repository</br>
Step 2.  If you don't have NPM installed, [install npm](https://www.npmjs.com/get-npm).</br>
Step 3.  Verify your npm installation by running the command "npm -V" from your command line.  You should get a response with your version of NPM, if not, doublecheck step 2.</br>
Step 4.  Follow the instructions to install the [Twilio Node.js](https://www.twilio.com/docs/libraries/node) helper library.</br>
Step 5.  Navigate to the root directory of where you cloned the repository.</br>
Step 6.  If you don't have a Twilio account, [sign up for one](https://www.twilio.com/try-twilio).</br>
Step 7.  Navigate to your Twilio console and locate your [Account SID](https://support.twilio.com/hc/en-us/articles/223136607-What-is-an-Application-SID-) and Auth Token.</br>
Step 8.  [Securely store your account credentials in your environment varibles.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)</br>
Step 9.  Store your source file CSV in the same location that you cloned the Git repository.  Decide what you want to name the file where your results will be saved.</br>
Step 10.  On the command line, run the utility using the format of 'node lookup.js -sourceFile -destFile -column'.
Step 11.  Enjoy!

*** NOTE: The column argument is the column where you've storage the phone numbers you want to lookup the carrier information for.

## Using the neighborhood map

The neighborhood map displays restaurants in downtown Portland that serve Mexican food.  Click on any pin drop to see additional information on that location.

Select any location in the list box on the right to see where on the map that location is.

In the InfoWindow will be a link to FourSquare to get additional information.

Service worker caching is available for off-line access.  For instructions on how to enable service worker caching, please see the notes in the "./src/registerServiceWorker.js" file.

### Prerequisites

[NPM](https://www.npmjs.com/)
[Twilio Account](https://www.twilio.com/login)
[Twilio Node.js helper library](https://www.twilio.com/docs/libraries)

### Resources used

"MDN Web Docs" [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
"Node.js Documentation" [nodejs.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
"Delay each loop iteration in node js" [stackoverflow](https://stackoverflow.com/questions/30514584/delay-each-loop-iteration-in-node-js-async) - Trott

## Authors

* **Mark Shavers** - *Initial work* - [shavez00](https://github.com/shavez00)
