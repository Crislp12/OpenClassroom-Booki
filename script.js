function changeButtonText() {
    const button = document.getElementById("button-search")

    if((window.matchMedia('(width <= 450px)').matches)){
        button.textContent = 'hi';
    }
};

changeButtonText()


// Add an event listener to run the function whenever the window is resized
window.addEventListener('resize', changeButtonText);
