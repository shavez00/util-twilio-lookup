const fs = require('fs');
const destFile = process.argv[3];
const sourceFile = process.argv[2];
const column = process.argv[4];

if(typeof sourceFile == "undefined") {
        console.log("Please input the file name of source data as the first argument 'node lookup.js -sourceFile -destFile -column'");
        process.exit(1);
}

if(typeof destFile == "undefined") {
	console.log("Please input file name where output data should be written as the second argument 'node lookup.js -sourceFile -destFile -column'");
	process.exit(1);
}

if(typeof column == "undefined") {
        console.log("Please input the column number where the e164 formatted data can be found as the third argument 'node lookup.js -sourceFile -destFile -column'");
        process.exit(1);
}

createArrayOfNum(sourceFile)
        .then(function(csv) {
                createE164NumArray(csv)
                        .then(function(e164Array) {
                                getResults(e164Array);
                        });
        });

var interval = 12; 

function readList(listFile) {
	var fileArray = fs.readFileSync(listFile, 'utf8').split("\n");
	for (var i =0;i<fileArray.length;i++) {
		var newNum = fileArray[i].replace("\r","");
		fileArray.splice(i,1,newNum);
	}
	return fileArray;
};

function createArrayOfNum(sourceFile) {
        try {
                var csv = readList(sourceFile);
                console.log("original list count = " + csv.length);
                return new Promise(function(resolve, reject) {
                        if (csv != null) {
                                resolve(csv);
                        } else {
                                reject(console.log("Error reading source data file!"));
                        }
                })
        } catch (err) {
                console.log("Error reading source data");
                process.exit(1);
        };
};

function createE164NumArray(csv) {
        var e164Array = [];
        return new Promise(function(resolve, reject) {
                csv.forEach(function(element) {
                        var e164 = element.split(',');
                        e164Array.push(e164[column-1]);
                });
                resolve(e164Array);
                reject("Error creating array of e164 formatted phone numbers");
        });
}

function getResults(e164Array) {
        for (var i = 0; i <= e164Array.length-1; i++) {
                setTimeout( function (i) {
                        getPhoneNumType(e164Array[i])
                                .then(function(results) {
                                        saveResults(results);
                                });
                }, interval * i, i);
	}
}


function getPhoneNumType(e164) {
        if (checkAreaCode(e164) != false) {
                console.log("Retrieving number type for " + e164);
		const accountSid = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;
                const client = require('twilio')(accountSid, authToken);

                return new Promise(function(resolve, reject) {
                        client.lookups.phoneNumbers(e164)
                                .fetch({type: 'carrier'}, function(num){
                                    if (num != null) {
                                        var error_code = "Error code " + num.code + " " + e164 + " is not a valid phone number";
                                        var result = [e164, error_code];
                                        console.log(e164 + " is not a valid number");
                                        resolve(result);
                                    }
                                 })
                                .then(function(phone_number) {
                                        var result = [e164, phone_number.carrier.type];
                                        resolve(result);
                                })
                })
        } else {
                return new Promise(function(resolve, reject) {
			if(typeof e164 == "undefined") {
				console.log ("One of the numbers in your csv is not a valid e164 phone number")
			} else {
                        	resolve ([e164, "Not a US number"]);
			}
                })
        }
}


//changing the result varible for 'false' will allow the script to check area 
//codes and validate if it's a US or CA number
function checkAreaCode(e164) {
/*
	var result = true;
	if (typeof e164 != "string") return false;
	var areaCodeArray = readList("./areaCodes.csv");
	var num = e164.slice(0, -7).replace("+1","");
	if (areaCodeArray.includes(num)) result = "US";
	if (result != "US") {
		var canadianAreaCodeArray = readList("./canadianAreaCodes.csv");
        	if (canadianAreaCodeArray.includes(num)) result = "CA";
	} 
	return result;
*/};

function saveResults(result) {
	console.log("Writing phone number type for " + result[0]);
        fs.appendFile(destFile, result[0] + "," + result[1] + "\r\n", (err) => {
                if (err) console.log(err);
        });
}
