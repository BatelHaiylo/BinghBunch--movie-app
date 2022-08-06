const PopularMovieAPI = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2'
const TopMovieAPI = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=698c26f192e68da611452c5592599ea2'
const DramaMovieApi ='https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014.desc&api_key=698c26f192e68da611452c5592599ea2'
const SienceFMovieApi = 'https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=698c26f192e68da611452c5592599ea2'
const KidsMoieApi ='https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2'

let API_KEY = "?api_key=698c26f192e68da611452c5592599ea2"
let image_path = "https://image.tmdb.org/t/p/w500";
let movies;
async function getMovieData(url){
    try{
        return await fetch(url)
        .then(res => res.json()).then(res => res.results)
    }
    catch(eror){
        alert(eror)
    }
    finally{}
}

async function addMovieToPage(url,elementId = 'div_container',result='<div class="row container-fluid">') {
  movies = await getMovieData(url) 
  movies.forEach((movie,index) => {
    if(index % 4 == 0) {result += '</div><div class="row container-fluid">'}
      result += cardTemplate(movie,index)
  });
document.getElementById(elementId).innerHTML = result
}

function cardTemplate(movie) {
  let {original_language, title, overview, popularity,poster_path, release_date, vote_average, vote_count, id} = movie
  return `
      <div class="card col-sm-10 col-md-3 g-4 bg-black" id="${id}" style= "max-height: 70vh; min-height:60vh;">
        <img src="${ image_path+poster_path}" class="card-img-top front">
        <div class="card-body back">
          <h1 class="card-title">${title}   <h6>${release_date}</h6></h1>
          <h5 class="card-title">${overview}</h3>
          <h6 class="card-title">${original_language}</h5>
          <span class="card-title">   <i class="bi bi-heart-fill" id="movie_heart">${popularity}  </i></span>
          <span class="card-title"><i class="bi bi-hand-thumbs-up-fill" id="movie_tumb"><b>${vote_average}   </b></i><i class="bi bi-person-fill">     ${vote_count}</i></span><br><br>
        </div>
      </div>
  `
}
