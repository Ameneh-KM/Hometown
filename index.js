//  Toggling attraction descriptions
document.addEventListener('DOMContentLoaded', function () {
    const attractionTitles = document.querySelectorAll('#thingstodo h4');

    attractionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const description = title.nextElementSibling; 
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        });
    });
});
