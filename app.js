//Loads OBJ from file
const script = document.createElement("script");
script.src = "./obj.js";
document.head.append(script);

//Gets Map for interaction
const MAP = document.querySelector('#g');

//Adds event listener for each state
for (const child of MAP.children) {
    child.addEventListener("click", function a() { showInfo(child.getAttribute("id")) });
    child.addEventListener("mouseover", function a() { showName(child.getAttribute("id")) });
    child.addEventListener("mousemove", function a(event) { highLight.style.top = event.pageY + 25 + 'px';
    highLight.style.left = event.pageX + 'px'; });
    child.addEventListener("mouseout", function a() { removeHighLight(child.getAttribute("id")) });
}

//Info area references
var Name = document.querySelector('#infoName');
var Capital = document.querySelector('#infoCapital');
var Population = document.querySelector('#infoPopulation');
var Mass = document.querySelector('#infoLandMadd');
var Industry = document.querySelector('#infoIndustry');
var Attractions = document.querySelector('#infoTouristAttractions');
var OtherName = document.querySelector('#infoNickName');
var Moto = document.querySelector('#infoMoto');
var Fact = document.querySelector('#infoFact');

//Getts data from local to write to screen
function showInfo(state) {
    states.forEach(function a(i) {
        if (i.name.replace(/\s/g, '').toLowerCase() === state) {
            Name.innerHTML = "Name: " + i.name;
            Capital.innerHTML = "Capital: " + i.capital;
            Population.innerHTML = "Population: " + i.population;
            Mass.innerHTML = "Land Mass: " + i.landmass;
            Industry.innerHTML = "Industries: " + i.majorindustry;
            Attractions.innerHTML = "Attraction: " + i.touristattractions;
            OtherName.innerHTML = "Nick name: " + i.nickname
            Moto.innerHTML = "Moto: " + i.motto;
            Fact.innerHTML = "Fun fact: " + i.funfact;
        }
    });
}

//Used for tool tip
var highLight = document.querySelector('.stateName');
var SVG = document.querySelector('#usa');

//Appends name to tool tip
function showName(state) {
    states.forEach(function a(i) {
        if (i.name.replace(/\s/g, '').toLowerCase() === state) {
            highLight.innerHTML = [
                '<div>',
                i.name,
                '</div>'
            ].join('');
        }
    })
}

//Hides tool tip Div
function removeHighLight(state){
    states.forEach(function a(i) {
        if (i.name.replace(/\s/g, '').toLowerCase() === state) {
            highLight.innerHTML = "";
        }
    })
}