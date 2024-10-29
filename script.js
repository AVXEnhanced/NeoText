// Function to apply text formatting
function formatText(command) {
    document.execCommand(command, false, null);
}

// Function to change text size
function changeTextSize(action) {
    const editor = document.getElementById('editor');
    let fontSize = window.getComputedStyle(editor).fontSize;
    fontSize = parseInt(fontSize);

    // Adjust font size based on action
    if (action === 'increase') {
        fontSize += 2;
    } else if (action === 'decrease') {
        fontSize -= 2;
    }

    // Apply the new font size
    editor.style.fontSize = fontSize + 'px';
}

// Function to download the editor content as a .txt file
function downloadText() {
    const editorContent = document.getElementById('editor').innerText;
    const blob = new Blob([editorContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'NeoTextEditorContent.txt';
    link.click();

    URL.revokeObjectURL(url); // Clean up the URL
}
