import React, { useEffect, useState } from "react";
import { Button, Card, Radio, Text, Image, Collapse } from "@nextui-org/react";
import { Asset, AssetType, Question, QuestionOptions } from "../questions/questions";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'

interface IQuestionCardProps {
  questionLabel: string;
  questionOptions: QuestionOptions;
  questionAssets: Asset[];
  index: number;
  isOpen: boolean;
  nextQuestion: (moveFromIndex: number) => void;
}

const answerValues = ["a", "b", "c", "d"];

export const QuestionCard = (props: IQuestionCardProps) => {
    console.log(props)
  const handleNextQuestion = () => {
    props.nextQuestion(props.index);
  };
  return (
    <Card isHoverable variant="bordered" css={{ margin: "auto", mw: "800px" }}>
      <Card.Body>
        <div style={{ margin: "auto", marginTop: " 10px" }}>
          {props.questionAssets && props.questionAssets.length > 2 && (
            <Collapse.Group accordion={false}>
              <Collapse
                title={props.questionLabel}
                expanded={props.isOpen}
                disabled={!props.isOpen}
              >
                <div>
                  {props.questionAssets.map((asset: Asset, index) => {
                    console.log(asset)
                    let Asset;
               
                    switch(asset.type){
                        
                            case AssetType.Image:
                                return(<Image
                                    width={320}
                                    height={180}
                                    src={asset.source}
                                    alt="Default Image"
                                    objectFit="cover"
                                  />)
                                
                              
                            case AssetType.Sound:
                                return(<ReactAudioPlayer
                                    src={asset.path? asset.path : ""}
                                    autoPlay={false}
                                    controls={true}
                                    />)
                            case AssetType.Text:
                                return(<></>)

                            case AssetType.Video:
                                return(<ReactPlayer url={asset.path? asset.path : ""} />)
                        }
                      
                    return Asset;
                  })}
                </div>
                <div style={{ marginLeft: "15%", marginTop: "30px" }}>
                  <Radio.Group
                    orientation="horizontal"
                    defaultValue="primary"
                    onChange={() => handleNextQuestion()}
                  >
                    <Radio
                      value={props.questionOptions.optionA}
                      color="primary"
                      style={{ margin: "auto" }}
                      size="xs"
                    >
                      {props.questionOptions.optionA}
                    </Radio>

                    <Radio
                      value={props.questionOptions.optionB}
                      color="primary"
                      style={{ margin: "auto" }}
                      size="xs"
                    >
                      {props.questionOptions.optionB}
                    </Radio>

                    <Radio
                      value={props.questionOptions.optionC}
                      color="primary"
                      style={{ margin: "auto" }}
                      size="xs"
                    >
                      {props.questionOptions.optionC}
                    </Radio>
                    <Radio
                      value={props.questionOptions.optionD}
                      color="primary"
                      style={{ margin: "auto" }}
                      size="xs"
                    >
                      {props.questionOptions.optionD}
                    </Radio>
                  </Radio.Group>
                </div>
              </Collapse>
            </Collapse.Group>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
