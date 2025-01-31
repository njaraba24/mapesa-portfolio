function toggleMenu(){
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
 document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/mapesaportfolio.pdf';
    link.download = 'mapesaportfolio.pdf';
    link.click();
  });
