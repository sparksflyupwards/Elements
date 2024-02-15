import { UserAnswer } from "./App";

//TODO: refactor to make extensible by seperating empathy, humility, simplicity
export type PersonalityDimension = {
  self: number;
  other: number;
  minScore: number;
  maxScore: number;
};

export type UserPersonalityDimension = {
  focus: string | null;
  score: string | null;
};

export type QuizResult = {
  Empathy: UserPersonalityDimension;
  Simplicity: UserPersonalityDimension;
  Humility: UserPersonalityDimension;
};

export const calculatePersonality = (userAnswers: UserAnswer): QuizResult => {
  const HighValue = 2;
  const LowValue = 1;

  const EmpathyQuestions = 5;
  const SimplicityQuestions = 5;
  const HumilityQuestions = 5;

  const Empathy: PersonalityDimension = {
    self: 0,
    other: 0,
    maxScore: HighValue * EmpathyQuestions,
    minScore: LowValue * EmpathyQuestions,
  };
  const Simplicity: PersonalityDimension = {
    self: 0,
    other: 0,
    maxScore: HighValue * SimplicityQuestions,
    minScore: LowValue * SimplicityQuestions,
  };
  const Humility: PersonalityDimension = {
    self: 0,
    other: 0,
    maxScore: HighValue * HumilityQuestions,
    minScore: LowValue * HumilityQuestions,
  };

  const PersonalityDimensions = {
    Empathy: Empathy,
    Simplicity: Simplicity,
    Humility: Humility,
  };

  const UserEmpathy: UserPersonalityDimension = { focus: null, score: null };
  const UserSimplicity: UserPersonalityDimension = { focus: null, score: null };
  const UserHumility: UserPersonalityDimension = { focus: null, score: null };

  // Count self and other scores
  Object.values(userAnswers).forEach((answer, index) => {
    if (index < 5) {
      switch (answer) {
        case "a":
          Empathy["self"] += LowValue;
          break;
        case "b":
          Empathy["other"] += LowValue;
          break;
        case "c":
          Empathy["self"] += HighValue;
          break;
        case "d":
          Empathy["other"] += HighValue;
          break;
      }
    } else if (index < 10) {
      switch (answer) {
        case "a":
          Simplicity["self"] += LowValue;
          break;
        case "b":
          Simplicity["other"] += LowValue;
          break;
        case "c":
          Simplicity["self"] += HighValue;
          break;
        case "d":
          Simplicity["other"] += HighValue;
          break;
      }
    } else if (index < 15) {
      switch (answer) {
        case "a":
          Humility["self"] += LowValue;
          break;
        case "b":
          Humility["other"] += LowValue;
          break;
        case "c":
          Humility["self"] += HighValue;
          break;
        case "d":
          Humility["other"] += HighValue;
          break;
      }
    }
  });

  // Calculate focus if self > other
  Object.keys(PersonalityDimensions).forEach((personalityDimension) => {
    //@ts-ignore
    const PersonalityDimensionObj = PersonalityDimensions[personalityDimension];
    let focus = "";
    if (PersonalityDimensionObj.self > PersonalityDimensionObj.other) {
      focus = "self";
    } else {
      focus = "other";
    }

    switch (personalityDimension) {
      case "Empathy":
        UserEmpathy.focus = focus;
        break;
      case "Simplicity":
        UserSimplicity.focus = focus;
        break;
      case "Humility":
        UserHumility.focus = focus;
        break;
    }
  });

  // Determine if each score is High Medium or Low
  // If user gets bottom 33% of possible high score value is Low
  // Consecutive distributions 34-66% 67%+ get Medium and High

  // Calculates value of score based
  const CalculateScore = (
    score: number,
    minScore: number,
    maxScore: number
  ) => {
    let diff = maxScore - minScore;
    //subtract diff from score because we want to look at ratio of max possible score
    score -= diff;
    let scoreRatio = score / diff;
    if (scoreRatio < 0.33) {
      return "LOW";
    } else if (scoreRatio < 0.66) {
      return "MEDIUM";
    } else {
      return "HIGH";
    }
  };

  // Calculate score values for each personality dimension
  Object.keys(PersonalityDimensions).forEach((personalityDimension) => {
    //@ts-ignore
    const PersonalityDimensionObj = PersonalityDimensions[personalityDimension];

    let score = 0;
    score = PersonalityDimensionObj.self + PersonalityDimensionObj.other;

    switch (personalityDimension) {
      case "Empathy":
        UserEmpathy.score = CalculateScore(
          score,
          Empathy.minScore,
          Empathy.maxScore
        );
        break;
      case "Simplicity":
        UserSimplicity.score = CalculateScore(
          score,
          Simplicity.minScore,
          Simplicity.maxScore
        );
        break;
      case "Humility":
        UserHumility.score = CalculateScore(
          score,
          Humility.minScore,
          Humility.maxScore
        );
        break;
    }
  });

  return {
    Empathy: UserEmpathy,
    Simplicity: UserSimplicity,
    Humility: UserHumility,
  };
};
