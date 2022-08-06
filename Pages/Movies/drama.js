function  pageDramaMovies(){
  localStorage.setItem('page', 'Drama');
  document.querySelector('#div_container').innerHTML = addMovieToPage(DramaMovieApi)
}

