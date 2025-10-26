# Interactive Learning System

A modern learning platform built with Astro and Tailwind CSS for interactive educational content.

## Features

- **Duolingo-Style Learning**: One question per page with instant feedback
- **Multiple Question Types**: 
  - Multiple Choice (MCQ)
  - True/False
  - Fill-in-the-Blank with answer bank
- **Gamification**: 
  - Points system (XP)
  - Lives/Hearts (3 attempts)
  - Progress tracking
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Dynamic Content**: Questions stored in JSON files for easy editing
- **Two Main Topics**: Big Data and Connectionist AI
- **Easy to Extend**: Add new topics by creating JSON files and pages

## Project Structure

```
interactive-learning-system/
├── src/
│   ├── data/                    # Question data files (JSON)
│   │   ├── big-data-questions.json
│   │   └── connectionist-ai-questions.json
│   ├── pages/                   # Astro pages (routes)
│   │   ├── index.astro         # Homepage with topic selection
│   │   ├── big-data.astro      # Big Data learning page
│   │   └── connectionist-ai.astro # Connectionist AI learning page
│   └── styles/
│       └── global.css           # Tailwind CSS imports
├── public/                      # Static assets
└── package.json
```

## Question Data Format

Questions are stored in JSON files located in `src/data/`. Each file follows this structure:

```json
{
  "topic": "Topic Name",
  "sections": [
    {
      "section": "Section Title",
      "questions": [
        {
          "id": "unique-id",
          "type": "multiple-choice",
          "question": "Your question text?",
          "options": ["Option 1", "Option 2", "Option 3"],
          "correct": 0
        },
        {
          "id": "unique-id",
          "type": "true-false",
          "question": "True or False statement?",
          "correct": true
        },
        {
          "id": "unique-id",
          "type": "fill-in",
          "question": "Complete the sentence with _________.",
          "correct": "answer"
        }
      ]
    }
  ]
}
```

### Question Types

- **multiple-choice**: Question with multiple options and a correct answer index
- **true-false**: Boolean question (True/False)
- **fill-in-bank**: Fill-in-the-blank with words selected from an answer bank

Each question type supports custom points (default: 10 points per question).

## Development

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see the homepage.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Quiz Flow

Each quiz follows a Duolingo-style format:

1. **One Question at a Time**: Each question is displayed on its own page
2. **Progress Bar**: Visual progress indicator at the top
3. **Lives System**: 3 hearts (lives) - lose one for each incorrect answer
4. **Point System**: Gain XP for correct answers based on question difficulty
5. **Instant Feedback**: 
   - Correct answers: Green checkmark with points awarded
   - Incorrect answers: Red X with option to continue
6. **Completion**: Summary page showing final score

## Adding New Topics

1. Create a new JSON file in `src/data/` with your questions
2. Create a new page in `src/pages/` (e.g., `new-topic.astro`) 
3. Copy the structure from `big-data.astro` or `connectionist-ai.astro`
4. Update the homepage (`src/pages/index.astro`) to add a new topic box

## Tech Stack

- **Astro**: Web framework for content-driven websites
- **Tailwind CSS**: Utility-first CSS framework
- **JSON**: Data format for questions

## License

MIT
