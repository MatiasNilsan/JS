
//#1 и #3*
const handleClick = (event) => {
    const src = event.target.getAttribute('src');
    const oldImg = document.querySelector('.full-picture-item');

    const leftArrow = document.createElement('button');
    leftArrow.classList.add('left-arrow');
    leftArrow.innerText = 'Previous';

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('right-arrow')
    rightArrow.innerText = 'Next';

    leftArrow.addEventListener('click', leftArrowClick);
    rightArrow.addEventListener('click', rightArrowClick);

    const wrapper = document.querySelector('.full-picture');

    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);



    if (oldImg) {
        wrapper.replaceChild(img, oldImg);
        console.log("Picture changed");
    } else {
        wrapper.appendChild(leftArrow);
        wrapper.appendChild(img);
        wrapper.appendChild(rightArrow);
        console.log("Picture added");
    }



}

const previews = document.querySelectorAll('img.preview-item');

const handleMouseEnter = (event) => {
    console.log("Mouse entered!");
    event.target.classList.add('active')
}

const handleMouseLeave = (event) => {
    console.log("Mouse left!");
    event.target.classList.remove('active')
}



window.onload = () => {
    for (const item of previews) {
        item.addEventListener('click', handleClick);
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);

    }

}


leftArrowClick = () => {
    const oldImg = document.querySelector('.full-picture-item');
    const wrapper = document.querySelector('.full-picture');
    const images = document.querySelector('.preview-item');
    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    src = oldImg.getAttribute('src');
    if (src == document.querySelector('.first').getAttribute('src')) {
        src = document.querySelector('.third').getAttribute('src');
    } else if (src == document.querySelector('.third').getAttribute('src')) {
        src = document.querySelector('.second').getAttribute('src');
    } else if (src == document.querySelector('.second').getAttribute('src')) {
        src = document.querySelector('.first').getAttribute('src');
    }


    if (oldImg) {
        oldImg.setAttribute('src', src);
    } else {
        wrapper.appendChild(leftArrow);
        wrapper.appendChild(img);
        wrapper.appendChild(rightArrow);
        console.log("Picture added");
    }
}

rightArrowClick = () => {
    const oldImg = document.querySelector('.full-picture-item');
    const wrapper = document.querySelector('.full-picture');
    const images = document.querySelector('.preview-item');
    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    src = oldImg.getAttribute('src');
    if (src == document.querySelector('.third').getAttribute('src')) {
        src = document.querySelector('.first').getAttribute('src');
    } else if (src == document.querySelector('.second').getAttribute('src')) {
        src = document.querySelector('.third').getAttribute('src');
    } else if (src == document.querySelector('.first').getAttribute('src')) {
        src = document.querySelector('.second').getAttribute('src');
    }


    if (oldImg) {
        oldImg.setAttribute('src', src);
    } else {
        wrapper.appendChild(leftArrow);
        wrapper.appendChild(img);
        wrapper.appendChild(rightArrow);
        console.log("Picture added");
    }



}

//#2

