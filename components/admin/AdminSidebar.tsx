"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  FileText, 
  Settings, 
  LogOut 
} from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Bestellungen",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Benutzer",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Produkte",
    href: "/admin/products",
    icon: FileText,
  },
  {
    title: "Einstellungen",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <span className="">LeckereBissen Admin</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarNavItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    pathname === item.href ? "bg-gray-200 dark:bg-gray-800" : "transparent",
                    "my-1"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full" onClick={() => console.log("Logout")}>
            <LogOut className="mr-2 h-4 w-4" />
            Abmelden
          </Button>
        </div>
      </div>
    </div>
  )
}