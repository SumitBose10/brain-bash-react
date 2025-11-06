import { Question } from "@/data/quizData";
import { Card } from "@/components/ui/card";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  showFeedback?: boolean;
}

const QuestionCard = ({
  question,
  selectedOption,
  onSelectOption,
  showFeedback = false,
}: QuestionCardProps) => {
  const getOptionClassName = (index: number) => {
    const baseClasses =
      "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 cursor-pointer font-medium";
    
    if (!showFeedback) {
      if (selectedOption === index) {
        return `${baseClasses} border-primary bg-primary/10 shadow-medium transform scale-[1.02]`;
      }
      return `${baseClasses} border-border bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-soft`;
    }

    // Show feedback
    if (index === question.correctAnswer) {
      return `${baseClasses} border-success bg-success/10 text-success-foreground shadow-medium`;
    }
    if (selectedOption === index && index !== question.correctAnswer) {
      return `${baseClasses} border-destructive bg-destructive/10 text-destructive-foreground shadow-medium`;
    }
    return `${baseClasses} border-border bg-muted/50 opacity-60`;
  };

  return (
    <Card className="p-8 shadow-medium animate-slide-up">
      <h2 className="text-2xl font-bold mb-8 text-foreground leading-relaxed">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onSelectOption(index)}
            disabled={showFeedback}
            className={getOptionClassName(index)}
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {showFeedback && question.explanation && (
        <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg animate-fade-in">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
