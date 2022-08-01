function  pageFood(){
    localStorage.setItem('page', 'Food');
    document.querySelector('#div_container').innerHTML = `
    <div class="container-fluid text-black" id="food_page"  style="max-height: 90vh;">
    <img src="/IMAGES/burgers bar.jpg" class="img-fluid">

    <div class="container h-100 border bg-light border-danger rounded-5 p-2 mb-2 border-opacity-25 text-center  d-flex flex-column align-items-center justify-content-center">
        <h1 class="">YOU SHOULD ORDER</h1>
        <p class="mb-3">let as choose a burger for you</p>
        <div id="rnd_burger" class="d-block m-3">eat</div>
        <button id="randomBurger" onclick="return matchingCard()" class="btn btn-black btn-outline-danger" type="button">START</button>
    </div>

    <a href="https://www.tabitorder.com/?orgName=Burgers%20Bar#/start">
        <img src="/IMAGES/ORDER .jpg" class="img-fluid">
    </a>
</div>
`
}

const rndFood = document.getElementById("rnd_burger_card")
const btnRndFood = document.getElementById("randomBurger")

function randomFoodChoice(){
    return Math.floor(Math.random()*29)
}

async function matchingCard(element = rndFood,result ='<div class="card col-sm-10 col-md-4 g-4" id="${id}">'){
  let rndNum = randomFoodChoice()
  let suggestion = await this.getBurger(BurgersAPI,Boptions)
    suggestion.forEach((burger,index) => {
      if(burger.id == rndNum)
      {result += template(burger) }
      burger.picture =`${burgersPicturesArr[index].id == rndNum ? burgersPicturesArr[index] : burgersPicturesArr[0]}`
      element.innerHTML = result
    });
}