
function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();



function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);


    this.play = function(){
        this.sound.play();

    }

    this.stop = function(){
        this.sound.pause();

    }
}
}


function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();


function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);


    this.play = function(){
        this.sound.play();

    }

    this.stop = function(){
        this.sound.pause();

    }
}








//better countdown timer with while loops
//15 secs intstead of 10 sec is implemented
function btrCountdownTimer(){
    var count = 15
    
    for(var i = 0; i < 1; i++){
        setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count--;
    }, 1000 * i);
}


setTimeout(function () {
//The bettercountdowntimer should display BlASTOFF!!!

document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";

//decrease the count by 1
count--;
        
        }, 15000);
    }
}





/*The evenbtrcountdowntimer should display as requested by Fleet Admiral, WARNING! 1/2 to launch way to launch!!
*/
function evenbtrCountdownTimer(){
var count = 15

    for(var i = 0; i < 15; i++){
        
            if (i == 14){
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!";
                    count--;
                }, i* 1000);
                
            }else if(i > 9){
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = "WARNING! 1/2 to launch way to launch, time left = " + count;
                    count--;
                }, i* 1000);
            
            }else{
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = count;
                    count--;
                }, i* 1000);
            }

        }
    }

//Countdown Timer should run 10...1
//Countdown Timer should run 10...1
function startCountdown() {

var count = 10;
//countdowntimer should display 10
document.getElementById("countdownTimer").innerHTML = count;
count = count - 1;

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;

    }, 1000); //set wait time as 1 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 8

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1; 

    }, 2000); //set wait time as 2 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 7

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 3000); //set wait time as 3 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 6

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 4000); //set wait time as 3 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 5

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 5000); //set wait time as 4 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 4

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 6000); //set wait time as 5 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 3

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 7000); //set wait time as 6 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 2

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 8000); //set wait time as 7 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 1

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 9000); //set wait time as 8 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display BlASTOFF!!!

        document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";

        //decrease the count by 1

        count = count - 1;

    }, 10000); //set wait time as 9 sec which in turn is to 10 to blastoff
}



//function to play craps
function playCraps(){
console.log("playCraps has started");
var die1;
die1 = Math.ceil(Math.random() * 6);
document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1;
var die2;
die2 = Math.ceil(Math.random() * 2);
document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
var dieSum = die1 + die2;
document.getElementById("sumResults").innerHTML = "The sum of die1 + die2 is: " + dieSum;
if(dieSum == 7 || dieSum == 11){
    document.getElementById("crapsResults").innerHTML = "Craps! You lose... ";
} else if (die1 == die2 && die2 % 2 == 0){
    document.getElementById("crapsResults").innerHTML = "Hurray! Doubles!! You Win!!! ";
} else {
    document.getElementById("crapsResults").innerHTML = "Please try again ";
}
}

function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval)
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}


function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    
}

//making a class to hold data
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//function to format table display
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

//function to getData
function getData() {
    var loadedData = loadData();
    return loadedData;
}
 function indexTrans(){
    location.replace("index.html");

 }
 function objScripts(){
    location.replace("objectives.html");

 }
