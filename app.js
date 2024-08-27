var swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 400,
	preventClicks: true,
	noSwiping: true,
	freeMode: false,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},

	breakpoints: {
		550: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	}
});

// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.swiper-slide');

// Agrega un evento de hover a cada tarjeta
cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    // Agrega una clase que active la animación
    card.classList.add('hover');
  });

  card.addEventListener('mouseout', () => {
    // Quita la clase que activa la animación
    card.classList.remove('hover');
  });
});

// Selecciona todos los botones "Mas información"
const buttons = document.querySelectorAll('.btn');

// Agrega un evento de clic a cada botón
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Selecciona la tarjeta que contiene el botón
    const card = button.parentNode;

    // Selecciona la información adicional del perro
    const dogName = card.querySelector('h2').textContent;
    const dogImage = card.querySelector('img').src;
    const dogInfo = card.querySelector('.info').innerHTML;

    // Rellena el contenido del modal con la información adicional
    const modalContent = `
      <h2>${dogName}</h2>
      <img src="${dogImage}" alt="${dogName}">
      ${dogInfo}
      <button class="close-modal">Cerrar</button>
    `;

    // Muestra el modal con la información adicional
    showModal(modalContent);
  });
});

function showModal(modalContent) {
	// Crea el modal
	const modal = document.createElement('div');
	modal.classList.add('modal');
  
	// Crea el contenido del modal
	const modalContentElement = document.createElement('div');
	modalContentElement.classList.add('modal-content');
	modalContentElement.innerHTML = modalContent;
  
	// Agrega el contenido del modal al modal
	modal.appendChild(modalContentElement);
  
	// Agrega el modal a la página
	document.body.appendChild(modal);
  
	// Selecciona el botón de cerrar el modal
	const closeModalButton = modal.querySelector('.close-modal');
  
	// Agrega un evento de clic al botón de cerrar el modal
	closeModalButton.addEventListener('click', () => {
	  // Cierra el modal
	  modal.remove();
	});
  }