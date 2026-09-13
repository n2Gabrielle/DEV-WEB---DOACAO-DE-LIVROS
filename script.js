const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const term = searchInput.value.trim();
        if (term) {
            window.location.href = `doados.html?busca=${encodeURIComponent(term)}`;
        }
    });
}

const donationForm = document.querySelector('#donation-form');
const formMessage = document.querySelector('#form-message');

if (donationForm) {
    donationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formMessage.textContent = 'Livro cadastrado com sucesso! Obrigado por participar.';
        formMessage.className = 'alert alert-success mt-3';
        donationForm.reset();
    });
}

const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('busca');
const searchFeedback = document.querySelector('#search-feedback');
if (searchTerm && searchFeedback) {
    searchFeedback.textContent = `Resultados para: ${searchTerm}`;
}
