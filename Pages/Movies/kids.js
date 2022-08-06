function  pageKidsMovies(){
  localStorage.setItem('page', 'KIDS');
  document.querySelector('#div_container').innerHTML = addMovieToPage(KidsMoieApi)
}
