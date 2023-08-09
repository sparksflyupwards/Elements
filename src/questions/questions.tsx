export enum AssetType {
  Image,
  Sound,
  Video,
  Text,
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
  assets?: Asset[];
  options: QuestionOptions;
}

const questions: Question[] = [
  {
    //Question 1
    prompt: "How would you describe this person’s emotional state?",
    type: QuestionType.Image,
    assets: [
      { type: AssetType.Image, path: "/Q1/1.jpg" },
      { type: AssetType.Image, path: "/Q1/2.jpg"},
      { type: AssetType.Image, path: "/Q1/3.jpg"},
      { type: AssetType.Image, path: "/Q1/4.jpg" },
    ],
    options: {
      optionA: "worried",
      optionB: "anxious",
      optionC: "scared",
      optionD: "terrified",
    },
  },
  {
    //Question 2
    prompt: "How would you describe this person’s emotional state?",
    type: QuestionType.Image,
    assets: [
        { type: AssetType.Image, path: "/Q2/1.jpg" },
        { type: AssetType.Image, path: "/Q2/2.jpg"},
        { type: AssetType.Image, path: "/Q2/3.jpg"},
        { type: AssetType.Image, path: "/Q2/4.jpg" },
    ],
    options: {
      optionA: "confused",
      optionB: "perplexed",
      optionC: "irritated",
      optionD: "lost",
    },
  },
  {
    //Question 3
    prompt:
      "Imagine these painting are about the painter’s relationship to the world. What do you think the artist is telling the viewer about the people?",
    type: QuestionType.Image,
    assets: [
        { type: AssetType.Image, path: "/Q3/1.jpg" },
        { type: AssetType.Image, path: "/Q3/2.jpg"},
        { type: AssetType.Image, path: "/Q3/3.jpg"},
        { type: AssetType.Image, path: "/Q3/4.jpg" },
    ],
    options: {
      optionA: "He likes people and the world.",
      optionB: "He thinks people and the world are interesting.",
      optionC: "He feels confused and irritated by people and the world.",
      optionD: "He is afraid of people and the world.",
    },
  },
  {
    //Question 4
    prompt:
      "Imagine these are self-portraits. What do you think the artists are telling the viewer about themselves?",
    type: QuestionType.Image,
    assets: [
        { type: AssetType.Image, path: "/Q4/1.jpg" },
        { type: AssetType.Image, path: "/Q4/2.jpg"},
        { type: AssetType.Image, path: "/Q4/3.jpg"},
        { type: AssetType.Image, path: "/Q4/4.jpg" },
    ],

    options: {
      optionA: "He feels like he is at peace with himself.",
      optionB: "He likes to paint pictures of himself.",
      optionC: "He feels alone, misunderstood and alienated.",
      optionD: "He feels afraid of himself.",
    },
  },
  {
    //Question 5
    prompt:
      "What do you think the photographer is telling the viewer about the people? ",
      type: QuestionType.Image,
      assets: [
        { type: AssetType.Image, path: "/Q5/1.jpg" },
        { type: AssetType.Image, path: "/Q5/2.jpg"},
        { type: AssetType.Image, path: "/Q5/3.jpg"},
        { type: AssetType.Image, path: "/Q5/4.jpg" },
      ],

    options: {
      optionA: "He likes people and the world.",
      optionB: "He thinks people and the world are interesting.",
      optionC: "He feels confused and irritated by people and the world.",
      optionD: "He is afraid of people and the world.",
    },
  },
  {
    //Question 6
    prompt:
      "How do the sounds make you feel?",
    type: QuestionType.Sound,
    assets: [
      { type: AssetType.Sound, path: "/Q6/1.mp4" },
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
  {
    //Question 7
    prompt:
      "How does this sound make you feel?",
    type: QuestionType.Sound,
    assets: [
      { type: AssetType.Sound, path: "/Q7/1.mp4" },
      { type: AssetType.Sound, path: "/Q7/2.mp4" },
      { type: AssetType.Sound, path: "/Q7/3.mp4" },
      { type: AssetType.Sound, path: "/Q7/4.mp4" },
    ],
    options: {
      optionA: "It does not bother me.",
      optionB: "It makes me feel a little uneasy.",
      optionC: "It makes me feel anxious .",
      optionD: "I could not listen until the end because it made me feel scared.",
    },
  },
  {
    //Question 8
    prompt:
      "How do these videos make you feel?",
    type: QuestionType.Video,
    assets: [
      { type: AssetType.Video, path: "/Q8/1.mp4" },
      { type: AssetType.Video, path: "/Q8/2.mp4" },
      { type: AssetType.Video, path: "/Q8/3.mp4" },
      { type: AssetType.Video, path: "/Q8/4.mp4" },
    ],

    options: {
      optionA: "bored.",
      optionB: "curious.",
      optionC: "confused.",
      optionD: "anxious.",
    },
  },
  {
    //Question 9
    prompt:
      "How do these videos make you feel?",
    type: QuestionType.Video,
    assets: [
        { type: AssetType.Video, path: "/Q9/1.mp4" },
        { type: AssetType.Video, path: "/Q9/2.mp4" },
        { type: AssetType.Video, path: "/Q9/3.mp4" },
        { type: AssetType.Video, path: "/Q9/4.mp4" },
    ],

    options: {
      optionA: "bored.",
      optionB: "curious.",
      optionC: "confused.",
      optionD: "anxious.",
    },
  },

];
export default questions;
