console.log("Hello")




let button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Hey I am RAFAY</b>"
})


document.querySelector(".parentcontainer").addEventListener("click", (e) => {
    e.stoppropagation()
    alert("parentcontainer was also click")
})


document.querySelector(".childcontainer").addEventListener("click", (e) => {
    e.stoppropagation()
    alert("childcontainer was click")
})


document.querySelector(".child").addEventListener("click", () => {
    alert("child was click")
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * 255)
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    
    return `rgb(${val1}, ${val2}, ${val3})`
}
setInterval(() => {
    document.querySelector(".childcontainer").style.background = getRandomColor();
}, 1000);





