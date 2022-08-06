function changeMainContent(value){
    switch (value) {
        case 'Home':
            pageHome()
            break;
        case 'Login':
            pageLogin()
            break;
        case 'Food':
            pageFood()
            break;
        case 'Drama':
            pageDramaMovies()
            break;
        case 'Popular':
            pagePopularMovies()
            break;
        case 'TOP THIS WEEK':
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
            break;
    }

}

console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
    changeMainContent(localStorage.getItem("page"))
})