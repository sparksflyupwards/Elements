import React, { useEffect, useState } from "react";
import "./App.css";
import { QuestionCard } from "./questionCard/questionCard";
import { NextUIProvider } from "@nextui-org/react";
import { useRef } from "react";
import questions, { Question } from "./questions/questions";
import { calculatePersonality, QuizResult } from "./CalculatePersonality";

export type UserAnswer = {
  [key: number]: string | null;
};


function App() {

  

  const questionsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [questionOpen, setQuestionOpen] = useState(
    questionsArray.map((q, indx) => indx == 0)
  );

  const [userAnswers, setUserAnswers]  = useState<UserAnswer>(()=>{
    
    const answers: UserAnswer = {};
    questionsArray.forEach(q => answers[q] = null)
    return answers;
  })

  const [quizFinished, setQuizFinished] = useState(false)
  const [quizResults, setQuizResults] = useState<QuizResult | Object>({})


  const setAnswer = (question: number, answer: string) => {
    let total = 1;
    Object.values(userAnswers).map(answer => answer != null ? total += 1: null);

    console.log(total, questionsArray.length)

    setUserAnswers((prevAnswers: UserAnswer) => {
      const updatedAnswers = { ...prevAnswers };
      updatedAnswers[question] = answer;
      return updatedAnswers;
    });

    if (total == questionsArray.length){
      setQuizFinished(true)
    }

    
  }

  const questionCardRef: any = useRef([]);

  questionCardRef.current = questionsArray.map(
    (ref, index) => (questionCardRef.current[index] = React.createRef())
  );


  const nextQuestion = (moveFromIndex: number) => {
    if (moveFromIndex < questionsArray.length - 1) {
      const ref = questionCardRef.current[moveFromIndex + 1];
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      //TODO: find a way to write this more expressively
      setQuestionOpen(questionOpen.map((q: any, indx: number) => indx == moveFromIndex + 1));
    }
  };

  useEffect(()=>{
  }, [userAnswers])

  useEffect(()=> {
    if (quizFinished){

      setQuizResults(calculatePersonality(userAnswers))
    }
  }, [userAnswers])
  if (quizFinished){
    return (
      <>
      {JSON.stringify(quizResults)}
      </>
      
    )
  }
  return (
    <NextUIProvider>
      <div className="App">


        {questions.map((question: Question, index: number) => {
          return (
            <>
              <div
                onClick={() =>
                  setQuestionOpen(
                    questionOpen.map((question: any, indx: number) => indx == index)
                  )
                }
                style={{ marginBottom: "40px" }}
                ref={questionCardRef.current[index]}
              >
                <QuestionCard
                  questionLabel={question.prompt}
                  questionOptions={question.options}
                  questionAssets={question.assets}
                  index={index}
                  nextQuestion={nextQuestion}
                  isOpen={questionOpen[index]}
                  setAnswer={setAnswer}
                />
              </div>
            </>
          );
        })}
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
