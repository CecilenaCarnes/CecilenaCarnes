function togglemenu() {
    document.getElementById("sitenav").classList.toggle("open");
}
let x = document.getElementById('hamburger');
x.onclick= togglemenu;



/*begin form js*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

