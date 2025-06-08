import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { QuestionForm } from "@/components/QuestionForm";
import { ActiveQuestions } from "@/components/ActiveQuestions";
import { SessionStats } from "@/components/SessionStats";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100 text-gray-900">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Live Session Dashboard
                  </h1>
                  <p className="text-sm text-gray-600">
                    Blockchain Technology
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800 border border-green-200 px-3 py-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Session Active
                </Badge>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    Sunday, June 08 2025
                  </p>
                  <p className="text-xs text-gray-600">
                    2:30 PM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 p-6 space-y-8 overflow-auto">
            {/* Session Statistics */}
            <SessionStats />
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Question Creation Form */}
              <div className="space-y-6">
                <QuestionForm />
              </div>
              
              {/* Active Questions Panel */}
              <div className="space-y-6">
                <ActiveQuestions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;