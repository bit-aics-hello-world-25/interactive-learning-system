# Project Summary: Interactive Learning System

## Core Idea
This project is a web-based, interactive learning platform designed to make educational content engaging and effective. It is built with Astro and styled with Tailwind CSS, following a modern, component-based architecture. The system is heavily inspired by the Duolingo application, presenting questions one at a time and providing immediate feedback to the user.

## Key Features
- **Duolingo-Style Learning**: The core of the application is its one-question-per-page quiz format, which focuses the user's attention and provides instant feedback on their answers.
- **Gamification**: To motivate users, the system includes gamification elements such as:
    - A points system (XP) for correct answers.
    - A "lives" system where users have a limited number of attempts.
    - A progress bar to visualize advancement through a quiz.
- **Multiple Question Types**: The platform supports a variety of question formats to keep the content interesting, including:
    - Multiple Choice (single answer)
    - Multiple Answer (select all that apply)
    - True/False
    - Fill-in-the-Blank (with a word bank)
- **Dynamic Content**: All quiz questions, topics, and answers are stored in simple JSON files. This separation of content and presentation makes it extremely easy to add new learning modules, edit existing questions, or even change topics entirely without touching the application's code.
- **Expandable Topics**: The system is designed to be easily extendable. Currently, it includes two main topics: "Big Data" and "Connectionist AI". New topics can be added by creating a new JSON file and a corresponding Astro page.
- **Modern Tech Stack**: The project is built with [Astro](https://astro.build/) for fast, content-focused websites and [Tailwind CSS](https://tailwindcss.com/) for a utility-first approach to styling.

## Key Files
- **`astro.config.mjs`**: The main configuration file for the Astro framework.
- **`package.json`**: Defines the project's metadata, dependencies (like Astro and Tailwind CSS), and scripts for running the development server (`dev`), building the project (`build`), and previewing the build (`preview`).
- **`src/data/*.json`**: These JSON files are the heart of the learning system's content. Each file typically represents a topic and contains the questions, options, and correct answers for the quizzes.
    - `big-data-questions.json`
    - `connectionist-ai-questions.json`
- **`src/pages/**/*.astro`**: These files define the pages and routes of the website.
    - **`index.astro`**: The main landing page of the application, where users can select which topic they want to learn about.
    - **`*-quiz.astro`**: These are dynamic pages that render the quizzes. They contain the client-side JavaScript to handle question rendering, user interaction, scoring, and feedback. For example, `big-data-quiz.astro`.
    - **`*/chapters.astro`**: These pages act as a table of contents for a given topic, linking to the different quiz sections.
- **`HOW_TO_ADD_SECTIONS.md`**: A crucial documentation file that provides a step-by-step guide on how to add new sections and quizzes to the learning system. This file is a key resource for content creators and developers.
- **`README.md`**: The primary documentation for the project, offering an overview of its features, structure, and how to get it running locally.
