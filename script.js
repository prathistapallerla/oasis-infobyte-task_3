let cel = document.querySelector(".inp-1");
let fahr = document.querySelector(".inp-2");
let kel = document.querySelector('.inp-3');

cel.addEventListener('input', (e) => {
  fahr.value = ((cel.value * 9 / 5) + 32).toFixed(2);
  kel.value = (parseInt(cel.value) + 273.15).toFixed(2);
})

fahr.addEventListener('input', (e) => {
  cel.value = ((fahr.value - 32) * 5 / 9).toFixed(2);
  kel.value = (((fahr.value - 32) / 1.8) + 273.15).toFixed(2);
})

kel.addEventListener('input', (e) => {
  cel.value = (kel.value - 273.1).toFixed(2);
  fahr.value = (((kel.value - 273.15) * 1.8) + 32).toFixed(2);
}) 