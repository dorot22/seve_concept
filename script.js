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
        document.querySelector('#welcome').style.filter = 'blur(5px)';
        imageFocus.style.filter = 'none';
        imageFocus.style.width = '70%';
        imageFocus.style.height = 'auto';
        imageFocus.style.margin = 'auto';
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
            document.querySelector('#welcome').style.filter = 'blur(0)';
            imageFocus = '';
        }
    }
});

rightArrow.addEventListener('click', (event) => {
    scrollPhoto('right')
});

leftArrow.addEventListener('click', (event) => {
    scrollPhoto('left')
});


document.addEventListener("keydown", function (event) {
    if(focus){
        if (event.key === "ArrowRight") {
            scrollPhoto('right')
        }
        if (event.key === "ArrowLeft") {
            scrollPhoto('left')
        };
    }

});

function scrollPhoto(direction) {
    var allPhotos = imageRef.parentElement.querySelectorAll('img');
    var indice = Array.from(allPhotos).indexOf(imageRef)
    var imageContainersLength = allPhotos.length
    if (direction == 'right') {
        if (indice + 1 == imageContainersLength) {
            imageRef = allPhotos[0]
        } else {
            imageRef = allPhotos[indice + 1]
        }
    } else if (direction == 'left') {
        if (indice - 1 == -1) {
            imageRef = allPhotos[imageContainersLength - 1]
        } else {
            imageRef = allPhotos[indice - 1]
        }
    }

    var newimageFocus = imageRef.cloneNode();
    newimageFocus.style.width = '70%';
    newimageFocus.style.height = 'auto';
    newimageFocus.style.margin = 'auto';
    newimageFocus.style.padding = '1%';
    newimageFocus.style.backgroundColor = '#e3cd8bad';
    newimageFocus.style.display = 'block';
    newimageFocus.style.clipPath = 'none';
    pictureAndDescriptionFocus.replaceChild(newimageFocus, imageFocus);
    imageFocus = newimageFocus

}

const navbar = document.querySelector('nav');
const logoTitleImgScrolled = document.querySelector('.logoTitle img');
const logoTitleH1Scrolled = document.querySelector('.logoTitle h1');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navBarScrolled');
    logoTitleImgScrolled.classList.add('logoTitleImgScrolled');
    logoTitleH1Scrolled.classList.add('logoTitleH1Scrolled');

  } else {
    navbar.classList.remove('navBarScrolled');
    logoTitleImgScrolled.classList.remove('logoTitleImgScrolled');
    logoTitleH1Scrolled.classList.remove('logoTitleH1Scrolled');
  }
});