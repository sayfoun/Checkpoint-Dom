

function decreaseQuantity(itemId) {
    let quantityElement = document.getElementById(`quantity${itemId}`);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
    }
  }
  
  function increaseQuantity(itemId) {
    let quantityElement = document.getElementById(`quantity${itemId}`);
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
  }