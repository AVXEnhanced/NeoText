const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');

// Initialize line numbers on load
updateLineNumbers();

// Event listener to update line numbers on input
editor.addEventListener('input', updateLineNumbers);
editor.addEventListener('scroll', () => {
  lineNumbers.scrollTop = editor.scrollTop;
});

function updateLineNumbers() {
  const lineCount = editor.value.split('\n').length;
  lineNumbers.innerHTML = Array.from({ length: lineCount }, (_, i) => i + 1).join('<br>');
}

// Simple syntax highlighting for keywords
const keywords = ["function", "return", "const", "let", "var", "if", "else", "for", "while", "class"];
editor.addEventListener('input', highlightSyntax);

function highlightSyntax() {
  const value = editor.value;
  const highlighted = value.replace(
    new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'),
    '<span class="keyword">$1</span>'
  );
  editor.innerHTML = highlighted;
}
