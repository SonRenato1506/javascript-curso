let a = document.querySelector("footer a")

console.log(a.getAttribute("href"))

let link = "https://google.com"

a.setAttribute("hrref", link)

console.log(a.getAttribute("href"))