const output = document.getElementById('output');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

clear.addEventListener('click', function () {
  document.querySelector('.value').value = "";
});
const nums = document.querySelectorAll('.num');
nums.forEach(num=> {
  num.addEventListener('click', function (evt) {
    let textValue = evt.target.textContent;
    output.value += textValue;
  })
})
equal.addEventListener('click', ()=> {
    if(output.value.length >1) {
      output.value = eval(output.value)
    }
})



document.querySelector('.calculator').addEventListener('submit',(evt)=>evt.preventDefault())
