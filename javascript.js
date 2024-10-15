document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
