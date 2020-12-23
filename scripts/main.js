document.addEventListener('DOMContentLoaded', () => {
  const trashThem = document.querySelectorAll('.trash-it')
  trashThem.forEach(it => {
    it.addEventListener('click', e => {
      e.currentTarget.parentElement.parentElement.remove();
    })
  })

})