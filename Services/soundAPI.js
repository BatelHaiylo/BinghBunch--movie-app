const SoundAPIOptions = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'spotify-tracks.p.rapidapi.com'
	},
	body: '{"tracks":{"Green day":"Basket Case","Three days grace ":"Animal i have become","Judas priest":"breaking the law","The killers":"Mr brightside","Pantera":"Cemetery Gates","Depeche mode":"Personal Jesus","Iron Maiden":"The Trooper","Slipknot":"Psychosocial","Marilyn Manson":"Sweet Dreams","ZZ Top":"La Grange","Linkin Park":"In The End","Scorpions":"No One Like You"},"n":20}'
};
const BasicSoundAPI = 'https://spotify-tracks.p.rapidapi.com/'

async function getSoundtrackData(){
    try{
        // document.getElementById('div_container').innerHTML = 
        // `<div id= "loading_containrt" style="min-height: 100vh;"><img src="http://vision-summit.eu/wp-content/uploads/loading.gif" alt="popcorne" class="d-flex justify-content-center  align-items-center pt-5";"></div>`
        return await fetch(BasicSoundAPI,SoundAPIOptions)
        .then(response => response.json())
    }
    catch(eror){
        console.log(eror)
    }
    // finally{document.getElementById('loading_containrt').innerHTML =" "}
}

function addSoundtrackToPage(elementId = 'sound_on',result='<div class="row container-fluid d-flex justify-content-center">') {
    getSoundtrackData().then(res => {
        for(let i =0 ; i<res.length;i++){
        console.log(res.length)
        result += cardCompouse(res[i],i)
    }
    console.log(result)
    document.getElementById(elementId).innerHTML = result
    addMoviePic()
    })
}

function cardCompouse(obj,i){
    return `
        <div class="card col-10 col-md-3 col-xl-3 g-4 bg-black my-5" style= "max-height: 60vh; min-height:40vh;">
            <img src="" id="img_${i}" class="card-img-top">
            <div class="card-body">
            <i class="bi bi-play-fill-danger"></i>
               <h2 class="card-title">${obj[0]}</h2>
               <h6 class="card-title">by ${obj[1]}</h6>
               <img src="/VIDEO/giphy.gif" alt="soundtrack" class="h-25">
               <a class="nav-link active link-danger" data-toggle="tab" href="#{sounglink}" role="tab" aria-controls="members" aria-selected="true">download</a>
               <i class="bi bi-bookmark-plus-fill"></i>
               <i class="bi bi-suit-heart-fill" id="sound_heart"></i>
               <button class="btn btn-dark"><a href="https://soundcloud.com/" target="_blank" class="link-danger text-decoration-none">Listen</a></button>
            </div>
        </div>
    `
}

async function addMoviePic(){
    movies = await getMovieData(PopularMovieAPI) 
    movies.forEach((movie,index) => {
        document.getElementById(`img_${index}`).src=  image_path+movie.poster_path
        document.getElementById(`img_${index}`).style=  "height:30vh; width:20vw"
    });
}
