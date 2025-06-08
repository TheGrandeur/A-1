import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

type QuestionType = "multiple-choice" | "open-ended";

interface Option {
  id: string;
  text: string;
}

export function QuestionForm() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionType, setQuestionType] = useState<QuestionType>("multiple-choice");
  const [options, setOptions] = useState<Option[]>([
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);
  const [isLaunching, setIsLaunching] = useState(false);

  const { toast } = useToast();

  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, { id: Date.now().toString(), text: "" }]);
    }
  };

  const removeOption = (id: string) => {
    if (options.length > 2) {
      setOptions(options.filter(option => option.id !== id));
    }
  };

  const updateOption = (id: string, text: string) => {
    setOptions(options.map(option =>
      option.id === id ? { ...option, text } : option
    ));
  };

  const handleLaunchQuestion = async () => {
    if (!questionTitle.trim()) {
      toast({
        title: "Question title required",
        description: "Please enter a question title before launching.",
        variant: "destructive",
      });
      return;
    }

    if (questionType === "multiple-choice") {
      const validOptions = options.filter(option => option.text.trim());
      if (validOptions.length < 2) {
        toast({
          title: "Insufficient options",
          description: "Please provide at least 2 options for multiple choice questions.",
          variant: "destructive",
        });
        return;
      }
    }

    setIsLaunching(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Question launched successfully!",
      description: "Students can now see and respond to your question.",
    });

    setIsLaunching(false);
    setQuestionTitle("");
    setOptions([{ id: "1", text: "" }, { id: "2", text: "" }]);
  };

  return (
    <Card className="shadow-md border border-gray-300 bg-white rounded-md">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Create New Question
          </CardTitle>
          <Badge
            variant="outline"
            className="bg-indigo-200 text-indigo-900 border-indigo-300"
          >
            Live Session
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Question Title */}
        <div className="space-y-2">
          <Label htmlFor="question-title" className="text-sm font-semibold text-gray-900">
            Question Title
          </Label>
          <Input
            id="question-title"
            placeholder="Enter your question here..."
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            className="text-base py-3 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        {/* Question Type */}
        <div className="space-y-4">
          <Label className="text-sm font-semibold text-gray-900">Question Type</Label>
          <RadioGroup
            value={questionType}
            onValueChange={(value) => setQuestionType(value as QuestionType)}
            className="flex gap-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="multiple-choice"
                id="multiple-choice"
                className="border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
              <Label htmlFor="multiple-choice" className="font-medium cursor-pointer text-gray-900">
                Multiple Choice
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="open-ended"
                id="open-ended"
                className="border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
              <Label htmlFor="open-ended" className="font-medium cursor-pointer text-gray-900">
                Open-ended
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Multiple Choice Options */}
        {questionType === "multiple-choice" && (
          <div className="space-y-4 animate-fade-in">
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-gray-900">
                  Answer Options
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addOption}
                  disabled={options.length >= 4}
                  className="text-indigo-900 hover:bg-indigo-100 hover:text-indigo-800 hover:border-indigo-300"
                >
                  + Add Option
                </Button>
              </div>

              <div className="space-y-3">
                {options.map((option, index) => (
                  <div key={option.id} className="flex items-center gap-3 animate-slide-in">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold select-none">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <Input
                      placeholder={`Option ${String.fromCharCode(65 + index)}`}
                      value={option.text}
                      onChange={(e) => updateOption(option.id, e.target.value)}
                      className="flex-1 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      aria-label={`Option ${String.fromCharCode(65 + index)}`}
                    />
                    {options.length > 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOption(option.id)}
                        className="text-gray-500 hover:text-red-600 p-2"
                        aria-label={`Remove option ${String.fromCharCode(65 + index)}`}
                      >
                        ×
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Separator />

        <Button
          onClick={handleLaunchQuestion}
          disabled={isLaunching}
          className="w-full bg-blue-400 hover:bg-blue-600 text-white font-semibold py-3 text-base shadow-md hover:shadow-lg transition transform hover:scale-105"
          aria-live="polite"
          aria-busy={isLaunching}
        >
          {isLaunching ? (
            <div className="flex items-center gap-2 justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Launching Question...
            </div>
          ) : (
            "🚀 Launch Question"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}