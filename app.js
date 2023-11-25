const links = document.querySelectorAll('.ref');
links.forEach(link => {
   link.addEventListener('click', function () {
      link.classList.add('active');
   })
})