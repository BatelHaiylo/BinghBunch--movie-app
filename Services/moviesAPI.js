const MOVIESoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
	}
};
const MOVIESapi = 'https://mdblist.p.rapidapi.com/?s=jaws'

async function getData(){
    try{
        const response = await fetch(MOVIESapi,MOVIESoptions)
        return await response.json()
    }
    catch(eror){alert(eror)}
}

// let basicAPI= 'https://imdb-api.tprojects.workers.dev/title/tt6522580'

// async function getMovieeData(){
//     try{
//         return await fetch(basicAPI)
//         .then(response => response.json())
//         .then(res => {console.log(res)}
//         )
//     }
//     catch(error){
//         console.log(error)
//     }
// finally{}
// }
// getMovieeData()
