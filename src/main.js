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
    const dotsContainer = document.querySelector('.flex.justify-center.items-center.gap-2.mt-8');
    let currentIndex = 0;
    const cardsPerView = 3;
    
    // Get the current screen width
    const screenWidth = window.innerWidth;
    
    // Set responsive card width and gap based on screen size
    let cardWidth;
    let gap;
    if (screenWidth >= 1280) { // xl
        cardWidth = 400;
        gap = 24; // gap-6
    } else if (screenWidth >= 1024) { // lg
        cardWidth = 250;
        gap = 20; // gap-5
    } else if (screenWidth >= 768) { // md
        cardWidth = 250;
        gap = 16; // gap-4
    } else { // sm and below
        cardWidth = 200;
        gap = 12; // gap-3
    }
    
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
          dot.classList.add('bg-red-900', 'w-10', 'h-6');
        } else {
          dot.classList.remove('bg-red-900', 'w-10', 'h-6');
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

    // Function to update card width and gap based on screen size
    function updateCardWidth() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth >= 1280) { // xl
            cardWidth = 400;
            gap = 24; // gap-6
        } else if (screenWidth >= 1024) { // lg
            cardWidth = 250;
            gap = 20; // gap-5
        } else if (screenWidth >= 768) { // md
            cardWidth = 250;
            gap = 16; // gap-4
        } else { // sm and below
            cardWidth = 200;
            gap = 12; // gap-3
        }
        
      
    }

    // Add resize event listener
    window.addEventListener('resize', updateCardWidth);

    // Initial card width setup
    updateCardWidth();
  });