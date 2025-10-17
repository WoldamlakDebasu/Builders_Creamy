"use client"
import { useEffect } from "react"

export function HtmlClientFix() {
  useEffect(() => {
    // Remove any client-only classes/attributes that cause hydration mismatch
    document.documentElement.classList.remove("js-focus-visible")
    document.documentElement.removeAttribute("data-js-focus-visible")
    // If you need to add client-only logic, do it here
  }, [])
  return null
}
