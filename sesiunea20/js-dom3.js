document.body.setAttribute('color-theme', 'light');

const enrollButton = document.querySelector('#enroll');
const textElements = document.getElementsByClassName('text-item');

const themeToggleButton = document.getElementById('toggle-theme');
themeToggleButton.addEventListener('click', () => {
    let currentColorTheme = document.body.getAttribute('color-theme');
    let newColorTheme = currentColorTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('color-theme', newColorTheme);

    if (newColorTheme === 'dark') {
        switchToDarkMode();
    } else {
        switchToLightMode();
    }
});

for (let textElement of textElements) {
    textElement.addEventListener('mouseenter', function () {
        textElement.classList.remove('paragraph-text');
    });
}

if (enrollButton) {
    enrollButton.addEventListener('click', function () {
        console.log('Am dat click!');

        for (let textElement of textElements) {
            textElement.style.transform = 'rotate(180deg)';
            textElement.style.color = 'blue';
            console.log(getComputedStyle(textElement).color);
        }

        enrollButton.setAttribute('data-button-clicked', 'clicked');
    });
}

function switchToDarkMode() {
    document.body.style.backgroundColor = 'black';

    for (let textElement of textElements) {
        // textElement.style.color = 'white';
        textElement.classList.remove('text-dark');
        textElement.classList.add('text-light');
    }
}

function switchToLightMode() {
    document.body.style.backgroundColor = 'white';

    for (let textElement of textElements) {
        // textElement.style.color = 'black';
        textElement.classList.remove('text-light');
        textElement.classList.add('text-dark');
    }
}
