# Online Quiz Application

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. Test your knowledge across multiple categories with a clean, user-friendly interface.

![Quiz Application](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)

## 🌟 Features

- **30 Diverse Questions** - Multiple categories including Science, Geography, Technology, History, Mathematics, Art, and Literature
- **Customizable Timer** - Choose your preferred time per question (15s, 30s, 45s, or 60s)
- **Shuffled Questions** - Questions are randomly shuffled for each quiz attempt to ensure fairness
- **Real-time Timer** - Visual countdown timer with color-coded warnings
- **Progress Tracking** - Real-time progress bar showing completion percentage
- **Instant Results** - View your score immediately after completion
- **Best Score Tracking** - Local storage saves your best performance
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI** - Modern, minimal interface with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🎮 How to Use

1. **Start Page** - Select your preferred time duration per question (15s, 30s, 45s, or 60s)
2. **Take the Quiz** - Answer all 30 questions within the time limit
3. **View Results** - See your score and compare it with your best score
4. **Retry** - Take the quiz again to beat your high score!

## 📁 Project Structure

```
src/
├── components/
│   ├── quiz/
│   │   ├── QuestionCard.tsx    # Question display component
│   │   ├── Timer.tsx            # Countdown timer component
│   │   └── ProgressBar.tsx      # Progress tracking component
│   └── ui/                      # Reusable UI components (shadcn/ui)
├── data/
│   └── quizData.ts              # Quiz questions and shuffle logic
├── pages/
│   ├── Start.tsx                # Landing/start page
│   ├── Quiz.tsx                 # Main quiz interface
│   ├── Result.tsx               # Results page
│   └── NotFound.tsx             # 404 page
├── hooks/                       # Custom React hooks
├── lib/
│   └── utils.ts                 # Utility functions
├── App.tsx                      # Main app component with routing
├── index.css                    # Global styles and design tokens
└── main.tsx                     # Application entry point
```

## 🛠️ Technologies Used

- **React 18.3.1** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **TanStack Query** - Data fetching and state management

## 🎨 Design Features

- Custom color scheme with blue/cyan gradient accents
- Semantic design tokens for consistent theming
- Smooth animations and transitions
- Accessible and keyboard-friendly interface
- Dark mode compatible color system

## 📊 Quiz Data Structure

Questions are stored in `src/data/quizData.ts` with the following structure:

```typescript
{
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;  // Index of correct option
  category: string;
}
```

## 🔧 Customization

### Adding More Questions

Edit `src/data/quizData.ts` and add new question objects to the `quizQuestions` array:

```typescript
{
  id: 31,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0,
  category: "YourCategory"
}
```

### Changing Timer Options

Modify the `timerOptions` array in `src/pages/Start.tsx`:

```typescript
const timerOptions = [
  { value: 15, label: "15 sec", description: "Fast pace" },
  { value: 30, label: "30 sec", description: "Standard" },
  // Add more options here
];
```

### Styling

- Global styles: `src/index.css`
- Theme configuration: `tailwind.config.ts`
- Component styles: Tailwind classes in component files

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` directory, ready for deployment.

## 📦 Deployment

### Deploy with Lovable

Simply open your [Lovable Project](https://lovable.dev/projects/09781415-da42-4510-8c37-ef44063545f3) and click on Share → Publish.

### Custom Domain

You can connect a custom domain by navigating to Project → Settings → Domains and clicking Connect Domain.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📝 Code Editing Options

### Use Lovable
Visit the [Lovable Project](https://lovable.dev/projects/09781415-da42-4510-8c37-ef44063545f3) and start prompting. Changes are automatically committed.

### Use Your IDE
Clone this repo and push changes. They will be reflected in Lovable automatically.

### Use GitHub Codespaces
Launch a Codespace from your repository for a cloud-based development environment.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

Created with ❤️ using [Lovable](https://lovable.dev)

## 🔗 Project URL

**Lovable Project**: https://lovable.dev/projects/09781415-da42-4510-8c37-ef44063545f3

---

**Note**: This application stores quiz results in browser's local storage. Clearing browser data will reset your best score.
