const o1 = document.querySelector('.o1');
const o2 = document.querySelector('.o2'); // okienka czatu

const AddClasses1 = () => o1.classList.add('appear');
const AddClasses2 = () => o2.classList.add('appear'); // Dodawanie klasy

o1.addEventListener('transitionend',AddClasses2);

setTimeout(AddClasses1,1000);

const returnBtn = document.querySelector('.return');
const returnToChoose = () => window.location.href = "https://krystiano13.github.io/wywiad/html/Choose2.html";
returnBtn.addEventListener('click',returnToChoose);