import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, CheckCircle, XCircle, Home } from "lucide-react";
import { Question } from "@/data/quizData";

const ResultPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");
    const savedAnswers = localStorage.getItem("quizAnswers");
    const savedQuestions = localStorage.getItem("quizQuestions");

    if (!savedScore || !savedTotal || !savedQuestions) {
      navigate("/");
      return;
    }

    setScore(parseInt(savedScore));
    setTotal(parseInt(savedTotal));
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, [navigate]);

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🎉", color: "text-success" };
    if (percentage >= 70) return { message: "Great Job! 👏", color: "text-primary" };
    if (percentage >= 50) return { message: "Good Effort! 💪", color: "text-accent" };
    return { message: "Keep Practicing! 📚", color: "text-secondary" };
  };

  const performance = getPerformanceMessage();

  const handleRetake = () => {
    localStorage.removeItem("quizScore");
    localStorage.removeItem("quizTotal");
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizQuestions");
    navigate("/quiz");
  };

  const handleHome = () => {
    localStorage.removeItem("quizScore");
    localStorage.removeItem("quizTotal");
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizQuestions");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 shadow-glow animate-slide-up text-center">
          <div className="inline-block p-6 bg-primary/10 rounded-full mb-6 animate-pulse-glow">
            <Trophy className="w-20 h-20 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quiz Completed!
          </h1>

          <p className={`text-2xl md:text-3xl font-semibold mb-8 ${performance.color}`}>
            {performance.message}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">{score}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
            </Card>
            
            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <div className="text-4xl font-bold text-secondary mb-2">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </Card>
            
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">{total}</div>
              <div className="text-sm text-muted-foreground">Total Questions</div>
            </Card>
          </div>

          <div className="mb-8 p-6 bg-muted/50 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Review Your Answers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {answers.map((answer, index) => {
                const isCorrect = answer === questions[index]?.correctAnswer;
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg flex items-center justify-center gap-2 font-semibold ${
                      isCorrect
                        ? "bg-success/10 text-success border-2 border-success/30"
                        : "bg-destructive/10 text-destructive border-2 border-destructive/30"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    Q{index + 1}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRetake}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Quiz
            </Button>
            <Button
              onClick={handleHome}
              variant="outline"
              size="lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>

        <Card className="mt-8 p-6 shadow-soft animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Performance Breakdown</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Correct Answers</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="font-semibold text-success">{percentage}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Incorrect Answers</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-destructive rounded-full transition-all duration-1000"
                    style={{ width: `${100 - percentage}%` }}
                  />
                </div>
                <span className="font-semibold text-destructive">{100 - percentage}%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResultPage;
