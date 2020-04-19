const o1 = document.querySelector('.o1');
const o2 = document.querySelector('.o2'); // okienka czatu
const o3 = document.querySelector('.o3');

const AddClasses1 = () => o1.classList.toggle('appear');
const AddClasses2 = () => o2.classList.toggle('appear'); // Dodawanie klasy
const AddClasses3 = () => o3.classList.toggle('appear');

o1.addEventListener('transitionend',AddClasses2);
o2.addEventListener('transitionend',AddClasses3);

setTimeout(AddClasses1,1000);