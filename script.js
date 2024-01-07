

// //Browsers Currently have ISSUES with this code so i'll
// //advice that you use multiple browsers to test and also check if issues
// //arise from using them too





// function getBatteryDetails(){
// //Get the BATTERY API
// navigator.getBattery().then(function(battery){
// //Battery Level is between 0 and 1,so we multiply current battery level by 100 to get the current percentage
// console.log("Battery Level " + parseInt(battery.level * 100) + "%");
// //output to the page too
// let batteryLevel = document.getElementById('batteryLevel');

// // swap battery icon in case the battery bars are low or not
// let batteryClassName = document.getElementById('batteryClass');
// // batteryClassName.classList.remove('fa-battery-4')

// batteryLevel.innerHTML +=+ parseInt(battery.level * 100) + "%";

// //check is battery is charging
// // Get the battery API
// navigator.getBattery().then(function(battery) {
// let batteryStatus = document.getElementById('batteryStatus');
// if (battery.charging) {
// console.log("Battery is charging");
// batteryStatus.innerHTML = "Battery is Charging";
// } else {
// batteryStatus.innerHTML = "Battery is Discharging";
// console.log("Battery is discharging");
// }
// });

// })

// }
// getBatteryDetails();
// setTimeout("getBatteryDetails()",1000);


// let deviceRAM = navigator.deviceMemory;
// let ramInfo =document.getElementById('ramInfo').innerHTML += deviceRAM;




/*A DEVICE INFO FINDER VIA THE BROWSER
The App helps you find:
The Date
The RAM
The Battery(Charging or Not and also if it is discharging or not also if it is currently dischrging and time to discharge)
The Browser
The Processors
The Browser Version
OS Platform
USER SCREEN SIZE AND ALSO THE SCREEN DEPTH OF THE USER SCREEN
Functionality can also be extended choosing your desired browser and i'm working on making this backward compatible with usr browsers
*/

function getDeviceDetails(){
//Get user Computer Date First
let info1 = new Date();
let dateInfo = document.getElementById('dateInfo');
dateInfo.innerHTML += info1;
//date info of user machine


//Get the OS Info
let osInfo = navigator.userAgentData.platform;
// osInfo2 = navigator.userAgent.toLocaleString().includes("Windows");

let osInfoHandler = document.getElementById('osInfo');
let osIcon  = document.getElementById('osIcon');
    switch(osInfo){ 
        case 'Linux':
            osInfoHandler.innerHTML += 'Linux';
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-linux');
            break;
        case 'Windows':
            osInfoHandler.innerHTML += 'Windows';
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-windows');
            break;
        case 'Apple':
            osInfoHandler.innerHTML += 'Apple';
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-apple');
            break;
        case 'Windows Phone' :
            osInfoHandler.innerHTML += 'Windows Phone';
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-windows');
                break;
        case 'Android':
            if(navigator.userAgentData.platform == "Android" && navigator.appVersion.includes('Windows Phone') || navigator.appVersion.includes('Lumia')){
                osInfoHandler.innerHTML += 'Android / Windows Phone' ;
                osInfoHandler.innerHTML += '<br>Lumia  Device Found';
                osIcon.style.transition = 'all 0.8s';
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-android');
            osIcon.style.visibility = 'hidden';
            osIcon.classList.remove('fa-android');
            osIcon.style.visibility = 'visible';
            osIcon.classList.add('fa-windows');
            }
            else if(navigator.appVersion.includes('SM',0) == true){
            osInfoHandler.innerHTML += 'Samsung Device' ;
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-android');
            }
            else if(navigator.appVersion.includes('Linux') && navigator.appVersion.includes('CrKey')){
                osInfoHandler.innerHTML += 'Nest Hub Device Detected' ;
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-android');
            }
            else{
            osInfoHandler.innerHTML += 'Android' ;
            osIcon.classList.remove('fa-linux');
            osIcon.classList.add('fa-android');
            }
            break;
        case '':
                OS = navigator.appVersion;
                if(OS.includes('RIM Tablet') == true){
                    console.log("Blackberry Device");
                    osInfoHandler.innerHTML += 'Blackberry Device Found';
                osIcon.classList.remove('fa-linux');
                osIcon.classList.add('fa-tablet');
                }
                else if(OS.includes('BB10',0) ==  true){
                    console.log("Blackberry Device");
                    osInfoHandler.innerHTML += 'Blackberry Device Found';
                osIcon.classList.remove('fa-linux');
                osIcon.classList.add('fa-tablet');
                }
                else if(OS.includes('KFAPWI',0) ==  true){
                    console.log("Kindle Fire Device");
                    osInfoHandler.innerHTML += 'Kindle Fire Device Found';
                 osIcon.classList.remove('fa-linux');
                osIcon.classList.add('fa-tablet');
                }
                else if(OS.includes('Lumia', 0) == true){
                    console.log("Lumia Device");
                    osInfoHandler.innerHTML += 'Lumia Device Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-tablet');   
                }
                else if(OS.includes('Nokia') == true){
                    console.log("Nokia Device");
                    osInfoHandler.innerHTML += 'Nokia Device Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-mobile-phone');   
                }
                else if(OS.includes('iPad',0) == true ){
                    console.log("IPad Device");
                    osInfoHandler.innerHTML += 'Ipad OS Device Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-tablet'); 
                }
                else if(OS.includes('Macintosh',0) == true){
                    console.log("IPad Device");
                    osInfoHandler.innerHTML += 'Macintosh OS Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-apple'); 
                }
                else if(OS.includes('Windows',0) == true){
                    console.log("Windows Device Found");
                    osInfoHandler.innerHTML += 'Windows Device Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-windows'); 
                }
                else if(OS.includes('iPhone',0) == true){
                    console.log("Iphone Found");
                    osInfoHandler.innerHTML += 'Iphone Found';
                osIcon.classList.remove('fa-linux');    
                osIcon.classList.add('fa-apple');
                }
            break;
        default:
            osInfoHandler.innerHTML += navigator.userAgentData.platform;
            break;
}
//OS info for the USER Finder and conditional statements ends here


