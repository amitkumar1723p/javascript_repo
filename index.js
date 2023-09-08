//  ----------------Task One ------------------------

const div = document.getElementById('myDiv')
const btn = document.getElementById('changeColorButton')

btn.addEventListener('click', () => {
    div.style = 'color:red'
    div.innerText = "Now Color is Red"
})


// ----------------------Task Two --------------------------



const nextbutton = document.getElementById('next')
const previousbutton = document.getElementById('prev')
const Images = document.getElementsByClassName('img')
const ul = document.querySelector('ul')
const addSoftDrink = document.getElementById('addSoftDrink')


let i = 0
Images[i].style = 'display:block'

//  Next Image 
nextbutton.addEventListener('click', () => {


    const arr = Array.from(Images)

    if (i < arr.length - 1) {
        ++i
    }

    arr.forEach((element, index) => {
        if (i == index) {
            element.style = "display:block"
        } else {
            element.style = 'display:none'

        }
    })










})


previousbutton.addEventListener('click', () => {




    const arr = Array.from(Images)

    if (i > 0) {
        --i
    }

    arr.forEach((element, index) => {
        if (i == index) {
            element.style = "display:block"
        } else {
            element.style = 'display:none'

        }

    })



})



//  Task Three 

addSoftDrink.addEventListener('click', () => {
    let li = document.createElement("li")
    li.innerText = 'soft drinks'
    ul.appendChild(li)
})






