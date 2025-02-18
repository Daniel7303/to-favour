let navBar = document.getElementById("navBar")
let linkCon = document.getElementById("linkCon")

navBar.addEventListener("click", function() {
  linkCon.classList.toggle("active")
  navBar.classList.togge("active")
})