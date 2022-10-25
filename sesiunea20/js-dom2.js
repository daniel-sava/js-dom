const enrollButton = document.getElementById('enroll');

if (enrollButton) {
    enrollButton.addEventListener('click', () => {
        window.alert('Te-ai inscris la aceasta sesiune!');
    });

    enrollButton.addEventListener('mouseenter', () => {
        console.log('Stiu ca vrei sa te inscriiii!');
        enrollButton.style.backgroundColor = 'blue';
    });

    enrollButton.addEventListener('mouseleave', () => {
        console.log('Hai inapoi!');
        enrollButton.style.backgroundColor = 'red';
    });
}

function changeEnrollButtonText() {
    enrollButton.innerText = `Numar ${Math.random()}`;
}

document.addEventListener('mousemove', changeEnrollButtonText);

setTimeout(() => {
    document.removeEventListener('mousemove', changeEnrollButtonText);
}, 10000);
