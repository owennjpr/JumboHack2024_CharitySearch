// var http = require("http");


const API_KEY = 'pk_live_3fcf5c20985c68d7907fc33ea5ef9778';
const BASE_URL = 'https://partners.every.org/v0.2/nonprofit/maps?apiKey=';
const API_URL = BASE_URL + API_KEY;
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;


res = fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_3fcf5c20985c68d7907fc33ea5ef9778")
			.then (res => res.text())
			.then (data => 
			{
				data = JSON.parse(data);
                console.log(data);
				// alert(JSON.stringify(data));
				// let name = data.name;
				// let age = data.age;
				// let count = data.count;
				// document.getElementById("fetchData").innerHTML = "guess of age based on name " + name + ": " + age + ". This means you would be born in " + count;
			})
			.catch (error => console.log(error))

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