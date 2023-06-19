const colorButton = document.getElementById('js-button')
const colorOutput = document.getElementById('js-color-output')

const colorPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

colorButton.addEventListener('click', () => {
    onButton()
});

function onButton() {
    let generatedColor = '#';
    for (let i = 0; i<6; i++) {
        generatedColor += colorPool[
            Math.floor(Math.random() * colorPool.length)]
    }
    colorOutput.innerHTML = generatedColor;
    colorOutput.style.color = generatedColor;
    document.body.style.backgroundColor = generatedColor;
}