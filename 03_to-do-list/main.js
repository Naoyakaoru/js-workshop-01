document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')
  const eachLi = document.querySelectorAll('li')
  const eachClose = document.querySelectorAll('.close')
  const input = document.querySelector('#input')
  const addBtn = document.querySelector('#addBtn')
  
  for(i = 0 ; i < eachLi.length ; i++){
    eachLi[i].addEventListener('click', function(){
    this.classList.toggle('checked')
  })
  }
  
  eachClose.forEach(btn => {
    btn.addEventListener('click', function(){
      this.parentNode.remove(btn.parentNode)
    })
  });
  
  addBtn.addEventListener('click', function(){
    let newLi = document.createElement('li')
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