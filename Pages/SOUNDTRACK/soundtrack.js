function  pageSoundtrack() {
    localStorage.setItem('page', 'Soundtrack');
    document.querySelector('#div_container').innerHTML = `
   
    <div class="d-block" id="sound_on"></div>
`
 addSoundtrackToPage()
}


