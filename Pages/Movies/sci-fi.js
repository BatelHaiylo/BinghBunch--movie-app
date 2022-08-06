function  pageScifiMovies(){
  localStorage.setItem('page', 'Sci-fi');
  document.querySelector('#div_container').innerHTML = addMovieToPage(SienceFMovieApi)
}
