
var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;

function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9sx4KWlnr/model.json',modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error, results) 
{
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+" , Detected Cat - "+cat+" , Detected lion - "+lion+" , Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images"); 

        if(results[0].label == "Barking") {
            img.src = "https://media.giphy.com/media/pl68Ok2377G00/giphy.gif";
            dog = dog + 1;
        }
        else if(results[0].label == "Meowing") {
            img.src = "https://media1.tenor.com/images/d3136220744f204a3f6e02bb6c21e3a4/tenor.gif?itemid=8417937";
            cat = cat + 1;
        }
        else if(results[0].label == "Mooing") {
            img.src = "https://th.bing.com/th/id/OIP.tOEdwrcCB8uU9CM4as8_LAHaE-?pid=ImgDet&rs=1";
            cow = cow + 1;
        }
        else if(results[0].label == "Roaring") {
            img.src = "https://th.bing.com/th/id/OIP.xHCOEyvm4Mk-eILnReX0QQAAAA?pid=ImgDet&rs=1";
            lion = lion + 1;
        }
        else{
            img.src = "https://saltwaterco.com/wp-content/uploads/2018/09/ear.gif";
        }    
    }
}