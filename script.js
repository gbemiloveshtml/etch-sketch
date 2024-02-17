//user input for page size
let userInput = prompt(" Type in the number of squares per side ")


//create div that includes all divs
const mainDiv = document.createElement('div')
mainDiv.setAttribute('id',"main")
document.body.appendChild(mainDiv)


//create layout of page
const createPage = ()=>{
    for(let i =0;i<16;i++){
       const rowDiv = document.createElement('div');
        rowDiv.setAttribute('id','row');
        mainDiv.appendChild(rowDiv);

        for(let j=0; j<16;j++){
          const columnDiv = document.createElement('div');
           columnDiv.setAttribute('id','column');
           rowDiv.appendChild(columnDiv);
           columnDiv.addEventListener('mouseover',function(){
            columnDiv.style.backgroundColor='pink'
           })
            
        }
    }
    
};
createPage()

//create hover effect
