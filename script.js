let buttons = document.querySelectorAll(".button");
let result = document.querySelector(".result")
let data = ''
buttons.forEach(button => {
  button.addEventListener("click",(e)=>{
    if(e.target.dataset.num === "="){
      calculate()
      data = ''
    }
    if(e.target.dataset.num !== "="){
      data += e.target.dataset.num
      result.textContent = data
    }
    console.log();
    
  })
})

function calculate(){
  result.textContent = eval(data)
  
}
console.log(result)

