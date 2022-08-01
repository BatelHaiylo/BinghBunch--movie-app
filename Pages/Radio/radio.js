function  pagePodcast() {
    localStorage.setItem('page', 'Podcast');
    document.querySelector('#div_container').innerHTML = getRadioData()
}
