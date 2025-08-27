document.querySelector('.dropdown-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector
    ('.category-dropdown').classList.toggle('open');
});
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.category-dropdown');
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});

document.getElementById('burger-menu').onclick = function() {
    document.getElementById('nav-list').classList.toggle('active');
};