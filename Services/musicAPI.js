const MusicAPI = ''

async function getMusicData(){
    try{
        return await fetch()
        .then(response => response.json())
        .then(response => console.log(response))
    }
    catch(error){
        console.log(error)
    }
}