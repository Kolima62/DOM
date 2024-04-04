let root = document.getElementById('root');
let titre = document.createElement('h1');
let boutonACliquer = document.createElement('button');
titre.textContent = 'tata';
boutonACliquer.textContent = 'changer la couleur du titre';
root.append(boutonACliquer);
root.appendChild(titre);

boutonACliquer.addEventListener('click', function () {
  titre.classList.toggle('toto');
});

boutonACliquer.addEventListener('');

boutonACliquer.addEventListener('click', function () {
  titre.classList.toggle('hidden');
});

// boutonACliquer.addEventListener('mouseleave', function () {
//   titre.classList.remove('toto');
// });

// boutonACliquer2.addEventListener('mouseover', function () {
//     titre.classList.remove('toto');
// });
// boutonACliquer2.textContent = 'changer la couleur du titre';
// let boutonACliquer2 = document.createElement('button');
// idem pour enlever la classe toto
// root.append(boutonACliquer2);

// root.textContent = 'toto';
// boutonACliquer.style.color = 'red';
// boutonACliquer.style.border = '1px solid blue';
// boutonACliquer.style.width = 'fit-content';
// boutonACliquer.style.padding = '4px';
// boutonACliquer.style.borderRadius = '8px';

// titre.after(boutonACliquer);

// titre.style.color = 'red';
// titre.style.border = '1px solid blue';
// titre.style.width = 'fit-content';
// titre.style.padding = '4px';
// titre.style.borderRadius = '8px';

// console.log(root.innerText); // récupère les styles

// A éviter
// titre.innerHTML = 'titi';

// root.before(titre);

console.log(document.body);
