import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import { quizData, QUIZ_TIME_LIMIT } from "@/data/quizData";
import { toast } from "sonner";

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const unanswered = answers.filter((a) => a === null).length;
    
    if (unanswered > 0) {
      toast.error(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Please complete all questions.`);
      return;
    }

    setIsSubmitting(true);
    
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === quizData[index].correctAnswer ? 1 : 0);
    }, 0);

    localStorage.setItem("quizScore", score.toString());
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem("quizTotal", quizData.length.toString());
    
    setTimeout(() => {
      navigate("/result");
    }, 500);
  };

  const handleTimeUp = () => {
    toast.error("Time's up! Submitting your quiz...");
    
    const score = answers.reduce((acc, answer, index) => {
      if (answer === null) return acc;
      return acc + (answer === quizData[index].correctAnswer ? 1 : 0);
    }, 0);

    localStorage.setItem("quizScore", score.toString());
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem("quizTotal", quizData.length.toString());
    
    setTimeout(() => {
      navigate("/result");
    }, 1000);
  };

  const answeredCount = answers.filter((a) => a !== null).length;
  const isLastQuestion = currentQuestion === quizData.length - 1;

  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 w-full">
            <ProgressBar current={currentQuestion + 1} total={quizData.length} />
          </div>
          <Timer
            initialTime={QUIZ_TIME_LIMIT}
            onTimeUp={handleTimeUp}
            isPaused={isSubmitting}
          />
        </div>

        <QuestionCard
          question={quizData[currentQuestion]}
          selectedOption={answers[currentQuestion]}
          onSelectOption={handleSelectOption}
        />

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {answeredCount} of {quizData.length} answered
          </div>

          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              size="lg"
              className="w-full sm:w-auto bg-gradient-secondary hover:shadow-glow transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
