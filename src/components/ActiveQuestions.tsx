import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  title: string;
  type: "multiple-choice" | "open-ended";
  status: "live" | "closed" | "draft";
  responses: number;
  totalStudents: number;
  timeRemaining?: number;
}

const mockQuestions: Question[] = [
  {
    id: "1",
    title: "What is the capital of France?",
    type: "multiple-choice",
    status: "live",
    responses: 23,
    totalStudents: 30,
    timeRemaining: 45,
  },
  {
    id: "2",
    title: "Explain the concept of photosynthesis in your own words",
    type: "open-ended",
    status: "closed",
    responses: 28,
    totalStudents: 30,
  },
  {
    id: "3",
    title: "Which programming language is best for web development?",
    type: "multiple-choice",
    status: "draft",
    responses: 0,
    totalStudents: 30,
  },
];

const getStatusColor = (status: Question["status"]) => {
  switch (status) {
    case "live":
      return "bg-green-100 text-green-800 border-green-200";
    case "closed":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "draft":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: Question["status"]) => {
  switch (status) {
    case "live":
      return "🟢";
    case "closed":
      return "⭕";
    case "draft":
      return "📝";
    default:
      return "❓";
  }
};

export function ActiveQuestions() {
  return (
    <Card className="shadow-md border bg-white text-gray-900">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold">Question Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {mockQuestions.map((question) => (
            <div
              key={question.id}
              className="p-4 rounded-lg border bg-gray-50 hover:shadow transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={`text-xs font-medium ${getStatusColor(question.status)}`}
                    >
                      {getStatusIcon(question.status)}{" "}
                      {question.status.charAt(0).toUpperCase() + question.status.slice(1)}
                    </Badge>
                    <Badge variant="secondary" className="text-xs text-gray-800">
                      {question.type === "multiple-choice" ? "MCQ" : "Open"}
                    </Badge>
                    {question.timeRemaining && (
                      <Badge className="text-xs bg-red-100 text-red-600 border border-red-200">
                        ⏱ {question.timeRemaining}s
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-semibold mb-2 truncate">{question.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      {question.responses}/{question.totalStudents} responses
                    </span>
                    <div className="flex-1 max-w-32">
                      <Progress
                        value={(question.responses / question.totalStudents) * 100}
                        className="h-1.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  {question.status === "live" && (
                    <span className="inline-flex items-center text-xs px-3 py-1 rounded bg-red-50 text-red-600 border border-red-200 font-medium select-none">
                      View Results
                    </span>
                  )}
                  {question.status === "draft" && (
                    <span className="inline-flex items-center text-xs px-3 py-1 rounded bg-blue-100 text-blue-800 border border-blue-200 font-medium select-none">
                      Launch
                    </span>
                  )}
                  {question.status === "closed" && (
                    <span className="inline-flex items-center text-xs px-3 py-1 rounded bg-gray-100 text-gray-800 border border-gray-300 font-medium select-none">
                      Archive
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {mockQuestions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="font-semibold mb-2">No questions yet</h3>
              <p className="text-gray-500">Create your first question to get started!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}