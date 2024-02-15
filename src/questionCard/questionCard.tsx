import React, { useEffect, useState } from "react";
import { Button, Card, Radio, Text, Image, Collapse } from "@nextui-org/react";
import {
  Asset,
  AssetType,
  Question,
  QuestionOptions,
} from "../questions/questions";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";


interface IQuestionCardProps {
  questionLabel: string;
  questionOptions: QuestionOptions;
  questionAssets?: Asset[];
  index: number;
  isOpen: boolean;
  nextQuestion: (moveFromIndex: number) => void;
  setAnswer: (question: number, answer: string) => void;
}

const answerValues = ["a", "b", "c", "d"];

export const QuestionCard = (props: IQuestionCardProps) => {

  const handleNextQuestion = (value: string) => {
    console.log("attemptint to handle question", value)
    props.setAnswer(props.index, value)
    props.nextQuestion(props.index);
  };
  return (
    <Card isHoverable variant="bordered" css={{ margin: "auto", mw: "800px" }}>
      <Card.Body>
        <div style={{ margin: "auto", marginTop: " 10px" }}>
          <Collapse.Group accordion={false}>
            <Collapse
              title={props.questionLabel}
              expanded={props.isOpen}
              disabled={!props.isOpen}
            >
              <div>
                {props.questionAssets &&
                  props.questionAssets.map((asset: Asset, index) => {
                    switch (asset.type) {
                      case AssetType.Image:
                        return (
                          <Image
                            width={320}
                            height={180}
                            src={asset.source ? asset.source : asset.path}
                            alt="Default Image"
                            objectFit="cover"
                          />
                        );

                      case AssetType.Sound:
                        return (
                          <ReactAudioPlayer
                            src={asset.path ? asset.path : ""}
                            autoPlay={false}
                            controls={true}
                          />
                        );

                      case AssetType.Text:
                        return <></>;

                      case AssetType.Video:
                        return (
                          <ReactPlayer
                            url={asset.path ? asset.path : ""}
                            controls={true}
                          />
                        );
                    }
                  })}
              </div>
              <div style={{ marginLeft: "15%", marginTop: "30px" }}>
                <Radio.Group
                  orientation="horizontal"
                  defaultValue="primary"
                  onChange={handleNextQuestion}
                >
                  <Radio
      
                    color="primary"
                    style={{ margin: "auto" }}
                    size="xs"
                    value="a"
                  >
                    {props.questionOptions.optionA}
                  </Radio>

                  <Radio

                    color="primary"
                    style={{ margin: "auto" }}
                    size="xs"
                    value="b"
                  >
                    {props.questionOptions.optionB}
                  </Radio>

                  <Radio
                    
                    color="primary"
                    style={{ margin: "auto" }}
                    size="xs"
                    value="c"
                  >
                    {props.questionOptions.optionC}
                  </Radio>
                  <Radio
                   
                    color="primary"
                    style={{ margin: "auto" }}
                    size="xs"
                    value="d"
                  >
                    {props.questionOptions.optionD}
                  </Radio>
                </Radio.Group>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </Card.Body>
    </Card>
  );
};
