const addProduct = () => {
  const li=document.createElement('li')
  const ul=document.querySelector('ul')
  const input= document.querySelector('input')
 const value=input.value
  li.innerText=value
  const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   li.appendChild(checkbox)
  ul.appendChild(li)
  
}


