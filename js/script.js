// Dropdown Kategori
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

// Burger Menu
document.getElementById('burger-menu').onclick = function() {
    document.getElementById('nav-list').classList.toggle('active');
};

// Pagination Produk
let currentPage = 1;
const itemsPerPage = 8;
const allProducts = Array.from(document.querySelectorAll("#product-container .card-image"));
const totalPages = Math.ceil(allProducts.length / itemsPerPage);

function renderProducts() {
    allProducts.forEach(p => p.style.display = "none");

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    for (let i = start; i < end && i < allProducts.length; i++) {
        allProducts[i].style.display = "block";
    }

    renderPageNumbers();
}

function renderPageNumbers() {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    pageNumbersContainer.innerHTML = "";

    const maxVisible = 5; // maksimal nomor ditampilkan
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // kalau dekat awal
    if (currentPage <= 3) {
        startPage = 1;
        endPage = Math.min(totalPages, maxVisible);
    }

    // kalau dekat akhir
    if (currentPage >= totalPages - 2) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - (maxVisible - 1));
    }

    // tampilkan halaman pertama + ellipsis kalau tidak di range
    if (startPage > 1) {
        addPageButton(1);
        if (startPage > 2) {
            addEllipsis(pageNumbersContainer);
        }
    }

    // tampilkan range halaman
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
    }

    // tampilkan halaman terakhir + ellipsis kalau tidak di range
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            addEllipsis(pageNumbersContainer);
        }
        addPageButton(totalPages);
    }
}

function addPageButton(page) {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const pageBtn = document.createElement("button");
    pageBtn.textContent = page;
    pageBtn.classList.add("page-number");
    if (page === currentPage) pageBtn.classList.add("active");

    pageBtn.addEventListener("click", () => {
        currentPage = page;
        renderProducts();
    });

    pageNumbersContainer.appendChild(pageBtn);
}

function addEllipsis(container) {
    const span = document.createElement("span");
    span.textContent = "...";
    span.style.margin = "0 4px";
    span.style.color = "#6b7280"; // abu
    container.appendChild(span);
}

// Navigasi Prev dan Next
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
    }
});

renderProducts();

