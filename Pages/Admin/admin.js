function pageAdmin()  {
    localStorage.setItem('page', 'Admin');
    document.querySelector('#div_container').innerHTML = "<h1>Admin</h1>"
}