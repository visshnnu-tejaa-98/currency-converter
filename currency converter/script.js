let input = document.getElementById("input")
let inputTimes = document.getElementById("inputTimes")
let button = document.getElementById("submit")
let output = document.getElementById("result")
let codes = document.getElementById("codes")

console.log(input)
console.log(button)

button.addEventListener("click",function(e){
    e.preventDefault()
    let symbol = input.value
    let times = +inputTimes.value
    console.log(input.value,times)
    async function getData(){
        let apiResponse = await fetch(`http://data.fixer.io/api/latest?access_key=b7eeda535feac81c1b50ca5f55fdbc4e&symbols=${symbol}`)
        let apiData = await apiResponse.json()
        let result = +JSON.stringify(apiData.rates).split(":")[1].split("").filter(i=>i!=="}").join("")
        let array = +result.toFixed(2)
        let mul = array * times
        output.innerHTML = mul
    }
    getData()
})






