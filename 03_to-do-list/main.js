document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')
  const eachLi = document.querySelectorAll('li')
  const eachCloseBtn = document.querySelectorAll('.close')
  const input = document.querySelector('#input')
  const addBtn = document.querySelector('#addBtn')

  eachLi.forEach(li => {
    li.addEventListener('click', todoChecked)
  })

  eachCloseBtn.forEach(closeBtn => {
    closeBtn.addEventListener('click', deleteTodo)
  })
  
  eachLi.forEach(li => {
    li.addEventListener('drag', dragAndExchange)
    })

  addBtn.addEventListener('click', addNewTodo)

  function todoChecked() {
    this.classList.toggle('checked')
  }

  function deleteTodo() {
    this.parentNode.remove()
  }

  function addNewTodo() {
      let newLi = document.createElement('li')
      
      newLi.setAttribute('draggable', 'true')
      newLi.innerHTML = `${input.value}<span class="close">x</span>`
      ul.appendChild(newLi)
      input.value = ''
      
      let closeBtn = newLi.querySelector('.close')

      newLi.addEventListener('click', todoChecked)
      newLi.addEventListener('drag', dragAndExchange)
      closeBtn.addEventListener('click', deleteTodo)
}

  function dragAndExchange(e) {
    let hoverTarget = document.elementFromPoint(e.clientX,e.clientY)
      if (hoverTarget.hasAttribute('draggable') &&hoverTarget !== e.target) {
        console.log('change')
        if (hoverTarget.offsetTop < e.target.offsetTop){
          hoverTarget.insertAdjacentElement('beforebegin', e.target)
        } else {
          hoverTarget.insertAdjacentElement('afterend', e.target)
        }
      }
  }

})