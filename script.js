let games = document.querySelector('.games');
let change = true;
let divDatas = Array(9).fill(null);
let count = 0;
let matchData = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]
divDatas.forEach(el=>{
  let div = document.createElement('div')
  
  //click function
  div.addEventListener('click',(e)=>{
    count++
   let index = Array.from(games.children).indexOf(e.target);
   
   if (change) {
      divDatas[index] = '<i class="fa-solid fa-xmark"></i>';
      div.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      change = false
    } else {
      divDatas[index] = '<i class="fa-regular fa-circle"></i>';
      div.innerHTML = '<i class="fa-solid fa-circle"></i>'
      change = true;
    }
    div.style.pointerEvents='none';
    if (count>=5) {
       gameOver()
    }
  })
  //click function
  games.appendChild(div)
})

//game over start;
function gameOver() {
  let matchDrow = divDatas.every(el=>el !== null);
  for (let [x1,x2,x3] of matchData) {
    if ((divDatas[x1] === divDatas[x2]) && (divDatas[x1] === divDatas[x3]) && (divDatas[x1]!==null)) {
      alert('Game Over')
      return;
    }
  }
  if (matchDrow) {
    alert('Match Drow')
    return;
  }
}