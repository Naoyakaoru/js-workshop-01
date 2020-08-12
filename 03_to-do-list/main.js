document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')
  const eachLi = document.querySelectorAll('li')
  const eachCloseBtn = document.querySelectorAll('.close')
  const input = document.querySelector('#input')
  const addBtn = document.querySelector('#addBtn')

  for(i = 0 ; i < eachLi.length ; i++){
    eachLi[i].addEventListener('click', function(){
    this.classList.toggle('checked')
  })
  }
  
  eachCloseBtn.forEach(btn => {
    btn.addEventListener('click', function(){
      this.parentNode.remove(btn.parentNode)
    })
  });
  
  eachLi.forEach(li => {
    li.addEventListener('drag', function(e) {
      let hoverTarget = document.elementFromPoint(e.clientX,e.clientY)
      if (hoverTarget.hasAttribute('draggable') &&hoverTarget !== e.target) {
        console.log('change')
        if (hoverTarget.offsetTop < e.target.offsetTop){
          hoverTarget.insertAdjacentElement('beforebegin', e.target)
        } else {
          hoverTarget.insertAdjacentElement('afterend', e.target)
        }
      }
    })
    })

  addBtn.addEventListener('click', function(){
    let newLi = document.createElement('li')
    newLi.setAttribute('draggable', 'true')
    newLi.innerHTML = `${input.value}<span class="close">x</span>`
    ul.appendChild(newLi)
    input.value = ''
    
    let newClose = newLi.querySelector('.close')
    newLi.addEventListener('click', function(){
      this.classList.toggle('checked')
    })
    
    newClose.addEventListener('click', function(){
      this.parentNode.remove(newClose.parentNode)
    })
    
  })  

})