const questions = document.querySelectorAll('.faq-question');
const articles = document.querySelectorAll('.faq-cont');

questions.forEach(que =>
  que.addEventListener('click', e => {
    const parentCont = e.target.closest('.faq-cont');
    articles.forEach(art => {
      if (art != parentCont) art.classList.remove('active');
    });
    parentCont.classList.toggle('active');
  })
);
