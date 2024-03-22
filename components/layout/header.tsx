import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        
        <div className="hidden lg:block">
          <Link
            href={'/dashboard'}
            // target="_blank"
            className="text-slate-900 font-medium text-xl hover:scale-110 transition-transform duration-300"
          >
            <span className="text-blue-600 font-bold text-3xl mr-1">A</span>
            <span className="text-red-600 font-bold text-3xl mr-1">f</span>
            <span className="text-yellow-600 font-bold text-3xl mr-1">y</span>
            <span className="text-green-600 font-bold text-3xl mr-1">a</span>
            <span className="text-indigo-600 font-bold text-3xl mr-1">M</span>
            <span className="text-purple-600 font-bold text-3xl">e</span>
            <span className="text-md text-gray-600 ml-1">d</span>
          </Link>
        </div>

        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
