import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
         <TooltipProvider>
    <SidebarProvider>
      <div className="flex h-screen w-full">
  <AppSidebar />

  <main className="flex-1 overflow-auto p-4">
    <SidebarTrigger />
    {children}
  </main>
</div>
    </SidebarProvider>
    </TooltipProvider>
      </body>
    </html>
   
  )
}