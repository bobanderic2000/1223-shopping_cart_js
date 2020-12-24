document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.trash-btn').forEach(trashBtn => {
    trashBtn.addEventListener('click', deleteItem)
  })
  // 刪除項目
  function deleteItem(e) {
    const cartItem = e.currentTarget.parentElement.parentElement
    cartItem.remove()
    updateTotal()
  }
  
  // 購物車品項的數量變化時，小計金額變化
  const inputs = document.querySelectorAll('.quantity');
  inputs.forEach(input => {
    input.addEventListener('change', setQuantity)
  })


  // 單品數量
  function setQuantity(e) {
    const input = e.target
    let quantity = input.value;
    // 設定數量不可小於1
    if (quantity <= 1) {
      quantity = 1
      e.currentTarget.value = quantity
    }
    // 小計計算
    let itemPrice = input.parentNode.parentNode.querySelector('.cart-item-price').textContent.replace('$', '');
    let subtotalCount = (quantity * itemPrice);
    input.parentNode.parentNode.querySelector('.subtotal').textContent = `$${subtotalCount}`
    updateTotal();
  }

  // 計算總價
  function updateTotal(){
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(cartItem => {
      let price = cartItem.querySelector('.cart-item-price').textContent.replace('$', '');
      let quantity = cartItem.querySelector('.quantity').value;
      total += (price * quantity);  // 這行比較特別，容易忘，可以記一下
    });
    document.querySelector('.total').textContent = `$${total}`
  } 

// this is the end  
})