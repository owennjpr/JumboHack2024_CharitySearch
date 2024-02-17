const API_KEY = 'pk_live_3fcf5c20985c68d7907fc33ea5ef9778';
const BASE_URL = 'https://partners.every.org/v0.2/nonprofit/maps?apiKey=';
const API_URL = BASE_URL + API_KEY;
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;

getMovies(API_URL);

function getMovies(url) {
  
  lastUrl = url;
  console.log("url in getMovies func: " + url);
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        // if(data.results.length !== 0){
        //     showMovies(data.results);
        //     currentPage = data.page;
        //     nextPage = currentPage + 1;
        //     prevPage = currentPage - 1;
        //     totalPages = data.total_pages;

        //     current.innerText = currentPage;

        //     if(currentPage <= 1){
        //       prev.classList.add('disabled');
        //       next.classList.remove('disabled')
        //     }else if(currentPage>= totalPages){
        //       prev.classList.remove('disabled');
        //       next.classList.add('disabled')
        //     }else{
        //       prev.classList.remove('disabled');
        //       next.classList.remove('disabled')
        //     }

        //     tagsEl.scrollIntoView({behavior : 'smooth'})

        // }else{
        //     main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        // }
       
    })

}