// Make some data structure for taking 

const API_KEY = 'pk_live_3fcf5c20985c68d7907fc33ea5ef9778';
const BASE_URL = 'https://partners.every.org/v0.2/nonprofit/maps?apiKey=';
const API_URL = BASE_URL + API_KEY;
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const tagsEl = document.getElementById('tags');
const orgsEl = document.getElementById('orgs');

const causes = [
    "aapi-led",
    "adoption",
    "afghanistan",
    "animals",
    "art",
    "athletics",
    "autism",
    "black-led",
    "buddhism",
    "cancer",
    "cats",
    "christianity",
    "climate",
    "conservation",
    "coronavirus",
    "culture",
    "dance",
    "disabilities",
    "disease",
    "dogs",
    "education",
    "environment",
    "filmandtv",
    "food-security",
    "freepress",
    "gender-equality",
    "health",
    "hinduism",
    "housing",
    'humans',
    "hurricane-ian",
    "immigrants",
    "indigenous-led",
    "indigenous-peoples",
    "islam",
    "judaism",
    "justice",
    "latine-led",
    "legal",
    "lgbt",
    "libraries",
    "mental-health",
    "museums",
    "music",
    "oceans",
    "parks",
    "poverty",
    "racial-justice",
    "radio",
    "refugees",
    "religion",
    "research",
    "science",
    "seniors",
    "space",
    "theater",
    "transgender",
    "ukraine",
    "veterans",
    "votingrights",
    "water",
    "wildfires",
    "wildlife",
    "women-led",
    "womens-health",
    "youth"
]

let currSelection = [];

makeTags();

// makes each tag element
function makeTags() {
    let inner = "";
    for (const elm of causes) {
        inner += `<button class="btn filters" id="${elm}" onclick=searchTag("${elm}") >${elm}</button>`
        console.log(elm);

    }

    tagsEl.innerHTML = inner;

}

function searchTag(tag) {
    const toChange = document.getElementById(tag);
    if (currSelection.includes(tag)) { // if tag already been called then should take off on click
        let index = currSelection.indexOf(tag);
        console.log("INDEX OF " + tag + "   " + index + "   " + currSelection);
        currSelection.splice(index, 1);
        toChange.style.backgroundColor = "inherit";
        toChange.style.color = "#74c074";

    } else {
        currSelection.push(tag);
        
        toChange.style.backgroundColor = "#74c074";
        toChange.style.color = "white";
    }

    let allTags = "";

    for (const curr of currSelection) {
        allTags += curr + ",";
    }
    allTags = allTags.substring(0, allTags.length - 1);
    console.log("ALL TAGS: " + allTags);


    res = fetch("https://partners.every.org/v0.2/search/causes=" + allTags + "?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
			.then (res => res.text())
			.then (data => 
			{
				data = JSON.parse(data);
                console.log(data);

                const orgs = data.nonprofits;
                for (const element of orgs) {
                    displayOrg(element);
                }

			})
			.catch (error => console.log(error))
}

function displayOrg(elm) {
    let description = "";
    if (!(elm.ein === undefined)) {
        res = fetch("https://partners.every.org/v0.2/nonprofit/" + elm.ein + "?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
            .then (res => res.text())
            .then (data => 
            {
                data = JSON.parse(data);
                console.log(data)
                let description = data.data.nonprofit.description;
                let url = "";
                if (data.data.nonprofit.websiteUrl == null) {
                    url = data.data.nonprofit.profileUrl;
                } else {
                    url = data.data.nonprofit.websiteUrl;
                }
                let elmUrl = "";
                if (elm.logoUrl !== undefined) {
                    elmUrl = elm.logoUrl;
                } else if (data.data.nonprofit.logoUrl !== undefined) {
                    elmUrl = data.data.nonprofit.logoUrl;
                } else {
                    elmUrl = "blankLogo.png"
                }
                console.log(url + "     EIN");
                let inner = `<div class="org-list"> <img class="orgPic" src="${elmUrl}" alt="orgPic" class="orgPic">

                <a href="${url}">${elm.name}</a>
                </br>
                <h8>
                    ${description}
                </h8>
                </div>
                <hr>`  
                
                orgsEl.innerHTML += inner;

            })
    } else {
        console.log("slug alert");
        res = fetch("https://partners.every.org/v0.2/nonprofit/" + elm.slug + "?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
            .then (res => res.text())
            .then (data => 
            {
                data = JSON.parse(data);
                console.log(data)
                let description = data.data.nonprofit.description;
                let url = "";
                if (data.data.nonprofit.websiteUrl === null) {
                    console.log("IS NULL");
                    url = data.data.nonprofit.profileUrl;
                } else {
                    url = data.data.nonprofit.websiteUrl;
                }
                console.log(url);
                let inner = `<div class="org-list"> <img class="orgPic" src="${data.data.nonprofit.logoUrl}" alt="orgPic" class="orgPic">
                <a href="${url}">${elm.name}</a>

                </br>
                <h8>
                    ${description}
                </h8>
                </div>
                <hr>`

                orgsEl.innerHTML += inner;


            })
    }
    
}
