function getImage(element, image) {
    element.addEventListener('click', function() {
        if(image.style.display === 'block') {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    })
}

let projectOne = document.getElementById('project1');
let imageOne = document.getElementById('image1');
let projectTwo = document.getElementById('project2');
let imageTwo = document.getElementById('image2');
let projectThree = document.getElementById('project3');
let imageThree = document.getElementById('image3');

