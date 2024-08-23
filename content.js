(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    body, p, h1, h2, h3, h4, h5, h6, a, div, span, input, form {
      font-family: monospace !important;
    }
  `;
  document.head.appendChild(style);
})();
