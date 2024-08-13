import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDIce'
import Rules from './Rules'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'

const GamePlay = () => {

  const[showRules,setShowRules]=useState(false);
  const [score,setScore]=useState(0);

  const [selectedNumber,setSelectedNumber]=useState();
  const[currentDice,setCurrentDice]=useState(1);

  const[error,setError]=useState("");

  const generateRandomNumber=(min,max)=>{
    // console.log(Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min);
    
};
const roleDice=()=>{
  if(!selectedNumber) {
    setError("You have not selected any number");
    return;
  };
  // setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    

    if(selectedNumber===randomNumber){
      setScore(prev=>prev+randomNumber)
    }else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined); // ro delect a number 
    
}

const resetScore=()=>{
  setScore(0);
}

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}/>
        </div>
        <RoleDice currentDice={currentDice}
        roleDice={roleDice}
        />

        <div>
          <div className="btns">
            <OutlineButton
            
            onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=>setShowRules((prev)=>!prev)} >{showRules?"Hide":"Show"} Rules</Button>
          </div>
        </div>

        {showRules && <Rules/>}
       
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.main`

padding-top: 50px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
  margin-top:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 220px; */
  align-items: center;
  gap:15px
}
`;