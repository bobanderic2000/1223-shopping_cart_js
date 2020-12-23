document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.trash-btn').forEach(trashBtn => {
    trashBtn.addEventListener('click', deleteItem)
  })
  // 刪除項目
  function deleteItem(e) {
    let cartItem = e.currentTarget.parentElement.parentElement
    cartItem.remove()  
  }
  
  total = document.querySelector('.total').innerText.replace('$', '')
  


// this is the end  
})