// Get Device Battery Info
navigator.getBattery().then(function(battery){
    batteryLevel = parseInt(battery.level * 100);
    // //Battery Level is between 0 and 1,so we multiply current battery level by 100 to get the current percentage
console.log("Battery Level ", batteryLevel + "%");

//get the battery icon and swap based on th device abttery level
let batteryIcon = document.getElementById('batteryClass');
let batteryStatus = document.getElementById('batteryLevel');
if(batteryLevel>=20 && batteryLevel <=40){
    console.log("Battery Level",batteryLevel + "%");
    batteryIcon.classList.remove('fa-battery-4');
    batteryIcon.classList.add('fa-battery-1');
    batteryIcon.style.color = 'red';
    batteryStatus.innerHTML += batteryLevel + "%";
  //  check is battery is charging
// Get the battery API
 navigator.getBattery().then(function(battery) {
 let batteryStatus = document.getElementById('batteryStatus');
 if (battery.charging) {
 console.log("Battery is charging");
 batteryStatus.innerHTML = "Battery is Charging";
 } else {
 batteryStatus.innerHTML = "Battery is Discharging";
 console.log("Battery is discharging");
 }
 });

}
else if(batteryLevel>=45 && batteryLevel<=70){
    console.log("Battery Level",batteryLevel + "%");
    batteryIcon.classList.remove('fa-battery-4');
    batteryIcon.classList.add('fa-battery-3');
    batteryIcon.style.color = 'yellow';
    batteryStatus.innerHTML += batteryLevel + "%";
     //  check is battery is charging
// Get the battery API
    navigator.getBattery().then(function(battery) {
        let batteryStatus = document.getElementById('batteryStatus');
        if (battery.charging) {
        console.log("Battery is charging");
        batteryStatus.innerHTML = "Battery is Charging";
        } else {
        batteryStatus.innerHTML = "Battery is Discharging";
        console.log("Battery is discharging");
        }
        });
}
 //  check is battery is charging
// Get the battery API
else if(batteryLevel >=71 || batteryLevel <=80 && batteryLevel<=90){
    console.log("Battery Level",batteryLevel + "%");
    batteryIcon.classList.remove('fa-battery-4');
    batteryIcon.classList.add('fa-battery-3');
    batteryStatus.innerHTML += batteryLevel + "%";
     //  check is battery is charging
// Get the battery API
navigator.getBattery().then(function(battery) {
    let batteryStatus = document.getElementById('batteryStatus');
    if (battery.charging) {
    console.log("Battery is charging");
    batteryStatus.innerHTML = "Battery is Charging";
    batteryIcon.style.color = 'green';
    let flash = document.getElementById('bolt');
    flash.classList.add('fa-bolt');
    } else {
    batteryStatus.innerHTML = "Battery is Discharging";
    console.log("Battery is discharging");
    }
    });
}
else if(batteryLevel >=92 || batteryLevel == 99){
    console.log("Battery Level",batteryLevel + "%");
    batteryIcon.classList.remove('fa-battery-4');
    batteryIcon.classList.add('fa-battery-4');
    batteryIcon.style.color = 'green';
    batteryStatus.innerHTML += batteryLevel + "%";
    let status = document.getElementById('batteryStatus');
    status.innerHTML += "Battery is almost Full.";

     //  check is battery is charging
// Get the battery API
navigator.getBattery().then(function(battery) {
    let batteryStatus = document.getElementById('batteryStatus');
    if (battery.charging) {
    console.log("Battery is charging");
    batteryStatus.innerHTML = "Battery is Charging";
    let flash = document.getElementById('bolt');
    flash.classList.add('fa-flash');
    } else {
    batteryStatus.innerHTML = "Battery is Discharging";
    console.log("Battery is discharging");
    let flash = document.getElementById('bolt');
    flash.classList.remove('fa-flash');
    }
    });
}
else if(batteryLevel == 100){
    console.log("Battery Level",batteryLevel + "%");
    batteryIcon.classList.remove('fa-battery-4');
    batteryIcon.classList.add('fa-battery-4');
    batteryIcon.style.color = 'green';
    batteryStatus.innerHTML += batteryLevel + "%";
    let status = document.getElementById('batteryStatus');
    status.innerHTML += "Battery is Full.";
     //  check is battery is charging
// Get the battery API
navigator.getBattery().then(function(battery) {
    let batteryStatus = document.getElementById('batteryStatus');
    if (battery.charging) {
    console.log("Battery is charging");
    batteryStatus.innerHTML = "Battery is Charging";
    let flash = document.getElementById('bolt');
    flash.classList.add('fa-flash');
    } else {
    batteryStatus.innerHTML = "Battery is Discharging";
    console.log("Battery is discharging");
     flash = document.getElementById('bolt');
    flash.classList.remove('fa-flash');
    }
    });
}
});


