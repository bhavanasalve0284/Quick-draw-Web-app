function setup() {
    canvas = createCanvas(280, 280);
    canvas.centre();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}


function clearCanvas(){
    background("white");
}
function preload() {
    classifier =ml5.imageClassifier('DoodleNet');
}
function draw() {
}
// Set stroke weight to 13
strokeWeight(13);
// Set stroke clolor to black
strokeWeight(0);
// If mouse is pressed,draw line betweenprevious and current mouse positions
if (mouseIsPressed) {
    Line(pmouseX, pmouseY, mouseX, mouseY);
}
functionclassifyCanvas() {
    classifier.classifyCanvas(canvas, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    } 
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' +results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence: ' +Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}