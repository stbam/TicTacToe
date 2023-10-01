
const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']; //['0', '0', '0', '0', '0', '0', '0', '0', '0'];
  const x=  document.querySelectorAll('.square');  
    x.forEach((element,i)=>{
        const uniqueId=i+1;
        element.id=uniqueId;
    });
  //  console.log(x[8].innerHTML)
  
  let playerXscore=0;
  let playerOscore=0;

   

    // Return an object with a method to get the gameboard
    return {
        setPlayerXscore:function(score){
            playerXscore=score;
      },
        setPlayerOscore:function(score){
              playerOscore=score;
        },
        getGameboard: function () {
            return gameboard;
        },
        getSquares:function(){
            return x;
        },
        getPlayerXscore:function(){
            return playerXscore;
        },
        getPlayerOscore:function(){
            return playerOscore;
        }


    };
})();

const displayController= (()=>{

    let button_reset=document.getElementById("reset");
    button_reset.onclick=()=>{
        reset();
        alert("resetted");
    }



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
let playerwinner;
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
        if(x[2]==='X'&& x[4]==='X'&& x[6]==='X'){
            counterX++;
        }   
        else if(x[2]==='O'&& x[4]==='O'&& x[6]==='O'){
            counterY++;
        }
        if (x[0] === 'X' && x[4] === 'X' && x[8] === 'X') {
            counterX++;
        }
        else if (x[0] === 'O' && x[4] === 'O' && x[8] === 'O'){
            counterY++;
        }   
        if (counterX === 1) {
            playerwinner ='X';
            reset();
            winner(playerwinner);
           // alert("Player X wins!");       
        } 
        else if(counterY===1){
            playerwinner='O';
            reset();
            winner(playerwinner);
           // alert("Player Y wins!")      
        } 
});

const winner=(playerwinner)=>{
    if(playerwinner=='X'){
        let score=Gameboard.getPlayerXscore();
      //  alert(score);
        score++;
        Gameboard.setPlayerXscore(score);
        let updateScore=document.getElementById('player-X');
        updateScore.innerHTML=score;
    }
    else{
        let score=Gameboard.getPlayerOscore();
        score++;
        Gameboard.setPlayerOscore(score);
        let updateScore= document.getElementById('player-O')
        updateScore.innerHTML=score;
       // alert(score);
    }

    display=document.getElementById('displayWinner');
    display.innerHTML="Player "+playerwinner;
}

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