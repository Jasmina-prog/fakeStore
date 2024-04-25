const container2 = document.querySelector('.card-container2')


    bucketData('https://fakestoreapi.com/products')


    
    async function bucketData(link){
        let products = JSON.parse(localStorage.getItem('productName'))
        console.log(products);
        const res = await fetch(link);
        const info = await res.json();
        let filteredBucket = info.filter((item) => products.includes(item.id))
        container2.innerHTML = '';
        filteredBucket.forEach((item)=>{
        container2.innerHTML += `   
        <div class = "card">
        <img src=" ${item?.image}">
        <p> ${item?.title}</p>
        <p> ${item?.price} $</p>
        <button onclick="btnClick(${item?.id})">Buy</button>
        </div>         
        `
    })   
    }