const Toptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c4706be01fmsh8961bbdf4df3fdep19608ejsn23a8432cb62e',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};
const TbasicApi = 'https://movies-app1.p.rapidapi.com/api/trailers/'

async function getTrailers(url,obj){
    try{
        return await fetch(url,obj)
        .then(res => res.json()).then(res=>res.result)
    }
    catch(eror){alert(eror)}
}

const Mlistoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c4706be01fmsh8961bbdf4df3fdep19608ejsn23a8432cb62e',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};
const MlistAPI='https://movies-app1.p.rapidapi.com/api/movies?limit=20&sort=rating&type=movies'

async function getMOVIESlIST(url,obj){
    try{
        return await fetch(url,obj)
        .then(res => res.json()).then(res => res.results)
        
    }
    catch(eror){alert(eror)}
}

let moviesIdArr =[]
async function getMoviesId(){
    const MovielistArray =await getMOVIESlIST(MlistAPI,Mlistoptions)
    MovielistArray.forEach(movie => 
        moviesIdArr.push(movie._id)
    );
    return moviesIdArr
}

let trailairsApi =[]
async function getMovieTralier(){
    const IdArr = await getMoviesId()
    for(let movieID of IdArr){
        trailairsApi.push(`${TbasicApi}${movieID}`)
    }
    return (trailairsApi)
}
async function fetchMoviesTrailers(){
    const urls = [];
    const movieApi = await getMovieTralier();
    movieApi.forEach(api=>{
        getTrailers(api,Toptions).then(res=>{
            urls.push(res[0].embed)
            if(urls.length==20) addTrailerToBtn(urls)
        })
    })
}
function addTrailerToBtn(list){
    let playBtns = document.getElementsByClassName("play_btn");
    for(let btn of playBtns){
        btn.addEventListener("click",()=>{
            document.getElementById(`modelbody${+btn.dataset.trailer}`).innerHTML =  `<iframe src=${list[+btn.dataset.trailer]}?controls=0&autoplay=1&mute=1 width="420" height="345"><ifram/>`
        })
        btn.disabled = false;
    }
}