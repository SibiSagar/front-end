// var buttonClick = document.querySelector("button");

// var backDisplay = document.querySelector("body");

//1.// buttonClick.addEventListener("click", click);

// function click() {
//   if (backDisplay.style.background === "white") {
//     backDisplay.style.background = "green";
//   } else {
//     backDisplay.style.background = "white";
//   }
// }


// buttonClick.addEventListener("click",click)


// function click(){

//     backDisplay.classList.toggle("button")
// }

// document.querySelector()
// document.querySelectorAll()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementById()

// document.querySelector("div").style.width=""

// document.querySelector("div").classList.add()
// document.querySelector("div").classList.remove()
// document.querySelector("div").classList.toggle()
// document.querySelector("div").classList.items(index)
// document.querySelector("div").classList.contains("classname")

// document.querySelector("div").getAttribute()
// document.querySelector("div").setAttribute()


var test=document.querySelectorAll(".sentence")



for(i=0;i<test.length;i++){

    test[i].addEventListener("mouseover",myFunc)

    test[i].addEventListener("mouseout", myFunc1)

console.log(i)

}


function myFunc(){

    this.style.color="green"
    

}

function myFunc1() {

    this.style.color = "purple"

}