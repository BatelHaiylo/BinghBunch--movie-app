function  pageTopMovies(){
  localStorage.setItem('page', 'TOP THIS WEEK');
  document.querySelector('#div_container').innerHTML = addMovieToPage(TopMovieAPI)
}