//get the device memory (RAM) Information from the Browser sir
let deviceRAMInfo = parseInt(navigator.deviceMemory);
let memoryInfoOut = document.getElementById('memory').innerHTML += deviceRAMInfo + "GB RAM";
// //get device Memory details above

//get the device processors and numbers
let processorNUmber = parseInt(navigator.hardwareConcurrency);
console.log(processorNUmber);
let processor = document.getElementById('processor');
processor.innerHTML += processorNUmber + " PROCESSORS ";


//get user browser name or identifier for the name
//wanted to user the navigator.vendor but it didn't give output on firefox and i didnt want any compications at all so i had to test it out and get user feedback
function getBrowserType(){
const test = regexp => {
    return regexp.test(navigator.userAgent);
};
console.log(navigator.userAgent);

if(test(/opr\//i) || !!window.opr){
return 'Opera';
}else if(test(/edg/i)){
 return 'Microsoft Edge';
}else if(test(/chrome|chromium|crios/i)){
    return 'Google Chrome';
}else if(test(/firefox|fxios/i)){
    return 'Mozilla Firefox';
}else if(test(/safari/i)){
    return 'Apple Safari';
}else if(test(/trident/i)){
    return 'Microsoft Internet Explorer';
}else if(test(/ucbrowser/i)){
    return 'UC Browser';
}else if(test(/samsungbrowser/i)){
    return 'Samsung Browser';
}else{
    return 'Unknown Browser';
}

}
const browserType = getBrowserType();
console.log(browserType);

const browserTypeElement = document.getElementById('browser-type');
browserTypeElement.innerHTML += browserType;

//end of get browsertype and browser name


//get browser vesion
let browserVersion = navigator.appVersion;
let browserVersionData = document.getElementById('browser-data');
browserVersionData.innerHTML += browserVersion;

//get platform data
let platform = navigator.platform;
let platformDeviceOutput = document.getElementById('platform');
platformDeviceOutput.innerHTML += platform;

 //get the screen size of the pc
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    screenOut = document.getElementById('screen-size');
    screenOut2 = document.getElementById('screen-size-2');
    screenOut.innerHTML += ' Width = ' + screenWidth + 'px'; 
    screenOut2.innerHTML += 'Height = ' + screenHeight + 'px';
    console.log(screenOut.innerHTML);
    console.log(screenOut2.innerHTML);
    
}
