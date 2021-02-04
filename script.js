



function get(){
    let num = Math.floor(Math.random() * 44)
    let url = `http://quotes.stormconsultancy.co.uk/popular.json`;
    fetch(url).then((response)=>
    {
        return response.json();
    }).then(data =>{
        document.getElementById('qoute').innerHTML =` "${data[num].quote}"`;
        document.getElementById('Author').innerHTML = data[num].author;
        
    })
    
    console.log(num);
}

get();
window.addEventListener('click' , function(){
    document.getElementById('qoute').innerHTML ="";
        window.location.reload()
})

// let reloadd = setInterval(reload() , 1000000);
  

// function gett (){
//     let url = `http://quotes.stormconsultancy.co.uk/popular.json`;
//     fetch(url).then(response =>{
//         return response.json();
//     }).then(data =>{
//         console.log(data);
//     })
// }

// gett();