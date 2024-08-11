document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
  
    const paintings = [
      { title: 'Sunset Bliss', image: 'genimg.jpeg', price: '$300' },
      { title: 'Ocean Waves', image: 'genimg.jpeg', price: '$250' },
      { title: 'Forest Dream', image: 'genimg.jpeg', price: '$180' },
      { title: 'Abstract Colors', image: 'genimg.jpeg', price: '$220' },
     // { title: 'Generated Art', image: 'genimg.jpeg', price: '$350' }, // Ensured consistent naming
    ];
  
    paintings.forEach(painting => {
      const item = document.createElement('div');
      item.classList.add('gallery-item');
      item.innerHTML = `
        <img src="${painting.image}" alt="${painting.title}">
        <h2>${painting.title}</h2>
        <p>${painting.price}</p>
        <a href="#" allign="center" class="btn">Order Now</a>
      `;
      gallery.appendChild(item);
    });
  });
  