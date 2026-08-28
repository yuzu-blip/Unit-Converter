/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const mf = document.getElementById("m-to-f")
const lg = document.getElementById("l-to-g")
const kp = document.getElementById("k-to-p")
const buttonEl = document.getElementById("button-el")
const input = document.getElementById("input-el")



buttonEl.addEventListener("click", function() {
    let num = input.value
    mf.textContent = `${num} meters = ${(Number(num) * 3.281).toFixed(2)} feet | ${num} feet = ${(Number(num) / 3.281).toFixed(2)} meters`
    
    lg.textContent = `${num} liters = ${(Number(num) * 0.264).toFixed(2)} gallons | ${num} gallons = ${(Number(num) / 0.264).toFixed(2)} liters`
    
    kp.textContent = `${num} kilos = ${(Number(num) * 2.204).toFixed(2)} pounds | ${num} pounds = ${(Number(num) / 2.204).toFixed(2)} kilos`
})

