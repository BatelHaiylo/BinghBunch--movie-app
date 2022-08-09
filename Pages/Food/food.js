function  pageFood(){
    localStorage.setItem('page', 'Food');
    document.querySelector('#div_container').innerHTML = `
    <div class="container-fluid d-flex align-items-center"  id="food_bg">
    <div class="container h-100 bg-black rounded-5 py-5 text-center">
        <h1 class="">YOU SHOULD ORDER</h1>
        <p class="mb-3">let as choose a meal for you</p>
    
        <div class="input-group container">
            <select id="dishType" class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">i feel like...
              <option value="kosher">kosher</option>
              <option value="mediterranean">mediterranean</option>
              <option value="asian">asian</option>
              <option value="american">american</option>
              <option value="caribbean">caribbean</option>
              <option value="greek">greek</option>
              <option value="indian">indian</option>
              <option value="italian">italian</option>
              <option value="mexican">mexican</option>
            </select>
            <button class="btn btn-outline-danger" onclick="addToPage()" type="button"><i class="bi bi-emoji-heart-eyes"></i></button>
        </div>
        <div class="d-block" id="rnd_burger"></div>
        <div class="d-flex justify-content-center mt-3">
        <img src="IMAGES/ten bis logo.png" alt="ten bis" style="width:10vw; height:17vh;">
        </div>
    </div>
    </div>
`
  }
  