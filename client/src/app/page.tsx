"use client"

import { Stack } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { push } = useRouter()
  useEffect(() => {
    push("/home")
  }, [])

  return <Stack width="100vw"></Stack>
}
