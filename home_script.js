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

// can use currSelection.includes(NAME);
// currSelection.push(NAME);


makeTags();

// for 

// res = fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
// 			.then (res => res.text())
// 			.then (data => 
// 			{
// 				data = JSON.parse(data);
//                 console.log(data);
//                 // gets charity tags
//                 const tags = data.data.nonprofitTags;

//                 // sends each tag to makeTag
//                 for (const element of tags) {
//                     makeTag(element);
//                     console.log(element.tagName);
//                 }
//                 console.log(tags)
// 				// alert(JSON.stringify(data));
// 				// let name = data.name;
// 				// let age = data.age;
// 				// let count = data.count;
// 				// document.getElementById("fetchData").innerHTML = "guess of age based on name " + name + ": " + age + ". This means you would be born in " + count;
// 			})
// 			.catch (error => console.log(error))

// makes each tag element
function makeTags() {
    let inner = "";
    for (const elm of causes) {
        inner += `<button class="btn filters" id="${elm}" onclick=searchTag("${elm}") >${elm}</button>`
        console.log(elm);

    }

    // inner = `<button class="btn filters" id="${tag.tagName}" onclick="searchTag(${tag.tagName})" >${tag.title}</button>`
    // console.log("AFTER INNER MADE");
    tagsEl.innerHTML = inner;

}

function searchTag(tag) {

    if (currSelection.includes(tag)) { // if tag already been called then should take off on click
        let index = currSelection.indexOf(tag);
        console.log("INDEX OF " + tag + "   " + index + "   " + currSelection);
        currSelection.splice(index, 1);
        // delete currSelection[currSelection.indexOf(tag)];
    } else {
        currSelection.push(tag);
    }

    let allTags = "";

    for (const curr of currSelection) {
        allTags += curr + ",";
    }
    allTags = allTags.substring(0, allTags.length - 1);
    console.log("ALL TAGS: " + allTags);


    // fetch("https://partners.every.org/v0.2/browse/animals?apiKey=myPublicApiKey");
    // console.log("HERE IS THE FETCH CALL: " + "https://partners.every.org/v0.2/browse/" + tag + "?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
    res = fetch("https://partners.every.org/v0.2/search/causes=" + allTags + "?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
			.then (res => res.text())
			.then (data => 
			{
				data = JSON.parse(data);
                console.log(data);

                const orgs = data.nonprofits;
                for (const element of orgs) {
                    displayOrg(element);
                    // console.log(element.tagName);
                }
                // gets charity tags
//                 const tags = data.data.nonprofitTags;

//                 // sends each tag to makeTag
//                 for (const element of tags) {
//                     makeTag(element);
//                     console.log(element.tagName);
//                 }
                // gets charity tags
                // const tags = data.data.nonprofitTags;

                // // sends each tag to makeTag
                // for (const element of tags) {
                //     makeTag(element);
                //     console.log(element.tagName);
                // }
                // console.log(tags)
				// alert(JSON.stringify(data));
				// let name = data.name;
				// let age = data.age;
				// let count = data.count;
				// document.getElementById("fetchData").innerHTML = "guess of age based on name " + name + ": " + age + ". This means you would be born in " + count;
			})
			.catch (error => console.log(error))
}

function displayOrg(elm) {
    // console.log(elm.name);
    // console.log(elm.logURL);
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
                    elmUrl = "owen.jpg"
                }
                console.log(url + "     EIN");
                // let inner = `<div class="org-list"> <img class="orgPic" src="${data.data.nonprofit.coverImageUrl}" alt="orgPic" class="orgPic">
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
                // let inner = `<div class="org-list"> <img class="orgPic" src="${data.data.nonprofit.coverImageUrl}" alt="orgPic" class="orgPic">
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
    // console.log(description);
    




    // <img class="orgPic" src="alana.jpg" alt="orgPic" class="orgPic">
    //             <button class="btttn orgName">NAME HERE</button>
    //     </br>
    //             <h8>
    //                 DESCRIPTION HERE
    //             </h8>
}

// console.log("hiiiiii");
// fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
//         .then(res => res.json())
//         .then(data => {console.log(data.results)})

// fetch(`https://partners.every.org/v0.2/fundraiser`, {
//   method: HttpMethod.POST,
//   headers: {
//     "Content-Type": "application/json",
//     /* eslint-enable @typescript-eslint/naming-convention */
//     Authorization: `Basic ${Buffer.from(`${pk_live_3fcf5c20985c68d7907fc33ea5ef9778}:${sk_live_f655a256a8945f823f6949fa40ad09da}`).toString(
//       "base64"
//     )}`,
//   },
//   body: {
//     ...fundraiserInfo,
//   },
// });


// getCharities(API_URL);

// function getCharities(url) {
  
//   lastUrl = url;
//   console.log("url in getCharities func: " + url);
//     fetch(url).then(res => res.json()).then(data => {
//         console.log(data.results)
//         // if(data.results.length !== 0){
//         //     showMovies(data.results);
//         //     currentPage = data.page;
//         //     nextPage = currentPage + 1;
//         //     prevPage = currentPage - 1;
//         //     totalPages = data.total_pages;

//         //     current.innerText = currentPage;

//         //     if(currentPage <= 1){
//         //       prev.classList.add('disabled');
//         //       next.classList.remove('disabled')
//         //     }else if(currentPage>= totalPages){
//         //       prev.classList.remove('disabled');
//         //       next.classList.add('disabled')
//         //     }else{
//         //       prev.classList.remove('disabled');
//         //       next.classList.remove('disabled')
//         //     }

//         //     tagsEl.scrollIntoView({behavior : 'smooth'})

//         // }else{
//         //     main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
//         // }
       
//     })

// }