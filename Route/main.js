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
        case 'Movies':
            pageMovies()
            break;
        case 'Admin':
            pageAdmin()
            break;
    
        default:
            break;
    }

}

console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
    changeMainContent(localStorage.getItem("page"))
})