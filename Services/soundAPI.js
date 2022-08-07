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
        document.getElementById('div_container').innerHTML += 
        `<div id= "loading_containrt" class="d-flex justify-content-center  align-items-center pt-5" style="min-height: 100vh;"><img src="http://vision-summit.eu/wp-content/uploads/loading.gif" alt="popcorne"></div>`
        return await fetch(BasicSoundAPI,SoundAPIOptions)
        .then(response => response.json())
    }
    catch(eror){
        console.log(eror)
    }
    finally{document.getElementById('loading_containrt').innerHTML =" "}
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
    <div class="card m-3 bg-dark" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-3">
      <img id="img_${i}" class="img-fluid rounded-start">
    </div>
      <div class="card-body col-md-6">
        <h5 class="card-title">${obj[0]}</h5>
        <p class="card-text">by ${obj[1]}</p>
        <p class="card-text">${playlistarr[i++]}</p>
    </div>
  </div>
</div>
    `
}

let playlistarr = [
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6UhLHlFHzSMWwo50SpUbaL?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4rdE7Rtddm0BXwj6RBFSxL?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1rfIwutDvxeABnFh2BaOQF?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Q8etdkCj96NSKsFT8F3O8?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4OjKHySJHstsImlUW3qfml?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wYAof2gsaOvwNJ4PWZWxP?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
];

async function addMoviePic(){
    movies = await getMovieData(PopularMovieAPI) 
    movies.forEach((movie,index) => {
        document.getElementById(`img_${index}`).src=  image_path+movie.poster_path
        document.getElementById(`img_${index}`).style=  " width:300px"
    });
}