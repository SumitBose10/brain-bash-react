import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Clock, Award, CheckCircle } from "lucide-react";
import { quizData, QUIZ_TIME_LIMIT } from "@/data/quizData";

const StartPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "10 Questions",
      description: "Test your React knowledge"
    },
    {
      icon: Clock,
      title: "10 Minutes",
      description: "Timed challenge"
    },
    {
      icon: Award,
      title: "Instant Results",
      description: "Get your score immediately"
    },
    {
      icon: CheckCircle,
      title: "Multiple Choice",
      description: "Select the best answer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
            <Brain className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            React Quiz Challenge
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of React fundamentals and see how well you understand the concepts!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-medium mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                1
              </span>
              <span>Read each question carefully and select the best answer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                2
              </span>
              <span>You have {QUIZ_TIME_LIMIT / 60} minutes to complete all {quizData.length} questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                3
              </span>
              <span>You can navigate between questions using the Next and Previous buttons</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                4
              </span>
              <span>Click Submit when you're ready to see your results</span>
            </li>
          </ul>
        </Card>

        <div className="text-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Button
            onClick={() => navigate("/quiz")}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
