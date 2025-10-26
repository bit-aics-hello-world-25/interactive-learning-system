# How to Add New Sections

This guide explains how to create a new quiz section for your learning system.

## Step 1: Create Question Data File

Create a new JSON file in `src/data/` with your questions.

**Example:** `src/data/my-new-section-questions.json`

```json
{
  "topic": "My New Section Title",
  "sections": [
    {
      "section": "Section Name",
      "questions": [
        {
          "id": "unique-id",
          "type": "multiple-choice",
          "question": "Your question?",
          "options": ["Option A", "Option B", "Option C"],
          "correct": 0,
          "points": 15
        },
        {
          "id": "unique-id-2",
          "type": "multiple-answer",
          "question": "Select all that apply:",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correct": [0, 2],
          "points": 20
        },
        {
          "id": "unique-id-3",
          "type": "true-false",
          "question": "This statement is true.",
          "correct": true,
          "points": 10
        },
        {
          "id": "unique-id-4",
          "type": "fill-in-bank",
          "question": "Complete the sentence: _________ is important.",
          "blanks": [
            {
              "position": 1,
              "correct": "Learning"
            }
          ],
          "bank": [
            "Learning",
            "Sleeping",
            "Eating",
            "Playing"
          ],
          "points": 20
        }
      ]
    }
  ]
}
```

### Question Types

1. **multiple-choice**: Single correct answer
   - `"correct"`: Index of correct option (0-based)

2. **multiple-answer**: Multiple correct answers
   - `"correct"`: Array of indices (e.g., `[0, 2, 4]`)

3. **true-false**: True or False
   - `"correct"`: `true` or `false`

4. **fill-in-bank**: Drag and drop from word bank
   - `"blanks"`: Array with correct answers
   - `"bank"`: Available words (user can click to select)

## Step 2: Create Quiz Page

Copy the existing quiz file and modify it.

**Copy:**
```bash
cp src/pages/big-data-quiz.astro src/pages/my-new-section-quiz.astro
```

**Edit the frontmatter:**

Change:
```javascript
import bigDataQuestions from '../data/big-data-questions.json';
```

To:
```javascript
import myQuestions from '../data/my-new-section-questions.json';
```

Update the data import:
```javascript
const allQuestions = myQuestions.sections.flatMap(section => section.questions);
const quizDataJson = JSON.stringify({
    topic: 'My Section Title',
    questions: allQuestions
});
```

Update the title:
```javascript
<title>{myQuestions.topic} - Interactive Learning System</title>
```

## Step 3: Update Chapter Selector

Edit `src/pages/big-data/chapters.astro` (or create new chapter file) and add:

```javascript
{
    id: 'my-section',
    title: 'My Section Title',
    description: 'Brief description',
    icon: '🎯',  // Choose an emoji
    link: '/my-new-section-quiz'
}
```

## Complete Example

Here's a real example we just created:

**File:** `src/data/big-data-ecosystem-questions.json`
```json
{
  "topic": "The Big Data Ecosystem & Lifecycle",
  "sections": [
    {
      "section": "2.1: Understanding the Big Data Ecosystem",
      "questions": [
        {
          "id": "bd-ec1",
          "type": "multiple-choice",
          "question": "Which is NOT a component?",
          "options": ["Collection", "Storage", "Processing", "Magic"],
          "correct": 3,
          "points": 15
        }
      ]
    }
  ]
}
```

**File:** `src/pages/big-data-ecosystem-quiz.astro`
- Import ecosystem questions instead of intro questions
- Everything else stays the same!

**Chapter link:** `/big-data-ecosystem-quiz`

## Tips

- Use unique `id` values for each question
- Points can vary by difficulty (10, 15, 20, 25)
- Use emojis in the chapter selector for visual appeal
- Keep question descriptions concise
- Test each question type works correctly

## That's It!

Your new section is now ready to use! Just follow these three steps for each new section you want to add.


