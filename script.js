//create main div that contains all divs
const mainDiv = document.createElement('div')
mainDiv.setAttribute('id','main')
document.body.appendChild(mainDiv)

//create 16 x 16 divs using js ONLY
const createPage = () => {
//create button to ask user how many squares 
    const userBtn = document.createElement('button')
    userBtn.classList.add('btn')
    userBtn.textContent='Click Me To Paint'
    document.body.appendChild(userBtn)

    
    

    //adds event listener to button and makes maximum square 100
    userBtn.addEventListener('click', event =>{
    let userSquare = prompt('How many squares do you want?')
    if(userSquare>100){
        alert("Squares cannot be more than 100, please try again")
        userSquare = prompt('How many squares do you want?')
    } 

    //gets rid of div border showing before button is clicked
    mainDiv.style.border='solid','black'

   
    //creates number of sqaures that user asks for
    let numberOfSquares = userSquare
    for(let i =0; i<numberOfSquares; i++){
    const rowDiv = document.createElement('div')
    console.log('added')
    rowDiv.classList.add('row');
    //creates grid
    for(let j =0;j<numberOfSquares;j++){
        const columnDiv = document.createElement('div')
        columnDiv.classList.add('column')
        rowDiv.appendChild(columnDiv)
        columnDiv.addEventListener('mouseover', event =>{
            columnDiv.style.backgroundColor='pink'
         
          
        })
        //removes previous grid once button is clicked
        userBtn.addEventListener('click', event =>{
            columnDiv.remove()
            rowDiv.remove()
           
    })
    }
    

    mainDiv.appendChild(rowDiv)

}
   

}) 
    
}


createPage()

//MVP finished on 3/19/24