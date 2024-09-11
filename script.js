window.addEventListener('scroll', function() {
    const scrollNavbar = document.getElementById('scroll-navbar');
    const progressBar = document.getElementById('progress-bar');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;
  
    if (scrollTop > 100) {
      scrollNavbar.classList.add('show'); 
      progressBar.style.width = progress + '%';
  
      const originalNavbar = document.querySelector('.navbar-original');
      originalNavbar.style.visibility = 'hidden';
    } else {
      scrollNavbar.classList.remove('show'); 
      progressBar.style.width = '0';
  
      const originalNavbar = document.querySelector('.navbar-original');
      originalNavbar.style.visibility = 'visible';
    }
});
  function closeAdlateral1() {
    const adlateral1 = document.getElementById('adlateral1');
    adlateral1.style.display = 'none';
  }
  
  
  
  