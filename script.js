// Grabbing references to the textareas and iframe
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputFrame = document.getElementById('output-frame');

// Function to update the iframe with user input
function updateOutput() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  const output = `${html}\n${css}\n${js}`;
  outputFrame.srcdoc = output;
}

// Adding event listeners for real-time updates
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

// Initialize with default content
htmlCode.value = "<h1>Hello, Hacker!</h1>";
cssCode.value = "h1 { color: lime; text-align: center; text-shadow: 0 0 10px lime; }";
jsCode.value = "console.log('Welcome to the Hacker Editor!');";
updateOutput();
