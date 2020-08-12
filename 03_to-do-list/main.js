document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')
  const eachLi = document.querySelectorAll('li')
  const eachCloseBtn = document.querySelectorAll('.close')
  const input = document.querySelector('#input')
  const addBtn = document.querySelector('#addBtn')
  var drag = {
    current: null,
    yValue: 0,
    place: 0
  }

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
    li.addEventListener('dragstart', function(drag){
      drag.current = drag.target
      
      
      console.log(this.offsetTop)
      console.log(e.pageY)
      console.log(this.clientHeight)
    })

    li.addEventListener('drag', function(e) {
      // this.hidden = true
      console.log(ul.offsetTop)
      console.log(e.pageY)
    })

    li.addEventListener('dragend', function(e){
      console.log('dragend')
      // ul.removeChild(this)
      let place = Math.floor((e.pageY - ul.offsetTop) / 40)
      console.log(place)
      
    })
  });

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