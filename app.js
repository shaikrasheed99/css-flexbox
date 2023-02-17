const gridButton = document.querySelector('.grid-button');
const stackButton = document.querySelector('.stack-button');
const blockChildren = document.querySelectorAll('.blocks > div');

gridButton.addEventListener('click', (event) => {
    event.preventDefault();
    blockChildren.forEach((child) => {
        child.classList.remove('stack');
        child.classList.add('grid');
    })
});

stackButton.addEventListener('click', (event) => {
    event.preventDefault();
    blockChildren.forEach((child) => {
        child.classList.remove('grid');
        child.classList.add('stack');
    })
});