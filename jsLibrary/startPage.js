
const startPageDiv = document.getElementById('startPage-1'),
    changeImgButtonsDiv = document.getElementById('changeImgButtons');
let imgIndex = 1,
    imgArray = ['food1', 'food2', 'food4', 'food3'],
    arrayForGrid = [];
imgIntervalDuration = 8000,
    imgTimeOutDuration = 6500;

chanageBackgroundImg();
chanageBackgroundImgButtons();

function chanageBackgroundImg() {
    setTimeout(() => {
        startPageDiv.classList.add('fadeOut');
    }, imgTimeOutDuration)
    setInterval(() => {
        startPageDiv.style.backgroundImage = "url(./assets/" + imgArray[imgIndex] + ".jpg)";
        if (imgIndex == imgArray.length - 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        setTimeout(() => {
            startPageDiv.classList.remove('fadeIn')
            startPageDiv.classList.add('fadeOut');
        }, imgTimeOutDuration)
        startPageDiv.classList.add('fadeIn')
        startPageDiv.classList.remove('fadeOut');
    }, imgIntervalDuration)

}

function chanageBackgroundImgButtons() {
    for (let numOfButtons = 0; numOfButtons < imgArray.length; numOfButtons++) {
        changeImgButtonsDiv.innerHTML += `<div class="button" id="buttonChangeImg${numOfButtons}" onclick="changeImgOnClick(event)"></div>`;
    }
    changeImgButtonsDiv.style.gridTemplateColumns = 'auto '.repeat(imgArray.length);
}

function changeImgOnClick(event) {
    event.preventDefault();
    let idOfButton = event.target.id;
    imgIndex = idOfButton.charAt(idOfButton.length - 1);
    startPageDiv.style.backgroundImage = "url(./assets/" + imgArray[imgIndex] + ".jpg)";
}
