export enum AssetType {
  Image,
  Sound,
  Video,
}
export enum QuestionType {
  Image,
  Sound,
  Video,
  Text,
}
export interface Asset {
  type: AssetType;
  source?: any;
  path?: string;
}

export interface QuestionOptions {
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
}
export interface Question {
  prompt: string;
  type: QuestionType;
  assets: Asset[];
  options: QuestionOptions;
}

const questions: Question[] = [
  {
    prompt: "How would you describe this person’s emotional state?",
    type: QuestionType.Image,
    assets: [
      { type: AssetType.Image, source: anxious },
      { type: AssetType.Image, source: scared },
      { type: AssetType.Image, source: terrified },
      { type: AssetType.Image, source: worried },
    ],
    options: {
      optionA: "worried",
      optionB: "anxious",
      optionC: "scared",
      optionD: "terrified",
    },
  },
  {
    prompt: "How would you describe this person’s emotional state?",
    type: QuestionType.Image,
    assets: [
      { type: AssetType.Image, source: Q2_OPTION_ONE },
      { type: AssetType.Image, source: Q2_OPTION_TWO },
      { type: AssetType.Image, source: Q2_OPTION_THREE },
      { type: AssetType.Image, source: Q2_OPTION_FOUR },
    ],
    options: {
      optionA: "confused",
      optionB: "perplexed",
      optionC: "irritated",
      optionD: "lost",
    },
  },
  {
    prompt:
      "Imagine these painting are about the painter’s relationship to the world. What do you think the artist is telling the viewer about the people?",
    type: QuestionType.Image,
    assets: [
      { type: AssetType.Image, source: Q3_OPTION_ONE },
      { type: AssetType.Image, source: Q3_OPTION_TWO },
      { type: AssetType.Image, source: Q3_OPTION_THREE },
      { type: AssetType.Image, source: Q3_OPTION_FOUR },
    ],
    options: {
      optionA: "He likes people and the world.",
      optionB: "He thinks people and the world are interesting.",
      optionC: "He feels confused and irritated by people and the world.",
      optionD: "He is afraid of people and the world.",
    },
  },

  {
    prompt:
      "Imagine these are self-portraits. What do you think the artists are telling the viewer about themselves?",
    type: QuestionType.Image,
    assets: [
      { type: AssetType.Image, source: Q4_OPTION_ONE },
      { type: AssetType.Image, source: Q4_OPTION_TWO },
      { type: AssetType.Image, source: Q4_OPTION_THREE },
      { type: AssetType.Image, source: Q4_OPTION_FOUR },
    ],

    options: {
      optionA: "He feels like he is at peace with himself.",
      optionB: "He likes to paint pictures of himself.",
      optionC: "He feels alone, misunderstood and alienated.",
      optionD: "He feels afraid of himself.",
    },
  },

  {
    //Question 6
    prompt:
      "How do the sounds make you feel?",
    type: QuestionType.Sound,
    assets: [
      { type: AssetType.Sound, path: "/Q6/1.mp3" },
      { type: AssetType.Sound, path: "/Q6/2.mp4" },
      { type: AssetType.Sound, path: "/Q6/3.mp4" },
      { type: AssetType.Sound, path: "/Q6/4.mp4" },
    ],

    options: {
      optionA: "It does not bother me.",
      optionB: "It makes me feel a little uneasy.",
      optionC: "It makes me feel anxious .",
      optionD: "I could not listen until the end because it made me feel scared.",
    },
  },
];
export default questions;

//Question1
import anxious from "../images/Q1/anxious.jpg";
import scared from "../images/Q1/scared.jpg";
import terrified from "../images/Q1/terrified.jpg";
import worried from "../images/Q1/worried.jpg";

//Question2
import Q2_OPTION_ONE from "../images/Q2/irritated.png";
import Q2_OPTION_TWO from "../images/Q2/confused.jpg";
import Q2_OPTION_THREE from "../images/Q2/lost.jpg";
import Q2_OPTION_FOUR from "../images/Q2/perplexed.jpg";

//Question3
import Q3_OPTION_ONE from "../images/Q3/1.jpg";
import Q3_OPTION_TWO from "../images/Q3/2.jpg";
import Q3_OPTION_THREE from "../images/Q3/3.jpg";
import Q3_OPTION_FOUR from "../images/Q3/4.jpg";

//Question4
import Q4_OPTION_ONE from "../images/Q4/1.jpg";
import Q4_OPTION_TWO from "../images/Q4/2.jpg";
import Q4_OPTION_THREE from "../images/Q4/3.jpg";
import Q4_OPTION_FOUR from "../images/Q4/4.jpg";


// //Question6
// import Q6_OPTION_ONE from "/Q6/1.mp3";
// // import Q6_OPTION_TWO from "../images/Q6/2.mp4";
// // import Q6_OPTION_THREE from "../images/Q6/3.mp4";
// // import Q6_OPTION_FOUR from "../images/Q6/4.mp4";
