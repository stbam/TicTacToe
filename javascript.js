
const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']; //['0', '0', '0', '0', '0', '0', '0', '0', '0'];
  const x=  document.querySelectorAll('.square');  
    x.forEach((element,i)=>{
        const uniqueId=i+1;
        element.id=uniqueId;
    });
  //  console.log(x[8].innerHTML)
  
    


    // Return an object with a method to get the gameboard
    return {
     
        getGameboard: function () {
            return gameboard;
        },
        getSquares:function(){
            return x;
        }

    };
})();

const displayController= (()=>{
    let playerone=1;
    let playertwo=0;
    let turn=0;

    const x =Gameboard.getSquares();
    x.forEach((element,index)=>{
        

        element.innerHTML= Gameboard.getGameboard()[index];
        element.addEventListener('click',()=>{
              if(Gameboard.getGameboard()[index]==='X' || Gameboard.getGameboard()[index]==='O'){
                //  console.log(Gameboard.getGameboard()[index]);       
              }
              else{
                // console.log("spot isnt taken");
                 if(turn%2==1){
                     player1(index);
                     turn++;
                //     console.log(turn);
                     gameOver();
                 }
                 else{
                     player2(index);
                     turn++;
               //      console.log(turn);
                     gameOver();
                 }  
              /*   player2(index);
                 gameOver();*/
               }         
          })
    });
})();

const gameOver=(()=>{
   
    let counterX=0;
let counterY=0;

        const x = Gameboard.getGameboard();
       
      
        for (let i = 0; i < 3; i++) {
            if (x[i] === 'X' && x[i + 3] === 'X' && x[i + 6] === 'X' ) {
                counterX++;
            }
           else if(x[i] === 'O' && x[i + 3] === 'O' && x[i + 6] === 'O' ){
                counterY++;
            }
        }
         
        for (let i = 0; i < 9; i += 3) {
            if (x[i] === 'X' && x[i + 1] === 'X' && x[i + 2] === 'X') {
                counterX++;
            }
            else if(x[i] === 'O' && x[i + 1] === 'O' && x[i + 2] === 'O'){
                counterY++;
            }
        }
      //  console.log(counterX)
         
        if (x[0] === 'X' && x[4] === 'X' && x[8] === 'X') {
            counterX++;
        }
        else if (x[0] === 'O' && x[4] === 'O' && x[8] === 'O'){
            counterY++;
        }
        
        if (counterX === 1) {
            reset();
            alert("Player X wins!");

            
        } 
        else if(counterY===1){
            reset();
            alert("Player Y wins!")
            
        } 

});

const reset=()=>{
 square = Gameboard.getGameboard();
 for(let i=0;i<9;i++){
    square[i]=' ';
 }

};
const player1=(index)=>{
    let gameboard = Gameboard.getGameboard();
    gameboard[index]='X';
    updateDisplay();

};

const player2=(index)=>{
 let gameboard = Gameboard.getGameboard();
    gameboard[index]='O';
    updateDisplay();
    
};
const updateDisplay=()=>{
    const x = Gameboard.getSquares();
    x.forEach((element,index)=>{
        element.innerHTML=Gameboard.getGameboard()[index];

    })
}