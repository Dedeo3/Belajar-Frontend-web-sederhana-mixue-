// untuk menampilkan sidebar
// class yg akan dimunculkan
const sidebar= document.querySelector
('.option');
// ketika titik 3 diklik
document.querySelector('#nav-responsif').
onclick=()=>{
    sidebar.classList.toggle("active");
};