import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { title: "Dashboard", icon: "🏠", isActive: false },
  { title: "Questions", icon: "❓", isActive: false },
  { title: "Analytics", icon: "📊", isActive: false },
  { title: "Students", icon: "👥", isActive: false },
  { title: "Settings", icon: "⚙️", isActive: false },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-white text-black">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            E
          </div>
          <div>
            <h1 className="text-xl font-bold text-black">EduNova</h1>
            <p className="text-sm text-gray-500">Presenter Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`group relative rounded-lg transition-all duration-200 ${
                      item.isActive
                        ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-500"
                        : "hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-2.5 w-full truncate"
                      aria-current={item.isActive ? "page" : undefined}
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span
                        className={`font-medium truncate ${
                          item.isActive ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </span>

                      {item.isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-l-full opacity-50" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/MARIO-01.svg" />
            <AvatarFallback className="bg-indigo-600 text-white font-semibold">DR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-black truncate">Vaibhav Gupta</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}