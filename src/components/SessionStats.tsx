import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Active Students",
    value: "28",
    subtitle: "of 30 enrolled",
    icon: "👥",
    trend: "+2 from last session",
    color: "text-indigo-800",
    bgColor: "bg-indigo-100"
  },
  {
    title: "Questions Asked",
    value: "12",
    subtitle: "this session",
    icon: "❓",
    trend: "+4 from average",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    title: "Engagement Rate",
    value: "94%",
    subtitle: "student participation",
    icon: "📊",
    trend: "+8% improvement",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Session Duration",
    value: "45m",
    subtitle: "remaining time",
    icon: "⏰",
    trend: "of 90 minutes",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export function SessionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="shadow-soft border-0 bg-white hover:shadow-md transition-all duration-200 animate-fade-in"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center text-lg`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {stat.title}
                </p>
              </div>
            </div>
            <div className="space-y-1 pl-1">
              <p className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.trend}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}