const imageContainers = document.querySelectorAll('.album');
const divImageFocus = document.querySelector('.imagefocus');
const pictureAndDescriptionFocus = document.querySelector('#pictureAndDescriptionFocus');
var imageRef = "";
var imageFocus = "";
var photoDescriptionFocus = "";
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
var isFocus = false;
const body = document.querySelector('body');

imageContainers.forEach((element) => {
    element.addEventListener('click', (event) => {
        isFocus = true
        imageRef = event.target
        imageFocus = imageRef.cloneNode();
        photoDescriptionFocus = imageRef.nextElementSibling.cloneNode(true);
        document.querySelector('nav').style.filter = 'blur(5px)';
        document.querySelector('footer').style.filter = 'blur(5px)';
        document.querySelector('#accomplishment').style.filter = 'blur(5px)';
        document.querySelector('#presentation').style.filter = 'blur(5px)';
        imageFocus.style.filter = 'none';
        imageFocus.style.width = '50%';
        imageFocus.style.margin = '2% auto auto auto';
        imageFocus.style.padding = '1%';
        imageFocus.style.backgroundColor = '#e3cd8bad';
        photoDescriptionFocus.style.display = 'block';
        pictureAndDescriptionFocus.appendChild(imageFocus);
        pictureAndDescriptionFocus.appendChild(photoDescriptionFocus);
        divImageFocus.style.display = "inline-flex";
        imageFocus.style.clipPath = 'none';
        body.style.backgroundColor = ' rgba(0, 0, 0, 0.8)';

    });
});

document.addEventListener('click', (event) => {
    if (imageFocus != '') {
        if (!Array.from(imageContainers).some(container => container.contains(event.target)) && !rightArrow.contains(event.target) && !leftArrow.contains(event.target)) {
            isFocus = false;
            body.style.backgroundColor = 'transparent';
            divImageFocus.style.display = "none";
            pictureAndDescriptionFocus.removeChild(imageFocus);
            pictureAndDescriptionFocus.removeChild(photoDescriptionFocus);
            document.querySelector('nav').style.filter = 'blur(0)';
            document.querySelector('footer').style.filter = 'blur(0)';
            document.querySelector('#accomplishment').style.filter = 'blur(0)';
            document.querySelector('#presentation').style.filter = 'blur(0)';
            imageFocus = '';
        }
    }

});

