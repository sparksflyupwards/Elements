import React, { useEffect, useState } from "react";
import "./App.css";
import { QuestionCard } from "./questionCard/questionCard";
import { NextUIProvider } from "@nextui-org/react";
import man1 from "./images/man1.jpg"
import man2 from "./images/man2.jpg";
import woman1 from "./images/woman1.jpg";
import {useRef} from 'react';
import questions, { Question } from "./questions/questions" 
function App() {

  const questionsArray = [0, 1, 2, 3,4,5,6];
  const [questionOpen, setQuestionOpen] = useState(questionsArray.map((q,indx)=> indx==0))
  const questionCardRef: any = useRef([]);

  questionCardRef.current = questionsArray.map(
    (ref, index) =>   questionCardRef.current[index] = React.createRef()
  )
   
  
  const nextQuestion = (moveFromIndex: number) => {
    if(moveFromIndex< (questionsArray.length - 1)){
      const ref = questionCardRef.current[moveFromIndex + 1];
      ref.current.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
      //TODO: find a way to write this more expressively
      setQuestionOpen(questionOpen.map((q,indx)=>indx==moveFromIndex+1))
    }
  };

  return (
    <NextUIProvider>
      <div className="App">
        {questions.map((question: Question, index: number)=>{
          return (
          <>
              <div onClick={()=>setQuestionOpen(questionOpen.map((question,indx)=>indx==index))} style={{ marginBottom: "40px" }} ref={questionCardRef.current[index]}>
              <QuestionCard
                questionLabel={question.prompt}
                questionOptions={question.options}
                questionAssets={question.assets}
                index={index}
                nextQuestion={nextQuestion}
                isOpen={questionOpen[index]}
               
              />
            
            </div>
          </>)
        })
        }
        {/* {questionsArray.map((option, index) => {
          const questionRef = questionCardRef[index]
          return (
            <div onClick={()=>setQuestionOpen(questionOpen.map((q,indx)=>indx==index))} style={{ marginBottom: "40px" }} ref={questionCardRef.current[index]}>
              <QuestionCard
                questionLabel={
                  "How would you describe these people’s emotional state?"
                }
                questionOptions={["confused", "perplexed", "irritated", "lost"]}
                questionImages={[man1, woman1, man2]}
                index={index}
                nextQuestion={nextQuestion}
                isOpen={questionOpen[index]}
               
              />
            
            </div>
          );
        })}
      */}

      </div>
    </NextUIProvider>
  );
}

export default App;
