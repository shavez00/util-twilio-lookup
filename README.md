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
Step 8.  [Securely store your account credentials in your environment varibles.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) as "TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN"</br>
Step 9.  Store your source file CSV in the same location that you cloned the Git repository.  Decide what you want to name the file where your results will be saved.</br>
Step 10.  On the command line, run the utility using the format of 'node lookup.js -sourceFile -destFile -column'.</br>
Step 11.  Enjoy!

*** NOTE: The column argument is the column where you've stored the phone numbers you want to lookup the carrier information for.

## Using the utility

This utility is run from the command line using node.  Your source file which will contain your list of phone numbers that you would like to get carrier information for should be saved in the same directory as the "lookup.js" file.  You can also use the absolute or relative path to reach this file as well.

The node script takes 3 arguments in order to execute.  The first argument is the source file.  The second argument is the destination file.  The third argument is the column number of where the phone numbers are located.

This script will not transform phone numbers from the normal phone format (xxx) xxx-xxxx to the E.164 format (+1xxxxxxxxxx).  You must make sure that the phone numbers are in E.164 format or the script will fail.

You also need to save you Account SID and AUTH Token as enviornment varilables named $TWILIO_ACCOUNT_SID and $TWILIO_AUTH_TOKEN or the script will fail.

The format for running the script is 'node lookup.js -sourceFile -destFile -column'.

### Prerequisites

[NPM](https://www.npmjs.com/)</br>
[Twilio Account](https://www.twilio.com/login)</br>
[Twilio Node.js helper library](https://www.twilio.com/docs/libraries)</br>

### Resources used

"MDN Web Docs" [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)</br>
"Node.js Documentation" [nodejs.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)</br>
"Delay each loop iteration in node js" [stackoverflow](https://stackoverflow.com/questions/30514584/delay-each-loop-iteration-in-node-js-async) - Trott</br>

## Authors

* **Mark Shavers** - *Initial work* - [shavez00](https://github.com/shavez00)
