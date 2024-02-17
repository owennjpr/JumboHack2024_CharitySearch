// var http = require("http");


const API_KEY = 'pk_live_3fcf5c20985c68d7907fc33ea5ef9778';
const BASE_URL = 'https://partners.every.org/v0.2/nonprofit/maps?apiKey=';
const API_URL = BASE_URL + API_KEY;
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const tagsEl = document.getElementById('tags');


res = fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
			.then (res => res.text())
			.then (data => 
			{
				data = JSON.parse(data);
                console.log(data);
                // gets charity tags
                const tags = data.data.nonprofitTags;

                // sends each tag to makeTag
                for (const element of tags) {
                    makeTag(element);
                    console.log(element.tagName);
                }
                console.log(tags)
				// alert(JSON.stringify(data));
				// let name = data.name;
				// let age = data.age;
				// let count = data.count;
				// document.getElementById("fetchData").innerHTML = "guess of age based on name " + name + ": " + age + ". This means you would be born in " + count;
			})
			.catch (error => console.log(error))

// makes each tag element
function makeTag(tag) {
    // tagsEl.innerHTML = '';

    // const elm = document.createElement('div');
    // elm.classList.add('tag');
    // elm.id=tag.tagName;
    // elm.innerText = tag.title;

    inner = `<button class="btn filters" id="${tag.tagName}" onclick="searchTag(${tag.tagName})" >${tag.title}</button>`
    console.log("AFTER INNER MADE");
    // should add event listener when ready

    // elm.addEventListener('click', () => {
    //     // if(selectedGenre.length == 0){
    //     //     selectedGenre.push(genre.id);
    //     // }else{
    //     //     if(selectedGenre.includes(genre.id)){
    //     //         selectedGenre.forEach((id, idx) => {
    //     //             if(id == genre.id){
    //     //                 selectedGenre.splice(idx, 1);
    //     //             }
    //     //         })
    //     //     }else{
    //     //         selectedGenre.push(genre.id);
    //     //     }
    //     // }
    //     // console.log(selectedGenre)
    //     getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
    //     highlightSelection()
    // })
    // tagsEl.append(elm);

    tagsEl.innerHTML += inner;

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