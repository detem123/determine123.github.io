const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.textContent = nav.classList.contains('open') ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  if (toggle) toggle.textContent = '☰';
}));
const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), {threshold: .08});
document.querySelectorAll('.section,.hero').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
