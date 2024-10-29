const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');

// Keywords for syntax highlighting
const keywords = ["function", "return", "const", "let", "var", "if", "else", "for", "while", "class"];

// Initialize line numbers on load
updateLineNumbers();

// Event listeners
editor.addEventListener('input', updateLineNumbers);
editor.addEventListener('scroll', () => {
  lineNumbers.scrollTop = editor.scrollTop;
});

// Toggle Line Numbers
function toggleLineNumbers() {
  lineNumbers.style.display = lineNumbers.style.display === 'none' ? 'block' : 'none';
}

// Toggle Dark Mode / Light Mode
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  editor.classList.toggle('light-theme-editor');
}

// Line number update function
function updateLineNumbers() {
  const lineCount = editor.value.split('\n').length;
  lineNumbers.innerHTML = Array.from({ length: lineCount }, (_, i) => i + 1).join('<br>');
}

// Syntax highlighting
editor.addEventListener('input', () => {
  let content = editor.value;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    content = content.replace(regex, `<span class="keyword">${keyword}</span>`);
  });
  editor.innerHTML = content;
});

// File save
function saveFile() {
  const blob = new Blob([editor.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'untitled.txt';
  link.click();
}
