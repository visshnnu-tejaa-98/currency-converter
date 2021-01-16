let tbody  = document.getElementById("tbody")

// codes.addEventListener("click",function(e){
    // e.preventDefault()
    async function getData(){
        let apiResponse = await fetch("https://restcountries.eu/rest/v2/all")
        let apiData =  await apiResponse.json()
        console.log(apiData)
        for(let i=0;i<apiData.length;i++){
            let tr = document.createElement("tr")
            tr.innerHTML = `
            <th scope="row">${apiData[i].name}</th>
            <td>${apiData[i].currencies[0].code}</td>`
            tbody.appendChild(tr)
        }
    }
    getData()
// })
