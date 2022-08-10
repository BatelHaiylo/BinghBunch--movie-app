let API_KEY = "?api_key=698c26f192e68da611452c5592599ea2"
let image_path = "https://image.tmdb.org/t/p/w500";

const PopularMovieAPI = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2'
const TopMovieAPI = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=698c26f192e68da611452c5592599ea2'
const DramaMovieApi ='https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014.desc&api_key=698c26f192e68da611452c5592599ea2'
const SienceFMovieApi = 'https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=698c26f192e68da611452c5592599ea2'
const KidsMoieApi ='https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2'
const SearchMovieApi =`https://api.themoviedb.org/3/search/movie${API_KEY}&query="`

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

async function addMovieToPage(url,elementId = 'div_container',result='<div class="row container-fluid d-flex justify-content-center">') {
  movies = await getMovieData(url) 
  movies.forEach((movie,index) => {
    if(index % 4 == 0) {result += '</div><div class="row container-fluid d-flex justify-content-center">'}
      result += cardTemplate(movie,index)
  });
document.getElementById(elementId).innerHTML =  result
// fetchMoviesTrailers()
}

addMovieToPage (SearchMovieApi+"b")
function cardTemplate(movie,index) {
  let {original_language, title, overview, popularity,poster_path, release_date, vote_average, vote_count, id} = movie
  return `
  <div class="card col-sm-10 col-md-6 col-lg-4 col-xl-3 g-4 bg-black" id="${id}" style= "max-height: 75vh; min-height:60vh;">
  <div  data-bs-toggle="modal" class="" data-bs-target="#model">
  <img data-bs-toggle="modal" data-bs-target="#model${index}"src=${image_path+poster_path} class="card-img-top front"/>
  </div>

  <div class="modal fade" id="model${index}" tabindex="-1" aria-labelledby="modelLabel" aria-hidden="true">
<div class="modal-dialog bg-black">
<div class="modal-content bg-black">
<div class="modal-header bg-black">
  <span class="modal-title" id="modelLabel">
</div>
<div id="modelbody${index}" class="modal-body bg-black text-white movie_card_body">
  <h1>${title}   <h6>${release_date}</h6></h1>
  <p>${original_language}</p>
  <h6>${overview}</h6>
</div>
<div class="modal-footer">
  <span class="text-white"><i class="bi bi-heart-fill" id="movie_heart">${popularity}  </i></span>
  <span><i class="bi bi-hand-thumbs-up-fill" id="movie_tumb"><b id="rating">${vote_average}   </b></i><i class="bi bi-person-fill">     ${vote_count}</i></i></span>

  <button type="button"  data-trailer="${index}" disabled class="btn btn-secondary play_btn">play</button>
</div>
</div>
</div>
</div>
</div>
  `
}
