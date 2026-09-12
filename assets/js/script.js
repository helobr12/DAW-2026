const categorylinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');


categorylinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        //pega o nome da categoria clicada
        const categoryName = link.textContent;

        //atualiza o texto da categoria selecionada
        selectedCategory.textContent = categoryName;

        categorylinks.forEach(function (CategoryLink) {

            // remove class active
            CategoryLink.classList.remove('active');
        });

        // adicionar a class active ao link clicado
        link.classList.add('active');
    });

});