Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
Webcam.attach('#webcam');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("Snapshotdiv").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lA9---Id9/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check() {
    console.log('check');
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById('name').innerHTML = results[0].label;
        document.getElementById('percent').innerHTML = results[0].confidence;
    }
}
