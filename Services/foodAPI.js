const FoodAPI = "https://api.edamam.com/api/recipes/v2?type=public&q=";
const apiID = "&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f";
   
async function getFoodData(foodType) {
  try {
    return await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${foodType}&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f`
    ).then((res) => res.json());
  } catch (eror) {
    alert(eror);
  } finally {}
}

function addToPage(
  elementId = "rnd_burger",
  result = '<div class="row container-fluid">'
) {
  let dishArr = [];
  let foodType = document.getElementById("dishType").value;

  getFoodData(foodType)
    .then((result) => {
      console.log(result["hits"]);
      result["hits"].forEach((obj) => {
        if (obj["recipe"]["cuisineType"] == foodType && dishArr.length < 4) {
          dishArr.push(obj["recipe"]);
        }
      });
      console.log(dishArr);
    })
    .then(() => {
      dishArr.forEach((meal) => {
        result += FoodCard(meal);
      });
    })
    .then(()=>{
        result += "</div>";
        document.getElementById(elementId).innerHTML = result;
    })
}

function FoodCard(obj) {
  let { calories, dietLabels, url, label, images, dishType } = obj;
  return `
        <div class="card col-sm-10 col-md-3 g-4 bg-black h-50">
        <img src="${images.REGULAR.url}" class="card-img-top">
          <div class="card-body h-50">
            <h1 class="card-title">${dishType[0]}</h1>
            <h5 class="card-title">${label}</h5>
            <span class="card-title">${dietLabels}</span>
            <span>calories:<br>${calories}</span><br><br>
            <button class="btn btn-dark"><a href="${url}" target="_blank" rel="noopener noreferrer" class="link-danger text-decoration-none" >RECIPE</a></button>
            <button class="btn btn-danger"><a href="https://www.10bis.co.il/next/en/deliveries/lod" target="_blank" class="link-dark text-decoration-none" >ORDER NOW</a></button>
          </div>
        </div>
    `;
}
