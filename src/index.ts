const questions = document.querySelectorAll<HTMLElement>('.question');

questions?.forEach((question: any) => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    questions.forEach((item: any) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// const btns = document.querySelectorAll<HTMLElement>(".question-btn")
// btns.forEach((btn)=> {
// btn.addEventListener("click", (e) => {
// const question = e.currentTarget.parentElement.parentElement
// question.classList.toggle("show-text")
// })
//})

export {};
