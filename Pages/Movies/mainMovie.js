function  pageAllMovies(){
    localStorage.setItem('page', 'All Movies');
    document.querySelector('#above_container').innerHTML = `
    <div class="form-container container">
    <form class="d-flex" role="search" id="searchForm">
    <input class="form-control me-2" oninput="searchMovie(event)" id="searchInput" type="search" placeholder="Search..." aria-label="Search">
    </form>
    </div>
    
    `
    addMovieToPage(SearchMovieApi+"b")
}

function searchMovie(e){
  e.preventDefault()
  let container = document.getElementById('div_container');
  let searchValue =document.getElementById('searchInput').value;
  if(searchValue){
    addMovieToPage(SearchMovieApi+searchValue)
  }
  if(container.value == ""){
    container.innerHTML= '<h1> movie not found </h1>'
  }
}

