let body = document.querySelector('.list') 
let addinput = document.querySelector('.addinput')

let inputs = document.querySelector('.inputs')

let list = document.querySelector('.list')
let count = 0

let Addtask = document.querySelector('.add-task').
addEventListener('click' , (e) => {
    e.preventDefault()




if(addinput.value) {
    count++
list.innerHTML +=`
  <div id='${count}'class="shadow-lg p-3 mb-4 bg-body-tertiary rounded ">
    <div class="d-flex list align-items-center justify-content-between">
   <div class="chek-p d-flex gap-5">
    <div class="check">
        <input type="checkbox">
      </div>
      <samp class="fw-bold fs-5">${addinput.value} </samp>
   </div>
      <div class="btns">


        <button type="button"onclick="deleteItem(${count})"  class="btn btn-danger d-button ">delete</button>
        
      </div>
    </div>
</div>
`

}else{
    let validation = document.createElement('p')
    inputs.appendChild(validation)
    alert('buyerga narsani nomini yizishingiz kerak')
}


addinput.value = ""
})


function deleteItem(num) {
  let deleteItem = document.getElementById(num)
  console.log(deleteItem);
  list.removeChild(deleteItem)
}


