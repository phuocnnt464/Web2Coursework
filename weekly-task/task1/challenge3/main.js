//Add an onSale property to the data, and use it to conditionally render a span that says “On Sale!”

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/image/socks-green.jpg',
    inStock: true,
    onSale: true
  } 
})

