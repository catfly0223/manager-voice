"use client"

import { Search, Menu, User, LogOut } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { colors } from "../styles/colors"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"

// Mock data for demonstration purposes.  Replace with your actual data fetching mechanism.
const mockReviews = [
  { companyName: "Company A" },
  { companyName: "Company B" },
  { companyName: "Company C" },
  { companyName: "Company A" }, // Duplicate for testing Set functionality
  { companyName: "Company D" },
]

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold" style={{ color: colors.base01 }}>
              ManagerVoice
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
            style={{ color: colors.base01 }}
          >
            <Search className="h-4 w-4" />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                style={{ color: colors.base01 }}
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle style={{ color: colors.base01 }}>メニュー</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link
                  href="/mypage"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-accent"
                  style={{ color: colors.base01 }}
                >
                  <User className="h-4 w-4" />
                  マイページ
                </Link>
                <button
                  onClick={() => console.log("ログアウト")}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-accent"
                  style={{ color: colors.base01 }}
                >
                  <LogOut className="h-4 w-4" />
                  ログアウト
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="会社名で検索..." />
          <CommandList>
            <CommandEmpty>結果が見つかりません</CommandEmpty>
            <CommandGroup heading="会社">
              {Array.from(new Set(mockReviews.map((review) => review.companyName))).map((companyName) => (
                <CommandItem
                  key={companyName}
                  onSelect={() => {
                    setSearchOpen(false)
                    window.location.href = `/companies?q=${encodeURIComponent(companyName)}`
                  }}
                >
                  {companyName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </header>
  )
}

