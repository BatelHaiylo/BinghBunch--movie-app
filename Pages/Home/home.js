function sound(){
  let video = document.getElementById("myVideo"); 
    return video.muted ? video.muted = false: video.muted = true
}  
 
function  pageHome(){
    localStorage.setItem('page', 'Home');
    document.querySelector('#div_container').innerHTML = `
    <div class="container-fluid mt-0 text-bg-black">
    <video autoplay class="w-100 px-0" muted="true" loop poster="video.jpg" id="myVideo">
      <source src="VIDEO/black-panther-2-trailer-2022-wakanda-forever.mp4" type="video/mp4">
    </video>
        <div class="card-img-overlay pt-5 m-5">
            <h1 class="card-title">Black Panther 2</h1>
            <p class="card-text"> As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog<br> Nakia (Lupita Nyong'o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda</p>
            <button onclick="sound()" class="btn btn-dark"><i class="bi bi-soundwave"></i></button> 
          </div>
    </div>

    <h3>Recently Added</h3>
    <div class="row row-cols-2 row-cols-md-6 g-3" id="RecentlyAdded">
    </div>

    <h3 class="mt-5">NEW FOR KIDS</h3>
    <div class="row row-cols-2 row-cols-md-6 g-3">
      <div class="col">
        <div class="card">
            <a href="https://www.netflix.com/watch/81397439?trackId=14185175">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU8p2zl49U1SNHKuGtEOnuxQ0af_e_CfJcFNIQu_B2HPrMgWcEmSQX4WYhvVo9jvv9CmjA0oft0IMcvrpsTg9PCVVJfv22rdV6Q.webp?r=a2a" class="card-img-top">
        </a>
        </div>
      </div>
      <div class="col">
        <div class="card">
            <a href="https://www.netflix.com/watch/81312563?trackId=253950199&tctx=4%2C2%2Cdd65fcdb-6af6-45d6-bd77-3f537fb39f23-123892394%2CGPS_9D44A07F0F0DC7292D4821ABCD8E7C-C0C1A6E17AF782-D955A13685_p_1659166485048%2CGPS_9D44A07F0F0DC7292D4821ABCD8E7C_p_1659166485048%2C%2C%2C%2C81312563">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS1NbyNXPxtQPYaU5YoFokw04nCUE6F2C2fkCjmlRxwHgHRn5vxw9cMujXPCWBSxD0cLwpGXtcLQKsLVIt_WBawllg45ntBpB492RG39xreYie47nVYMudCoOBXV7FmBkkLOBWx0069-k8oMoatuXwudBltE6NSw2jyXimaHXUbPzaCwatD33G0bWNFD6ds.jpg?r=1d4" class="card-img-top">
        </a>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <a href="https://www.netflix.com/watch/70244169?trackId=14185175">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYOeMGQjQrGhBpH-e58x7YGrd8B2QkDcXeXbPU6Pz_5fd6ymN1xm1G_LqquYOX9bxnZDXPb4-OFmo3NQxo01FvBH-Dl88_HelB0.webp?r=b59" class="card-img-top">
        </a>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <a href="https://www.netflix.com/watch/70109893?trackId=253950199&tctx=4%2C1%2Cdd65fcdb-6af6-45d6-bd77-3f537fb39f23-123892394%2CGPS_9D44A07F0F0DC7292D4821ABCD8E7C-C0C1A6E17AF782-D955A13685_p_1659166485048%2CGPS_9D44A07F0F0DC7292D4821ABCD8E7C_p_1659166485048%2C%2C%2C%2C70109893">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQcZc9vtlo1h3naEuJ-6Nl5nGiJcDGXZaJDXt68mRhLcG7zMa-kz0TYzHHMxuQlDgh57WiEdaRP4TzS_oMhf3y3TaVXZ_p-i9hQ.webp?r=ca5" class="card-img-top">
        </a>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <a href="https://www.netflix.com/watch/81198528?trackId=15062816">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeVhYfONtRIh-19b6livLuqVxkdrQZ-OyDlsncuI9RspEyowZi0qAacoEkszpVgNYs5sgdgJOIuwcM6tDzkIWiTgMHRq0R27y74.webp?r=6c2" class="card-img-top">
        </a>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <a href="https://www.netflix.com/watch/81452640?trackId=15062816">
          <img src="https://occ-0-4547-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfY5iCno2Qi6L-86etpy6Puf4fElHS5vuBHExxsbXzzINMzCj1F7pBG6bS_GYpWlgrta7NMAQHz-Jk11c4wtFT6FUabmgopDPpSJthrdKPpj3MF2AEzdc7glSB3pBXbnkjKx.jpg?r=452" class="card-img-top">
        </a>
        </div>
      </div>
    </div>

    <div class="row row-cols-2 row-cols-md-6 g-3 text-white mt-5">
      <div class="col col-sm-12" >
        <div class="card">
          <a href="https://www.netflix.com/watch/81160697?trackId=262617323&tctx=4%2C0%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81160697">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbAOAoXkIVLfagoZEcJuZRnqQHBtoMvXsemVtdY-AXSdPtGCr7m1peuy4FVbp7o6Yydr94KQ4LYktbI6H86G-kePvVIZf-PVDMoHwiSL2GX2Sd4xH5WWLQJQWmw7kgNJ5GCjXg.jpg?r=e22" class="card-img-top top_card.pic">
      </a>
          <div class="card opacity-75 back home_big_img ">
            <h5 class="card-title">Keep Breathing</h5>
            <p class="card-text">When a small plane crashes in the middle of the Canadian wilderness, a lone woman must battle the elements and odds to survive.</p>
          </div>
          </a>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card">
          <a href="https://www.netflix.com/watch/81259570?trackId=262617323&tctx=4%2C1%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81259570">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABawbyfRhp99In9-VfZ8buwfOFfiEk0Zq9uAsPlulYpKD1YuQfMoS5rV9S6tMcIeX0drmQygHwOYhbPoe02uV8JpyLrwN6u0Y-o6K9Ei7X1u7O74G9M50uE9k5sZjJ7zlDLWEOw.jpg?r=edd" class="card-img-top">
      </a>
          <div class="card opacity-75 back home_big_img ">
            <h5 class="card-title">Recurrence</h5>
            <p class="card-text">Years after moving to a remote town, ex cop Pipa is pulled into the dark world she thought she'd left behind when she gets tangled in a murder case.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card">
          <a href="https://www.netflix.com/watch/81018682?trackId=262617323&tctx=4%2C2%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81018682">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdlqeLEvk4bxt-OXg5pcIko30Pl7lBWMfjtImJ-UitsDVobQw9lzvlKoh7MOAetCiGajrb3L-6aR_EvM5EjxdruxdPzluTVeFYPtdCnOl7EmBfIcftPFhyRTscfOVNB33Kphgw.jpg?r=41e" class="card-img-top">
      </a>
          <div class="card opacity-75  back home_big_img ">
            <h5 class="card-title">The Sea Beast</h5>
            <p class="card-text">The story of a young orphan girl who joins a group of sea monster hunters on their search for the elusive Red Bluster.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card">
          <a href="https://www.netflix.com/watch/81410649?trackId=262617323&tctx=4%2C3%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81410649">
              <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeEvkRER4apPxlSJfcoDDDQm2K99-Ogf2aWzTkMQUU983dWnGrxg63hXMC5m0gHHnJuTRjhNrovJxE_J0zxC3pNCtF_nKfMdFJ35P8ceS1c-MuFPa5cQv0HkS--dmqLfhtEz_Q.jpg?r=cf3" class="card-img-top">
          </a>
              <div class="card opacity-75 back home_big_img">
            <h5 class="card-title">Persuasion</h5>
            <p class="card-text">Eight years after Anne Elliot was persuaded not to marry a dashing man of humble origins, they meet again. Will she seize her second chance at true love?.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card">
          <a href="https://www.netflix.com/watch/81578248?trackId=262639554&tctx=4%2C4%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81578248">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQg8K4TKzXJRptsLfBqnRGRdYj-Tjws5cn6w3d0eMpybpH7yGX3DBQVv1wPpEsrs4z2Mn9REi94KITcxKiT_yOxluQbYwt3gM9wl.webp?r=355" class="card-img-top">
      </a>
          <div class="card opacity-75 back home_big_img ">
            <h5 class="card-title">Image of Victory</h5>
            <p class="card-text">War film from Israeli director Avi Nesher that grapples with the true cost of war — and what price people are willing to pay for freedom.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card">
          <a href="https://www.netflix.com/watch/81132044?trackId=262617323&tctx=4%2C1%2C011b2aff-f9ba-4450-9ba2-f0c32880be04-13578972%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-5DA10999BD_p_1659883832891%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659883832891%2C%2C%2C%2C81132044">
          <img src="https://occ-0-2616-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ0h_7yX4RJJz8WuwpvdjpBSBADzqahFUo8QbE2B1zB03fiGLc6I5VqZBNij5Dw_3Pmdl9gstp_JhXF1M8zQ4FZkyXHp1Ps3zSIJ6qjWOQf7q8V258217ovJcWMt5koJ1f4WoA.jpg?r=8cf" class="card-img-top">
      </a>
          <div class="card opacity-75 back home_big_img ">
            <h5 class="card-title">Wedding Season</h5>
            <p class="card-text">Under parental pressure to find spouses,Asha and Ravi pretend to date during a summer of weddings - but their ruse goes awry when feelings turn real.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section id="API_HOME">${addToHomePage(KidsMoieApi)}</section>

    <section class="pb-0 pt-3 mt-1">
      <div class="container d-block">
        <div class="row">
          <div class="col">
            <div class="bg-black p-3 p-sm-4 rounded-4 position-relative overflow-hidden">
              <div class="row">
                <div class="col-md-8 col-lg-6 mx-auto text-center py-5 position-relative">
                  <!-- Title -->
                  <h2 class="display-6 text-white">Never miss a movie!</h2>
                  <p class="text-white">Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                  <!-- Form -->
                  <form class="row row-cols-sm-auto g-2 align-items-center justify-content-center mt-3 d-flex flex-column">
                    <div class="col-12">
                      <input type="email" class="form-control" placeholder="Enter your email address">
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-danger m-0">Subscribe</button>
                    </div>
                    <div class="form-text text-white opacity-6 mt-2">By subscribing you agree to our 
                      <a href="#" class="text-decoration-underline text-reset">Privacy Policy</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    `
    HPMovieRow(RAParr)
}
async function addToHomePage(url,elementId = 'API_HOME',result='<div class="row container-fluid overflow-hidden">') {
  movies = await getMovieData(url)
  console.log(movies)
  movies.forEach((movie,index) => {
    if(index % 4 == 0) {result += '</div><div class="row container-fluid">'}
      result += HomecardTemplate(movie,index)
  });
document.getElementById(elementId).innerHTML = result
}

function HomecardTemplate(movie) {
  let {poster_path, id} = movie
  return `
  <div class="card col-sm-10 col-md-3 g-2 g-md-0 bg-black backHome" id="${id}" style=" max-height:0vh">
  <img src="${ image_path+poster_path}" class="card-img-top frontHome">
</div>
`
}

const RAParr = ["https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616927550420-G7CYCSSJH27DW13VSLL9/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo19.jpg?format=500w",
"https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616928600032-9RLRIWA657SBK39MB8EH/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo48.jpg?format=500w",
"https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616928766165-Q5XK89Y52PK691I4CYDP/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo58.jpg?format=500w",
"https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616928750298-O6FD1K3UN9YN6TC4R9HQ/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo57.jpg?format=500w",
"https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616927125438-QBFTUADTKERIS20BE4EL/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo9.jpg?format=500w",
"https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1616927046927-O41YC1PSTK9RCI4H6D4U/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo7.jpg?format=500w"]


function HPMovieRow(arr){
  arr.forEach(pic => {
    document.querySelector(`#RecentlyAdded`).innerHTML += `
    <div class="col">
    <div class="card">
      <img src=${pic} class="card-img-top" style="height: 50vh;"/>
    </div>
  </div>
    `
  })
}

