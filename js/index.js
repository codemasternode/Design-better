let secondImages = document.querySelectorAll('.second__image')
console.log(secondImages)
secondImages.forEach((image,index) => {
    image.style.top = (50 * index) + 'px'
    image.style.left = (30 * (index)) + '%'
    console.log(image.style)
});