document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
  
    const paintings = [
      { title: 'Sunset Bliss', image: 'genimg.jpeg', price: '$300' },
      { title: 'Ocean Waves', image: 'genimg.jpeg', price: '$250' },
      { title: 'Forest Dream', image: 'genimg.jpeg', price: '$180' },
      { title: 'Abstract Colors', image: 'genimg.jpeg', price: '$220' },
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

    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
  });



  const toggleButton = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    toggleButton.addEventListener('change', () => {
        if (toggleButton.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            theme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
});
