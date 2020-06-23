console.log("Hello World")

document.getElementsByClassName("row")[0].addEventListener("click", function(){
    document.getElementById("article1").style.display="block"
    document.getElementsByClassName("row")[0].style.display="none"
})

document.getElementById("article1").addEventListener("click", function(){
    document.getElementById("article1").style.display="none"
    document.getElementsByClassName("row")[0].style.display="block"
})


console.log(document.getElementsByClassName("row"))