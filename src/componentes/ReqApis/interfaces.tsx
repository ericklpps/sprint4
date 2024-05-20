
export interface users {
    id: string;
    name: string;
    lastName: string;
    email: string;
    birthday: string;
    password: string;
    isColorBlind: boolean;
    typeColorBlind?: string;
  }
  
  export interface FeedbackAccessibility {
    userId: string;
    feedbackType: string;
    accessibilityText: string;
    grade: number;
    optionsDaltonismo: string;
  }
  