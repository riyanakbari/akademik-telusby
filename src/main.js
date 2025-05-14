import './style.css'

// Fungsi untuk menandai link yang aktif
window.addEventListener('DOMContentLoaded', (event) => {
  // Ambil path URL saat ini
  const currentPath = window.location.pathname;
  
  // Cari semua link dengan kelas nav-link
  const links = document.querySelectorAll('.nav-link');

  // Loop untuk mengecek setiap link dan memberi kelas aktif
  links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          // Menambahkan kelas aktif jika URL cocok
          link.classList.add('text-red-600', 'font-bold', 'bg-red-50', 'px-3', 'py-1', 'rounded-full');
      } else {
          // Menghapus kelas aktif pada link lainnya
          link.classList.remove('text-red-600', 'font-bold', 'bg-red-600', 'text-white', 'rounded-full');
      }
  });
});
