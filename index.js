<<<<<<< HEAD

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
=======
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// console.log("Hello World")

// document.getElementsByClassName("row")[0].addEventListener("click", function(){
//     document.getElementById("article1").style.display="block"
//     document.getElementsByClassName("row")[0].style.display="none"
// })

// document.getElementById("article1").addEventListener("click", function(){
//     document.getElementById("article1").style.display="none"
//     document.getElementsByClassName("row")[0].style.display="block"
// })


// console.log(document.getElementsByClassName("row"))
>>>>>>> d9e72df880f9d9f399019c7e83559f50949dc0b6
