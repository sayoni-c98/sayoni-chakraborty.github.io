(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  function setMenu(open) {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }
  if (menu && nav) {
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1180) setMenu(false); });
  }
  const filterButtons = document.querySelectorAll('[data-filter]');
  const publications = document.querySelectorAll('.publication[data-category]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const choice = button.dataset.filter;
    filterButtons.forEach(el => {
      const selected = el === button;
      el.classList.toggle('active', selected);
      el.setAttribute('aria-pressed', String(selected));
    });
    publications.forEach(item => { item.hidden = choice !== 'all' && item.dataset.category !== choice; });
    const status = document.querySelector('#filter-empty');
    if (status) {
      const count = Array.from(publications).filter(el => !el.hidden).length;
      status.textContent = `Showing ${count} ${choice === 'all' ? 'total' : choice} publication entries.`;
    }
  }));
  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

// A remote, attributed medical image is replaced by a local abstract illustration if unavailable.
document.querySelectorAll('.story-figure img[src^="https://upload.wikimedia.org/"]').forEach((img) => {
  img.addEventListener('error', () => {
    img.src='assets/research/clinical-data.svg';
    img.alt='Abstract biomedical data illustration (medical photo unavailable)';
  }, {once:true});
});
