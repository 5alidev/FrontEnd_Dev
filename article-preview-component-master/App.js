let shareBtn = document.querySelector('.share');
let shareHover = document.querySelector('.share-hover');

shareBtn.addEventListener('mouseenter', (event) => {
    console.log("here:");
    shareHover.classList.remove('hide');

});

shareBtn.addEventListener('mouseleave', (event) => {
    console.log("here:");
    shareHover.classList.add('hide');
});