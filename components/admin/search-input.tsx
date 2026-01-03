"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface SearchInputProps {
  placeholder?: string
  className?: string
  onSearch?: (query: string) => void
}

export function SearchInput({ placeholder = "Search...", className = "", onSearch }: SearchInputProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch?.(e.target.value)
  }

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
      <Input placeholder={placeholder} value={query} onChange={handleChange} className="pl-9 border-[#E5E7EB] w-full" />
    </div>
  )
}
