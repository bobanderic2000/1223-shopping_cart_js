document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.trash-btn').forEach(trashBtn => {
    trashBtn.addEventListener('click', deleteItem)
  })
  
  // "更動"購物車品項的數量時，小計金額、總價變化
  const inputs = document.querySelectorAll('.quantity');
  inputs.forEach(input => {
    input.addEventListener('change', setQuantity)
  })

  document.querySelectorAll('.add-item-btn').forEach(addItemBtn => {
    addItemBtn.addEventListener('click', setCartItem)
  })

// 加入購物車
  function setCartItem(addBtn) {
    const title = addBtn.currentTarget.parentNode.querySelector('.card-title').textContent;
    const itemPrice = addBtn.currentTarget.parentNode.querySelector('.price').textContent.replace('$', '');
    // 建立要插入購物車的元件
    let cartItemRow = document.createElement('tr');
    cartItemRow.className = 'cart-item'
    cartItemRow.innerHTML = `
    <td>${title}</td>
    <td><input type="number" value="1" class="quantity"></td>
    <td class="cart-item-price">$${itemPrice}</td>
    <td class="subtotal">$${itemPrice}</td>
    <td><button class="trash-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
    `;
    // 元件插入購物車內的第一順位
    const cart = document.querySelector('.cart tbody');
    cart.insertAdjacentElement('afterbegin', cartItemRow);
    // 加入項目後重新計算
    updateTotal();
    // 監聽，可刪除新增的項目
    cartItemRow.querySelectorAll('.trash-btn').forEach(trashBtn => {
      trashBtn.addEventListener('click', deleteItem)
    })
  }

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
    const itemPrice = input.parentNode.parentNode.querySelector('.cart-item-price').textContent.replace('$', '');
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
    document.querySelector('.total').textContent = `$${total}`;
  } 

// 刪除項目
function deleteItem(e) {
  const cartItem = e.currentTarget.parentElement.parentElement ; // currentTarget是指發生事件的物件；target是被點擊的物件
  cartItem.remove();
  updateTotal();
  }

// this is the end  
})