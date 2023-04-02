import React, { useEffect, useState } from 'react';
import { Button, Card, Radio, Text, Image, Collapse } from '@nextui-org/react';



interface IQuestionCardProps {
    questionLabel: string;
    questionOptions: Array<string> ;
    questionImages: Array<string>;
    index: number;
    isOpen: boolean;
    nextQuestion: (moveFromIndex: number) => void;
}

const answerValues = ['a' , 'b', 'c' , 'd']



export const QuestionCard = (props: IQuestionCardProps)=>{

    const handleNextQuestion = ()=>{
        props.nextQuestion(props.index)
    }
    return (
    <Card isHoverable variant="bordered" css={{margin:'auto', mw: "800px" }}>
        <Card.Body>
  

    <div style={{margin:'auto', marginTop: ' 10px'}}>
   

    {props.questionImages && props.questionImages.length > 2 && 
  <Collapse.Group accordion={false}>
 <Collapse  title={props.questionLabel} expanded={props.isOpen} disabled={!props.isOpen}>
    <div>
        {props.questionImages.map((image, index)=>{
              return (<Image
              width={320}
              height={180}  
              src={props.questionImages[index]}
              alt="Default Image"
              objectFit="cover"
            />)
        })}
    </div>
<div style={{marginLeft:'15%', marginTop: '30px'}}>
<Radio.Group  orientation="horizontal" defaultValue="primary" onChange={()=>handleNextQuestion()}>
        {props.questionOptions.map((question, index) => {
            return (      
          <Radio 
          value={answerValues[index]}
           color="primary"
           style={{margin:'auto'}}
           size="xs">
            {question}
          </Radio>)
            
        })}
</Radio.Group>
</div>

</Collapse>
</Collapse.Group>
    }
    </div>
  
        </Card.Body>
      </Card>
  

    )
}