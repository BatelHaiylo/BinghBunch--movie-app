 
function sound(){
  let video = document.getElementById("myVideo"); 
    return video.muted ? video.muted = false: video.muted = true
}  
 
function  pageHome(){
    localStorage.setItem('page', 'Home');
    document.querySelector('#div_container').innerHTML = `
    <div class="container-fluid mt-0 text-bg-dark">
    <div class="container-fluid w-100 px-0 overflow-hidden">
    <video autoplay class="w-100 px-0" muted="true" loop poster="video.jpg" id="myVideo">
    <source src="VIDEO/avatar-2-the-way-of-water-trailer-2-james-c.mp4" type="video/mp4">
</video>
        <div class="card-img-overlay pt-5 m-5">
            <h1 class="card-title">Avatar: The Way of Water</h1>
            <p class="card-text"> Epic science-fiction film directed by James Cameron</p>
            <button onclick="sound()" class="btn btn-dark"><i class="bi bi-soundwave"></i></button> 
          </div>
    </div>

    <h3>Recently Added</h3>
    <div class="row row-cols-2 row-cols-md-6 g-3">
      <div class="col">
        <div class="card">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWz4N8_02ex18eLHxXrFUkJATvNkKmmWiEXtqN6ItQwjhczvYRPDrMBUWyJDSjZrsZHyJ-l2lnwgImXEl8_V6KuutVZ9HbMaALo1146RcMdGAN-3AHfqlpzY-yZUjURD_h17egSJaEHOwX1xTv6pjVj_cybtWhdoLQv5hVSr16VXayQsG51JiIw8kUcIXw8_Yke4U27f6uyIa-kqf3YWyYMFetK4E7JK.jpg?r=676" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1z0tjKqLo3JgLVVYD5YiTAEI20Z-RQl_D7ncXLgWnPh76IA1aZZJFfVWEDV4VKVtaqfP3gdzVwL_0W_3CKgwFJqR9TswHHgxfLn0zeC7ZKh-PG-5H0yLnuFDtJspcMmOzy9yGumAkXSoRLuf_F6GTKwOSFIX504cyUnkQ_Z_0s8qxFMERODkMy3EbIPdQ.jpg?r=52b" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfMcEcwJxOPKQvzzVuOSZPnnnvEUUgzJYoYkeIWfqmOHWueCho4NyYX1NEKA1Ps1CBCTX4FjfoQnd4qSV2nR6FeTyQKXfp0Q7WIpWtUbVgY4PQsmS5o6qbqk7p2w3vfWKRG1.jpg?r=c20" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbvwr2yzszrrQesxPZ8QPdbjQ6pSQa0POnbAv0KvUuH2LPoomcTtzXV3Xnbe7DTSRhPltCRZS5CbO08HG9RLsfORWXDFA7YVDYpD2ouZ9GsQsBr_vuC7CH9QbfaLiu8ubik6.jpg?r=e5e" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWBHigbubrAt05TeS8l0nfrmCuJYy4G6aJwGowj5pCGolddDKfm9OkUFd6PGJfHlCxl-CsTiMy2jWcuIiFKM4IH7RruJrsrJGwcjsUbu1QaaQFrxWJskOh-QOUtnZ8DPA59f.jpg?r=b3f" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUo5OYD2lih39bsHpptGyjvoRHvfyi0mhU1MmaSnWAacG4FAbomWRYEE-ETbfJaMZp0TDFFnRrXTLKO_GYcmEl5ojVFTGKTZaCkSbWoY8X6lNoEgU6lC5e7zwAV2vynjDR1IO1r2uohWphivv5uMh_6LDh5aDV3Z7S7cXZFdrHEuPgC28ih70b4fgvEcD1k.jpg?r=b61" class="card-img-top">
        </div>
      </div>
    </div>

    <h3 class="mt-5">Trending Now</h3>
    <div class="row row-cols-2 row-cols-md-6 g-3">
      <div class="col">
        <div class="card">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABau4RGWBEMvJ3Iy9LWJxTUogVilVt9dN6eorPv_V9M6tIMOtxyRMiAMoB3p8OnH0j_QcBz9FEKsNX_sUlxtoliXLcr3tcFghXAuOoo7Y8nrbk65RmO0ruvfVonvnji3_aHeC__x3E3WJEx9UhaD7jgXFDHvU4Nr-JvIl9zE.jpg?r=a49" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABe9Pp4lgGbVIBGCowS9-ymX5W5aI9xQeQhTIKNO68u551vXN9Y_0NJC8sLo-IxXiY6klD3DlQRXH5E1Le2C7EUpfnCBrb100LqZgni36ipGmiaw0fmXfasSNAgCc9j3YF2fAiA.jpg?r=ee8" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfZ59DQFEke-u5kuvqzw0UniVi41_2bPTtQqexPeVka1N9r_jd7BkAgn2hDOP1nTCx_H3l1XNB7tSZuZsfjt-4NSL1DqS2HGIrGdnPMFU7zq32BtaMedAEIZLCfpX-UW8tWkzQ.jpg?r=e79" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ4qxa93twISlOznccn74LJMJcZI-kJPPhxEAj8UJrWAVgcwElbhWa1V0Wf6SC4lFG-piewjE_ZP8Z8W6gXllgoxUJrgjJmSWkK6pCLqGW1IyWfnLQYKz7J0SwwyrjuY1x9xQA.jpg?r=cc9" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZs7psXYSLfYEGsrLq_1ggY9h0iHYOEGuWz1xqQIYLBYWt0tZ4fcBJ5LY9G5cRilQ1Zs1ZpWYuM6NrhG2EMwj5_DQ_USKVrpYTbPtDX3RthSTryx7-AKl6U2SvdfH9TU1f2zxA.jpg?r=6ed" class="card-img-top">
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABShHP6o11dtZZgfmWCnxoKmXmjBQ7WzkEq7VC9XwnpSkmxcKEGEDSOJCqbG7XsxKoOvXn_n9LqSSzBul3YQ-Sij6LDHsOcqVFILqTdTAdGn5jw9SbLi9Gf_kLHN5XraMsu8ExomMBArCPOt5pf2_zamj1s0BQfUclaT_EIU.jpg?r=1fe" class="card-img-top">
        </div>
      </div>
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

    <div class="row row-cols-sm-1 row-cols-md-5 p-0 m-0 text-white mt-5">
      <div class="col col-sm-12" >
        <div class="card card_con bg-dark">
          <a href="https://www.netflix.com/watch/81160697?trackId=262617323&tctx=4%2C0%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81160697">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbAOAoXkIVLfagoZEcJuZRnqQHBtoMvXsemVtdY-AXSdPtGCr7m1peuy4FVbp7o6Yydr94KQ4LYktbI6H86G-kePvVIZf-PVDMoHwiSL2GX2Sd4xH5WWLQJQWmw7kgNJ5GCjXg.jpg?r=e22" class="card-img-top top_card.pic">
      </a>
          <div class="card bg-dark h-50 opacity-75 top_movie_card_overlay">
            <h5 class="card-title">Keep Breathing</h5>
            <p class="card-text">When a small plane crashes in the middle of the Canadian wilderness, a lone woman must battle the elements and odds to survive.</p>
          </div>
          </a>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card card_con bg-dark">
          <a href="https://www.netflix.com/watch/81259570?trackId=262617323&tctx=4%2C1%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81259570">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABawbyfRhp99In9-VfZ8buwfOFfiEk0Zq9uAsPlulYpKD1YuQfMoS5rV9S6tMcIeX0drmQygHwOYhbPoe02uV8JpyLrwN6u0Y-o6K9Ei7X1u7O74G9M50uE9k5sZjJ7zlDLWEOw.jpg?r=edd" class="card-img-top">
      </a>
          <div class="card bg-dark h-50 opacity-75 top_movie_card_overlay">
            <h5 class="card-title">Recurrence</h5>
            <p class="card-text">Years after moving to a remote town, ex cop Pipa is pulled back into the dark world she thought she'd left behind when she gets tangled in a murder case.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card card_con bg-dark">
          <a href="https://www.netflix.com/watch/81018682?trackId=262617323&tctx=4%2C2%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81018682">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdlqeLEvk4bxt-OXg5pcIko30Pl7lBWMfjtImJ-UitsDVobQw9lzvlKoh7MOAetCiGajrb3L-6aR_EvM5EjxdruxdPzluTVeFYPtdCnOl7EmBfIcftPFhyRTscfOVNB33Kphgw.jpg?r=41e" class="card-img-top">
      </a>
          <div class="card bg-dark h-50 opacity-75 top_movie_card_overlay">
            <h5 class="card-title">The Sea Beast</h5>
            <p class="card-text">The story of a young orphan girl who joins a group of sea monster hunters on their search for the elusive Red Bluster.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card card_con bg-dark">
          <a href="https://www.netflix.com/watch/81410649?trackId=262617323&tctx=4%2C3%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81410649">
              <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeEvkRER4apPxlSJfcoDDDQm2K99-Ogf2aWzTkMQUU983dWnGrxg63hXMC5m0gHHnJuTRjhNrovJxE_J0zxC3pNCtF_nKfMdFJ35P8ceS1c-MuFPa5cQv0HkS--dmqLfhtEz_Q.jpg?r=cf3" class="card-img-top">
          </a>
              <div class="card bg-dark h-50 opacity-75 top_movie_card_overlay">
            <h5 class="card-title">Persuasion</h5>
            <p class="card-text">Eight years after Anne Elliot was persuaded not to marry a dashing man of humble origins, they meet again. Will she seize her second chance at true love?.</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-12">
        <div class="card card_con bg-dark">
          <a href="https://www.netflix.com/watch/81578248?trackId=262639554&tctx=4%2C4%2Ca096926f-8921-4ece-ad29-bc800b948f40-9157370%2CGPS_9C07A97EC9C5ABDEF97468484E44A3-F4694D00993BC3-61659558DB_p_1659111451938%2CGPS_9C07A97EC9C5ABDEF97468484E44A3_p_1659111451938%2C%2C%2C%2C81578248">
          <img src="https://occ-0-3338-1167.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQg8K4TKzXJRptsLfBqnRGRdYj-Tjws5cn6w3d0eMpybpH7yGX3DBQVv1wPpEsrs4z2Mn9REi94KITcxKiT_yOxluQbYwt3gM9wl.webp?r=355" class="card-img-top">
      </a>
          <div class="card bg-dark h-50 opacity-75 top_movie_card_overlay">
            <h5 class="card-title">Image of Victory</h5>
            <p class="card-text">War film from Israeli director Avi Nesher that grapples with the true cost of war — and what price people are willing to pay for freedom.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <section class="pb-0 pt-3 mt-1">
      <div class="container d-block">
        <div class="row">
          <div class="col">
            <div class="bg-dan p-3 p-sm-4 rounded-3 position-relative overflow-hidden">
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
}



// {/* <p class="card-text">Jake Sully lives with his newfound family formed on the planet of Pandora.<br> Once a familiar threat returns to finish what was previously started,<br> Jake must work with Neytiri and the army of the Na'vi race to protect their planet.</p> */}
