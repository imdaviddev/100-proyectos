document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const toggleBtn = document.querySelector('.toggle-btn')
    const toggleSearchOpenBtn = document.querySelector('.toggle-search-open-btn')
    const toggleSearchCloseBtn = document.querySelector('.toggle-search-close-btn')

    const searchInput = document.querySelector('#search-input-holder')

    const handleMenuToggle = () => {
        header.classList.toggle('toggle-open')
    }
    const handleSearchToggle = () => {
        header.classList.toggle('toggle-search-open')
    }

    toggleBtn.addEventListener('click', handleMenuToggle)
    toggleSearchOpenBtn.addEventListener('click', handleSearchToggle);
    toggleSearchCloseBtn.addEventListener('click', handleSearchToggle);


    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchInput.value = '';
        }
    })


})