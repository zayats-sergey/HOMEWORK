const res = document.querySelector('.item');
const ceil = document.querySelector('.reset');
const ceil = document.querySelector('.reset');
function work() {
  if (this.innerText === 'нажали') {
    ceil.innerText = 'нажать';
    res.className = 'item';
    return;
  } else {
    ceil.innerText = 'нажали';
    res.className = 'item1';
    return;
  }
  }

  
  ceil.addEventListener("click", work);

  document.body.innerHTML = '<h1>Hello</h1>'