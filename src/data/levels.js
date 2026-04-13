const levels = [
  {
    level: "Beginner",
    lessons: [
      {
        id: "lesson1",
        title: "Lesson 1: Basic Words",
        cards: [
          { id: 1, arabic: "كتاب", meaning: "Book", pronunciation: "Kitab" },
          { id: 2, arabic: "قلم", meaning: "Pen", pronunciation: "Qalam" },
        ],
      },
      {
        id: "lesson2",
        title: "Lesson 2: Places",
        cards: [
          { id: 3, arabic: "مدرسة", meaning: "School", pronunciation: "Madrasa" },
        ],
      },
    ],
  },
  {
    level: "Intermediate",
    lessons: [
      {
        id: "lesson3",
        title: "Lesson 3: Advanced Words",
        cards: [
          { id: 4, arabic: "جامعة", meaning: "University", pronunciation: "Jami'ah" },
        ],
      },
    ],
  },
];

export default levels;