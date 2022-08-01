function  pageSoundtrack() {
    localStorage.setItem('page', 'Soundtrack');
    document.querySelector('#div_container').innerHTML = getMusicData()
}
