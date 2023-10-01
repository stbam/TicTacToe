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
                    console.log(turn);
                }
                else{
                    player2(index);
                    turn++;
                    console.log(turn);
                }  
              }        
          })
    });
})();

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