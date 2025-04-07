import Sidebar from "@/components/dashboard/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ScrollArea className="max-h-screen w-full">{children}</ScrollArea>
    </div>
  );
};

export default Layout;
