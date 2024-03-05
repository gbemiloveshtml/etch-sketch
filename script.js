//create main div that contains all divs
const mainDiv = document.createElement('div')
mainDiv.setAttribute('id','main')
document.body.appendChild(mainDiv)

//create 16 x 16 divs using js ONLY
const createPage = () => {
//create button to ask user how many squares 
    const userBtn = document.createElement('button')
    userBtn.classList.add('btn')
    document.body.appendChild(userBtn)
    

    //adds event listener to button and makes maximum square 100
    userBtn.addEventListener('click', event =>{
    let userSquare = prompt('How many squares do you want?')
    if(userSquare>100){
        alert("Squares cannot be more than 100, please try again")
        userSquare = prompt('How many squares do you want?')
    } 

   
    //creates number of sqaures that user asks for(basiclly the page)currently figuring out how to make amount of square asked for create a new set of grid
    let numberOfSquares = userSquare
    for(let i =0; i<numberOfSquares; i++){
    const rowDiv = document.createElement('div')
    console.log('added')
    rowDiv.classList.add('row');
    
    for(let j =0;j<numberOfSquares;j++){
        const columnDiv = document.createElement('div')
        columnDiv.classList.add('column')
        rowDiv.appendChild(columnDiv)
        columnDiv.addEventListener('mouseover', event =>{
            columnDiv.style.backgroundColor='pink'
         
          
        })
    }

    mainDiv.appendChild(rowDiv)

}
}) 
}


createPage()
