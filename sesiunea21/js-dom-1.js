const studentsList = document.querySelector('#students-list');
const students = studentsList.children;

function printStudentsToObject() {
    let studentsGrades = {};

    // Varianta fara span
    // for (let student of students) {
    //     const studentNameAndGrade = student.textContent.split(' - ');
    //     studentsGrades[studentNameAndGrade[0]] = parseFloat(studentNameAndGrade[1]);
    // }

    // Varianta cu span
    for (let student of students) {
        // Solutia 1
        // const studentNameAndGrade = student.childNodes;
        // studentsGrades[studentNameAndGrade[0].textContent.trim()] = parseFloat(
        //     studentNameAndGrade[1].textContent
        // );

        // Solutia 2
        const studentNameAndGrade = [
            student.textContent
                .replace(student.children[0].textContent, '')
                .trim(),
            student.children[0].textContent,
        ];

        markStudentAsPassedOrFailed(student.children[0]);

        studentsGrades[studentNameAndGrade[0]] = parseFloat(
            studentNameAndGrade[1]
        );
    }

    console.log(studentsGrades);
}

function markStudentAsPassedOrFailed(studentGradeElement) {
    const grade = parseFloat(studentGradeElement.textContent);

    // if (grade === 10) {
    //     studentGradeElement.classList.add('highest-grade');
    //     studentGradeElement.parentNode.classList.add('highest-grade-name');
    // } else
    if (grade > 5) {
        studentGradeElement.classList.add('passed');
    } else {
        studentGradeElement.classList.add('failed');
    }
}

// Input Elements
const studentNameElement = document.getElementById('student-name');
const studentGradeElement = document.getElementById('student-grade');

// Button Elements
const addStudentButton = document.getElementById('add-student');
const validateStudentsButton = document.getElementById('validate-students');

addStudentButton.addEventListener('click', function () {
    isFormValid = true;

    if (!studentNameElement.value) {
        const hasError =
            studentNameElement.parentNode.querySelector('span.error');
        // if (hasError) {
        //     hasError.remove();
        // }

        if (!hasError) {
            const errorTextElement = document.createElement('span');
            errorTextElement.className = 'failed error';
            const errorTextMessage = document.createTextNode(
                'Campul trebuie completat!'
            );
            errorTextElement.appendChild(errorTextMessage);
            studentNameElement.parentNode.appendChild(errorTextElement);
        }
        isFormValid = false;
    }

    if (!studentGradeElement.value) {
        const hasError =
            studentGradeElement.parentNode.querySelector('span.error');
        // if (hasError) {
        //     hasError.remove();
        // }

        if (!hasError) {
            const errorTextElement = document.createElement('span');
            errorTextElement.className = 'failed error';
            const errorTextMessage = document.createTextNode(
                'Campul trebuie completat!'
            );
            errorTextElement.appendChild(errorTextMessage);
            studentGradeElement.parentNode.appendChild(errorTextElement);
        }
        isFormValid = false;
    }

    if (!isFormValid) {
        return;
    }

    const hasNameError =
        studentNameElement.parentNode.querySelector('span.error');
    if (hasNameError) {
        hasNameError.remove();
    }

    const hasGradeError =
        studentGradeElement.parentNode.querySelector('span.error');
    if (hasGradeError) {
        hasGradeError.remove();
    }

    const newStudentElement = document.createElement('li');
    const newStudentName = document.createTextNode(
        studentNameElement.value + ' '
    );
    newStudentElement.appendChild(newStudentName);

    const newStudentGradeElement = document.createElement('span');
    newStudentGradeElement.className = 'student-grade';
    const newStudentGrade = document.createTextNode(studentGradeElement.value);
    newStudentGradeElement.appendChild(newStudentGrade);

    newStudentElement.appendChild(newStudentGradeElement);
    studentsList.appendChild(newStudentElement);
});

validateStudentsButton.addEventListener('click', function () {
    printStudentsToObject();
});
