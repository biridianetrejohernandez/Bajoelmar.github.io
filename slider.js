  const slides = [
    {
      title: "Solo hemos visto el 0,001% de los fondos marinos",
      text: "Cinco países acumulan casi todas las misiones de exploración de las profundidades del mar, que representan el 70% de la superficie del planeta.",
      image: "Imagenes/arecife.jpg"
    },
    {
      title: "Los secretos del océano Pacífico",
      text: "Cinco países acumulan casi todas las misiones de exploración de las profundidades del mar, que representan el 70% de la superficie del planeta",
      image: "imagenes/oceano.jpg"
    }, {
      title: "La nieve se ha convertido en un serio problema en los Grandes Lagos de EE. UU.",
      text: "Las devastadoras tormentas de nieve del lago Erie podrían asfixiar a sus comunidades. Y es posible que la situación pueda empeorar",
      image: "imagenes/hielo.jpg"
    }  
  ];

  let current = 0;

  const titleEl = document.querySelector('.slide-text h1');
  const textEl = document.querySelector('.slide-text p');
  const imgEl = document.querySelector('.slide-image img');

  function updateSlide(index) {
    titleEl.innerHTML = slides[index].title;
    textEl.innerText = slides[index].text;
    imgEl.src = slides[index].image;
  }

  document.querySelector('.prev').onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide(current);
  };

  document.querySelector('.next').onclick = () => {
    current = (current + 1) % slides.length;
    updateSlide(current);
  };
