function getMainTitleAndDisplayClasses() {
    const mainTitle = document.getElementById('main-title');

    if (mainTitle) {
        for (let index = 0; index < mainTitle.classList.length; index++) {
            console.log(mainTitle.classList[index]);
        }
    }
}

// getMainTitleAndDisplayClasses();

function getElementsWithClassText() {
    const textElements = document.getElementsByClassName('text');
    for (let element of textElements) {
        console.log(element);
    }
}

// getElementsWithClassText();

function getStudentsList() {
    const studentsList = document.getElementsByTagName('li');
    for (let student of studentsList) {
        console.log(student.textContent);
    }
}

// getStudentsList();

function getElementByQuery(query) {
    const element = document.querySelector(query);
    console.log(element);
}

// getElementByQuery('.text');

function getElementsByQuery(query) {
    const elements = document.querySelectorAll(query);
    console.log(elements);
}

getElementsByQuery('.text');
