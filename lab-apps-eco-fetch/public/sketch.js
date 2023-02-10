let canvas;
let dogoURL = "";
let userURL = "";
let bitcoinURL = "";
let populationURL = "";
let catURL = "";

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0, 50);
    newCursor();
}

function mouseClicked(){
    //Put here your fetch functions

    /* Option 1:
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json());
    .then(data => {
        dogoURL = data 
        console.log(dogoURL)
    }); 
    */

    getData("https://dog.ceo/api/breeds/image/random")
    getData2("https://randomuser.me/api/")
    getData3("https://api.coindesk.com/v1/bpi/currentprice.json")
    getData4("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    getData5("https://catfact.ninja/fact")
}

async function getData(URL) {
    const response = await fetch (URL);
    const data = await response.json(); 
    dogoURL = data; 
    console.log (dogoURL);
}

async function getData2(URL) {
    const response = await fetch (URL);
    const data = await response.json();
    userURL = data; 
    console.log (userURL)
}

async function getData3(URL){
    const response = await fetch (URL);
    const data = await response.json();
    bitcoinURL = data;
    console.log (bitcoinURL)
}

async function getData4(URL) {
    const response = await fetch (URL);
    const data = await response.json();
    populationURL = data;
    console.log (populationURL)
}

async function getData5(URL) {
    const response = await fetch (URL);
    const data = await response.json();
    catURL = data;
    console.log (catURL)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}