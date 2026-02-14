/* global tocbot */

document.addEventListener('DOMContentLoaded', () => {
  // Si no existe ToC en la página o no está cargado tocbot, no hacemos nada.
  if (typeof tocbot === 'undefined') return;

  const tocEl = document.querySelector('#toc');
  const contentEl = document.querySelector('.content');

  if (!tocEl || !contentEl) return;

  // Re-inicializa el ToC incluyendo H1 (encabezados '#').
  // Nota: si Chirpy ya inicializó tocbot, primero lo destruimos.
  try {
    tocbot.destroy();
  } catch (e) {}

  tocbot.init({
    tocSelector: '#toc',
    contentSelector: '.content',
    headingSelector: 'h1, h2, h3, h4, h5, h6',
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 6
  });
});
