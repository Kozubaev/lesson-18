let box = document.querySelector(".box")

let content = document.querySelector(".content")

let API = ("https://dummyjson.com/products")

async function getProducts() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        showProducts(data.products)
        
        
    } catch (error) {
        console.log(error);
        
    }
}

getProducts()

function showProducts(user){
    content.innerHTML = user.map((item) =>{
        return`
         <div class="b">
        <h2>${item.title}</h2>
        <img src="${item.images}"></img>
        <p>${item.price}</p>
        </div>
        `
    }).join("")
}