import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const[step, setStep] = useState(1);
  const[isOpen,setIsopen]=useState(true);
  function handlePrevious(){
  if(step>1)setStep((step)=>step-1);
  }
  function handleNext(){
if(step<3)setStep(step+1);
  }
  return( 
  <> 
    <button  className="close" onClick={()=>setIsopen(!isOpen)}>&times;</button>
       {isOpen && ( <div className="steps">
      <div className="numbers">
      <div className={step>=1?'active':""}>1</div>
      <div  className={step>=2?'active':""}>2</div>
      <div  className={step>=3?'active':""}>3</div>      
      </div>
      <p className="message">step{step}: {messages[step-1]}</p>
      
      <div className="buttons">
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>
      </div>
      </div>)}
   </>
);
}
