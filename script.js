function clearEditor() {
    const editor = document.querySelector('.text-editor');
    editor.innerHTML = ''; // Clear the content
    updateLineNumbers(); // Update line numbers
}

function updateLineNumbers() {
    const editor = document.querySelector('.text-editor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = editor.innerHTML.split('<br>').length; // Count lines
    lineNumbers.innerHTML = ''; // Clear previous line numbers

    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>'; // Add new line numbers
    }
}
