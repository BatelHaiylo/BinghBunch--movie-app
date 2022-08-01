function  pageMovies() {
    localStorage.setItem('page', 'Movies');
    document.querySelector('#div_container').innerHTML = addToPage()
}


async function addToPage(elementId = 'movie_page',result='<div class="row container-fluid">') {
    let movies = await getData() 
    console.log(movies)
    movies.forEach((movie,index) => {
      if(index % 3 == 0) {result += '</div><div class="row container-fluid">'}
        result += template(movie)
    });
  document.getElementById(elementId).innerHTML = result
}
function template(movie) {
    let {year,title,id} = movie
    return `
        <div class="card col-sm-10 col-md-4 g-4" id="${id}">
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <h5 class="card-title">${year}</h5>
            <button onclick="deleteMovies('${id}')" class="btn btn-dark">delete</button>
          </div>
        </div>
    `
}

async function deleteMovie(id){
  try{
    let response = await fetch(`${MoviesApi}/${id}`,{
      method: 'DELETE',
      headers: {'Content-type': 'application/json;'}
    })

    if(response.status <= 299) 
      document.getElementById(id).remove()
    else document.getElementById('errors').innerHTML = 'Something wrong on deleting'
} catch(error){this.error(error)
}finally{}
}


//     search: [{id: "tt0073195", title: "Jaws", year: 1975, score: 86, type: "movie", imdbid: "tt0073195",…},…]
// 0: {id: "tt0073195", title: "Jaws", year: 1975, score: 86, type: "movie", imdbid: "tt0073195",…}
// 1: {id: "tt0077766", title: "Jaws 2", year: 1978, score: 55, type: "movie", imdbid: "tt0077766",…}
// 2: {id: "tt0085750", title: "Jaws 3-D", year: 1983, score: 39, type: "movie", imdbid: "tt0085750",…}
// 3: {id: "tt0093300", title: "Jaws: The Revenge", year: 1987, score: 29, type: "movie",…}
// 4: {id: "tt8305692", title: "Santa Jaws", year: 2018, score: 26, type: "movie", imdbid: "tt8305692",…}
// 5: {id: "tt0112747", title: "Cruel Jaws", year: 1995, score: 26, type: "movie", imdbid: "tt0112747",…}
// 6: {id: "tt0251821", title: "The Making of Jaws", year: 1995, score: 25, type: "movie",…}
// 7: {id: "tt0469185", title: "The Shark Is Still Working: The Impact & Legacy of Jaws", year: 2009,…}
// 8: {id: "tt0074845", title: "Mako: The Jaws of Death", year: 1976, score: 16, type: "movie",…}
// 9: {id: "tt0082580", title: "Jaws of Satan", year: 1981, score: 13, type: "movie", imdbid: "tt0082580",…}
// 10: {id: "tt0088312", title: "In the Jaws of Life", year: 1984, score: 7, type: "movie",…}
// 11: {id: "tt1701999", title: "Jaws: The Inside Story", year: 2010, score: 0, type: "movie",…}
// 12: {id: "tt0290241", title: "The Making of Jaws 2", year: 2001, score: 0, type: "movie",…}
// 13: {id: "tt2245418", title: "Jaws: The Restoration", year: 2012, score: 0, type: "movie",…}
// 14: {id: "tt4269346", title: "Moose Jaws", year: null, score: 0, type: "movie", imdbid: "tt4269346",…}
// 15: {id: "tt0024192", title: "Jaws of Justice", year: 1933, score: 0, type: "movie", imdbid: "tt0024192",…}
// 16: {id: "tr363004", title: "Jaws", year: 2018, score: 0, type: "movie", imdbid: null, tmdbid: 514492,…}
// 17: {id: "tr573424", title: "Tyson vs Jaws: Rumble on the Reef", year: 2020, score: 0, type: "movie",…}
// 18: {id: "tt1732651", title: "Ghost Shark 2: Urban Jaws", year: 2015, score: 0, type: "movie",…}
// 19: {id: "tt3058690", title: "Jaws on Netflix", year: 2013, score: 0, type: "movie", imdbid: "tt3058690",…}
// 20: {id: "tt4644266", title: "Inside Jaws: A Filmumentary", year: 2013, score: 0, type: "movie",…}
// 21: {id: "tt0995045", title: "The Making of Jaws 3-D: Sharks Don't Die", year: 1983, score: 0,…}
// 22: {id: "tt0124361", title: "Deep Jaws", year: 1976, score: 0, type: "movie", imdbid: "tt0124361",…}
// 23: {id: "tt11319636", title: "Jaws Returns", year: 2021, score: 0, type: "movie", imdbid: "tt11319636",…}
// 24: {id: "tt0018036", title: "Jaws of Steel", year: 1927, score: 0, type: "movie", imdbid: "tt0018036",…}
// 25: {id: "tr192214", title: "Air Jaws 1 and 2: Sharks of South Africa", year: null, score: 0,…}
// 26: {id: "tr126214", title: "Africa's Claws and Jaws", year: 2017, score: 0, type: "show", imdbid: null,…}
// 27: {id: "tt5225488", title: "Saving Jaws", year: 2019, score: 0, type: "movie", imdbid: "tt5225488",…}
// 28: {id: "tt0273693", title: "Jaws", year: 1978, score: 0, type: "movie", imdbid: "tt0273693",…}
// 29: {id: "tt2387720", title: "In the Teeth of Jaws", year: 1997, score: 0, type: "movie",…}
// 30: {id: "tt5478370", title: "Jaws of the Shark", year: 2012, score: 0, type: "movie", imdbid: "tt5478370",…}
// 31: {id: "tr187014", title: "World's Deadliest: Jaws & Sins", year: 2013, score: 0, type: "show",…}
// 32: {id: "tt5299162", title: "Jaws: From the Set", year: 1974, score: 0, type: "movie",…}
// 33: {id: "tt0995030", title: "The Making of Jaws The Revenge", year: 1987, score: 0, type: "movie",…}
// 34: {id: "tr22055", title: "Spotlight On Location: The Making of Jaws", year: 2000, score: 0,…}
// 35: {id: "tt5033000", title: "Jaws 19", year: 2015, score: 0, type: "movie", imdbid: "tt5033000",…}
// 36: {id: "tr794421", title: "The Croc That Ate Jaws: Ancient Enemies", year: 2022, score: 0, type: "movie",…}
// 37: {id: "tr794471", title: "Jaws vs. Boats", year: 2022, score: 0, type: "movie", imdbid: null,…}
// 38: {id: "tr794566", title: "Counting Jaws", year: 2022, score: 0, type: "movie", imdbid: null,…}
// 39: {id: "tr794567", title: "Jaws Invasion", year: 2022, score: 0, type: "movie", imdbid: null,…}
// 40: {id: "tt0072303", title: "Deadly Jaws", year: 1974, score: 0, type: "movie", imdbid: "tt0072303",…}
// 41: {id: "tt0126184", title: "Jaws of the Jungle", year: 1936, score: 0, type: "movie",…}
// 42: {id: "tt1433814", title: "Jaws on Trotters: The Making of 'Razorback'", year: 2005, score: 0,…}
// 43: {id: "tt0329304", title: "Lion's Jaws and Kitten's Paws", year: 1920, score: -1, type: "movie",…}
// 44: {id: "tt14897308", title: "Jaws Ruin the Prom", year: 2021, score: -1, type: "movie",…}
// 45: {id: "tr183812", title: "Mega Jaws of Bird Island", year: 2021, score: -1, type: "show", imdbid: null,…}
// 46: {id: "tr690253", title: "World’s Deadliest: Jaws & Sins", year: null, score: -1, type: "movie",…}
// 47: {id: "tt0326987", title: "The Jaws of Justice", year: 1919, score: -1, type: "movie",…}
// 48: {id: "tt0407097", title: "Out of the Jaws of Death", year: 1913, score: -1, type: "movie",…}
// 49: {id: "tt0375870", title: "The Jaws of Steel", year: 1922, score: -1, type: "movie",…}
// total: 50