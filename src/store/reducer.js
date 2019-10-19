
const initialState = {
    //player1:0,
    //player2:0
    rolledDice:0,
    playerrolledDice:0,
    currentplayer:1,
    score:0,
    savedScore1:0,
    savedScore2:0,
    player1Disable :false,
    player2Disable : true,
    winner1:false,
    winner2:false,
    disableSave:true,
    classArrow1:'displayVisible colorBlue',
    classArrow2:'displayNone'
};

const reducer = (state=initialState, action) => {
   
    
    const newState = {...state};
    newState.rolledDice=0;
    switch(action.type){
        case 'rolled': 
        newState.disableSave=false;
        newState.rolledDice = Math.floor(Math.random() * Math.floor(6)+1);

        if(newState.rolledDice > 1){

            newState.currentplayer= newState.currentplayer;
            newState.score += newState.rolledDice;
        }else{
            if(newState.currentplayer === 1){
                newState.player1Disable = true;
                newState.player2Disable = false;
                newState.currentplayer=2;
                newState.classArrow1 = 'displayNone';
                newState.classArrow2 = 'displayVisible colorBrown';
            }else{
                newState.player2Disable = true;
                newState.player1Disable = false;
                newState.currentplayer=1;
                newState.classArrow1 = 'displayVisible colorBlue';
                newState.classArrow2 = 'displayNone';
                         
            }
            newState.score=0;
        }
       
        break;
        case 'savemyscore':
        
        if(newState.currentplayer === 1){
            newState.player1Disable = true;
            newState.player2Disable = false;
            newState.currentplayer=2;
            newState.savedScore1 += newState.score;
            newState.classArrow1 = 'displayNone';
            newState.classArrow2 = 'displayVisible colorBrown';
            
        }else{
            newState.player2Disable = true;
            newState.player1Disable = false;
            newState.savedScore2 += newState.score;
            newState.currentplayer=1;
            newState.classArrow1 = 'displayVisible colorBlue';
            newState.classArrow2 = 'displayNone ';
            
        }

        if(newState.savedScore1 >= 30){
            newState.player1Disable = true;
            newState.player2Disable = true;
            newState.winner1=true;
            newState.disableSave=true;
        }
        else if(newState.savedScore2 >= 30){
            newState.player1Disable = true;
            newState.player2Disable = true;
            newState.disableSave=true;
           
                newState.winner2=true;
            
        }
        newState.score=0;
        break;

        case "reset":
        return initialState;
        
        
    }
    
    
    
    

    return newState;
       
};

export default reducer;