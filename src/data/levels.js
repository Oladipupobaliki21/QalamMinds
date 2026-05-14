const levels = [
  {
    level: "Beginner",
    lessons: [
      {
        id: "lesson1",
        title: "Lesson 1: Basic Words",
        level: "Beginner",
        cards: [
          { id: 1, arabic: "كتاب", meaning: "Book", pronunciation: "Kitab" },
          { id: 2, arabic: "قلم", meaning: "Pen", pronunciation: "Qalam" },
          { id: 3, arabic: "مدرسة", meaning: "School", pronunciation: "Madrasa" },
          { id: 4, arabic: "بيت", meaning: "House", pronunciation: "Bayt" },
        ],
      },
      {
        id: "lesson2",
        title: "Lesson 2: Places",
        level: "Beginner",
        cards: [
          { id: 3, arabic: "مدرسة", meaning: "School", pronunciation: "Madrasa" },
          { id: 5, arabic: "مستشفى", meaning: "Hospital", pronunciation: "Mustashfa" },
          { id: 6, arabic: "سوق", meaning: "Market", pronunciation: "Souq" },
          { id: 7, arabic: "مكتبة", meaning: "Library", pronunciation: "Maktaba" },
        ],
      },
      {
        id: "lesson3",
        title: "Lesson 3: Food",
        level: "Beginner",
        cards: [
          { id: 8, arabic: "ماء", meaning: "Water", pronunciation: "Ma'" },
          { id: 9, arabic: "خبز", meaning: "Bread", pronunciation: "Khubz" },
          { id: 10, arabic: "فاكهة", meaning: "Fruit", pronunciation: "Fakihah" },
          { id: 11, arabic: "خضار", meaning: "Vegetable", pronunciation: "Khodar" },
        ],
      }
    ],
  },
    
  {
    level: "Intermediate",
    lessons: [
      {
        id: "lesson3",
        title: "Lesson 3: Advanced Words",
        level: "Intermediate",
        cards: [
          { id: 4, arabic: "جامعة", meaning: "University", pronunciation: "Jami'ah" },
          { id: 8, arabic: "مطار", meaning: "Airport", pronunciation: "Matar" },
          { id: 9, arabic: "مطعم", meaning: "Restaurant", pronunciation: "Mat'am" },
          { id: 10, arabic: "فندق", meaning: "Hotel", pronunciation: "Funduq" },
          { id: 11, arabic: "حديقة", meaning: "Park", pronunciation: "Hadiqa" },
        ],
      },
    ],
  },
];

export default levels;