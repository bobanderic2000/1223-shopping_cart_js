document.addEventListener('DOMContentLoaded', () => {
  
  function rm$(text$) {
    text$.replace('$', '')
  }
  
  const trashThem = document.querySelectorAll('.trash-it')
  // trashThem.forEach(it => {
  //   // 點垃圾桶，刪除商品項目
  //   it.addEventListener('click', e => removeGood)
  //   const function removeGood (e) {
  //     e.currentTarget.parentElement.parentElement.remove();
  //   }
  //   // 計算總價
  //   it.addEventListener('click', e => calcCart)
  //   const function calcCart() {
  //     const cartItems = document.querySelectorAll('.cart .cart-item')
  //     let total = 0
  //     cartItems.forEach(item => {
  //       const price = item.querySelector('.price').innerText.replace('$', '')
  //       let quantity = item.querySelector('.quantity').value
  //       total += (quantity * price)
  //     })
  //     document.querySelector('.total-price').innerText = `$${total}`
  //     console.log(total)
  //   }
  // })
  // 數量-小計 計算
  // innerPrices = document.querySelectorAll('input').value
  // console.log(innerPrice)
  // innerPrices.forEach(innerPrice => {
  //   innerPrice.addEventListener('change', quantitySet)
  // })
  


  // function quantitySet(e) {
  //   let input = e.target
  //   let quantity = input.value
  //   if (quantity <= 0){
  //     quantity = 1
  //     e.target.value = quantity
  //   }

  //   const cartItem = input.parentElement.parentElement
  //   const price = cartItem.querySelector('input').innerText.replace('$', '')
  // }

  const catBtns = document.querySelectorAll('.cat-btn')
  catBtns.forEach(catBtn => {
    // 點垃圾桶，刪除商品項目
    catBtn.addEventListener('click', e => addCatItem)
    catBtn.addEventListener('click', e => printCatName)
    const function printCatName(e) {
      console.log(catName)
    }
  })

  catName = catBtn.parentElement.querySelector('.cat-name').innerText

  const function addCatItem (e) {
    console.log(e)
  }

  
  

})