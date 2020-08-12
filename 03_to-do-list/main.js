document.addEventListener('DOMContentLoaded', function() {
  const eachLi = document.querySelectorAll('li')
  
  for(i = 0 ; i < eachLi.length ; i++){
    eachLi[i].addEventListener('click', function(){
    this.classList.toggle('checked')
  })
  }
  
  
})