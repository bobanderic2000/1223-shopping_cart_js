document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.trash-btn').forEach(trashBtn => {
    trashBtn.addEventListener('click', deleteItem)
  })
  // 刪除項目
  function deleteItem(e) {
    let cartItem = e.currentTarget.parentElement.parentElement
    cartItem.remove()
    updateTotal()
  }
  
  function updateTotal(){
    let total = document.querySelector('.total').textContent.replace('$', '');
    let cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(cartItem => {
      let price = cartItem.querySelector('.cart-item-price').textContent.replace('$', '')
      let quantity = cartItem.querySelector('.quantity').value
      console.log(price);
      // console.log(cartItems);
    })
  }

  

// this is the end  
})