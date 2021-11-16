var SpeechRecognition = window.webkitSpeechRecognition;
//window.webkitSpeechRecognition is a web speech API it is used to recognise what we speak//


var recognition = new SpeechRecognition();
//this is acontructor which create a new object instance and stores it into a variable//
function start(){
 document.getElementById("textbox").innerHTML = "";
 recognition.start();
 //this start method is a predefined function which starts speechrecognition srevice and converts speech to text//


}

recognition.onresult = function(event){
    //onresult property of recognition represents event handler which will run when speech recognition service return a result//
    console.log(event);
    var content = event.results[0][0].transcript;
    //this line picks up the relevant data from the predefined event function//
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
   if(content == "take my selfie"){
       console.log("taking selfie");
       speak();
   }
    ;}
  

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  camera = document.getElementById("camera");

function speak(){
    var synth = window.speechSynthesis;
 //speechsynthesis is th API to convert text to speech
 //it is a controller interface for speech services
 //it holds info about the synthesis 
 //voices available on the device,start and pause speech
 //synth is avariable that holds this API

    speak_data = "Taking your selfie in 5 seconds";//
//speak_data holds the text from the website

    var utterthis = new SpeechSynthesisUtterance(speak_data);
//SpeechSynthesisUtterance is an interface of web-speech API
//it represents a speech request to convert text to speech
//it contains the content the speech service should read
//utterthis is going to hold the converted speech from the text
    synth.speak(utterthis);
//speak() is a predefined method of speechsynthesis it addds an utterance to the utterance queue
//next utterance will be spoken when previous utterance in the queue has been spoken
    Webcam.attach(camera);
//pass the camera variable (which has the HTML div) inside webcam.attach
//it is put inside speak function because we wanted it to get active the moment the system speech get over
 setTimeout(function(){
     take_selfie();
     save();},5000);
    //setTimeout() call a function after a specified time and the function is only executed one to repeat execution you can use setInterval()
}

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
    //Webcam.snap is a is a predefinedfunction of webccam.js it call back a function
    //this function contains data_uri which contains the selfie image taken
    //by webcam
}

function save(){
    link = document.getElementById("link");//it stores the anchor tag of(index.HTML)
    image = document.getElementById("selfie_image").src;//src holds image link of the selfie image tag which is of line 67
    link.href = image;
    link.click();
    //link.click() link holds the anchor tag element with download attribute
    //download attribute means if we click on the anchor tag,anything which the anchor tag holds
    //will get downloaded. In the link we are storing the source of selfie image which has been captured.
    //so link.click() will automatically download the image src is equal to the image link and href is equal to anchor tag link.

}