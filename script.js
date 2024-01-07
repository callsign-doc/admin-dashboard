const contentContaienr = document.getElementsByClassName("contentContainer");

contentContainer.addEventListener('mouseover', (e) => {
    target = e.currentTarget;

    target.style.backgroundColor = 'blue';
});

