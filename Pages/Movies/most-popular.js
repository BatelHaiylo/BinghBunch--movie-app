function  pagePopularMovies(){
  localStorage.setItem('page', 'Popular');
  document.querySelector('#div_container').innerHTML = addMovieToPage(PopularMovieAPI)
}
