function changeMainContent(value){
    document.querySelector('#above_container').innerHTML =""
    switch (value) {
        case 'Home':
            pageHome()
            break;
        case 'Login':
            pageLogin()
            break;
        case 'Food':
            pageFood()
        case 'Drama':
            pageDramaMovies()
            break;
        case 'All Movies':
            pageAllMovies()
            break;
        case 'Popular':
            pagePopularMovies()
            break;
        case 'TP THIS WEEK':
            pageTopMovies()
            break;
        case 'Sci-fi':
            pageScifiMovies()
            break;
        case 'KIDS':
            pageKidsMovies()
            break;
        case 'Soundtrack':
            pageSoundtrack()
            break;
        default:
            pageLogin()
            break;
    }

}

console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
    changeMainContent(localStorage.getItem("page"))
})