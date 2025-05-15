import './style.css'

// Fungsi untuk menandai link yang aktif
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
  
    const links = document.querySelectorAll('.nav-link');
  
    links.forEach(link => {
      const href = link.getAttribute('href');
  
      // Jika URL cocok, atau jika path == "/" dan ini adalah link beranda
      if (
        currentPath === href ||
        (currentPath === "/" && href === "/beranda")
      ) {
        link.classList.add('text-red-600', 'font-bold', 'bg-red-100');
      } else {
        link.classList.remove('text-red-600', 'font-bold', 'bg-red-100');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = slider.querySelectorAll('div');
    const dotsContainer = document.querySelector('.flex.justify-center.items-center.gap-2.mt-6');
    let currentIndex = 0;
    const cardsPerView = 3;
    const cardWidth = 400; // Width of each card
    const gap = 24; // 6 * 4px (gap-6 in Tailwind is 1.5rem = 24px)
  
    // Create dots based on number of possible slides (4 cards - 3 visible + 1 = 2 possible positions)
    dotsContainer.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot rounded-full bg-gray-300 transition-all duration-300';
      dot.setAttribute('data-index', i);
      dotsContainer.appendChild(dot);
    }
  
    const dots = document.querySelectorAll('.slider-dot');
  
    // Function to update slider position
    const updateSlider = () => {
      const offset = -currentIndex * (cardWidth + gap);
      slider.style.transform = `translateX(${offset}px)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.remove('bg-gray-300');
          dot.classList.add('bg-red-900', 'w-4');
        } else {
          dot.classList.remove('bg-red-900', 'w-4');
          dot.classList.add('bg-gray-300');
        }
      });
    };
  
    // Previous button click handler
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    // Next button click handler
    nextBtn.addEventListener('click', () => {
      if (currentIndex < 2) { // Only one slide to the right (0 to 1)
        currentIndex++;
        updateSlider();
      }
    });
  
    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
  
    // Initialize dots
    updateSlider();
  });