

let itemList = document.querySelector('.item-list')

const testFunction = async () => {

   const result = await axios.get('/products');

   result.data.forEach(el => {

    itemList.innerHTML += `<div class = 'product'> ${el.name}
      <h3 class ="price"> ${el.price} <h3>
      </div>`
   })
}

testFunction()