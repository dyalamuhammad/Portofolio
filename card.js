document.addEventListener('DOMContentLoaded', function() {
    var card = document.querySelector('.card');
    var cardBody = document.querySelector('.nfl');
    var showMoreButton = document.querySelector('.show-more');

    // showMoreButton.classList.add('show-more');
    // showMoreButton.innerHTML = '<i class="bi bi-chevron-down"></i>';
    // cardFooter.parentNode.insertBefore(showMoreButton, cardFooter);

    // if (cardBody.scrollHeight > 200) {
    //     showMoreButton.style.display = 'flex';
    // }

    showMoreButton.addEventListener('click', function() {

        cardBody.classList.toggle('expanded');

    });
});

function expand() {
    var cardBody = document.querySelector('.nfl');

    cardBody.classList.toggle('expanded');
}