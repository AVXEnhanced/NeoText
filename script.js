const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');

// Update line numbers based on the textarea content
editor.addEventListener('input', updateLineNumbers);
editor.addEventListener('scroll', syncScroll);

function updateLineNumbers() {
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>';
    }
}

function syncScroll() {
    lineNumbers.scrollTop = editor.scrollTop;
}

// Initialize line numbers on page load
updateLineNumbers();
