"use client"

import { Button, Stack } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Navigator() {
  const { push } = useRouter()
  return (
    <Stack width="100vw" height="60px">
      <Stack width="100%" height="60px"></Stack>
      <Stack
        width="100%"
        height="60px"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        position="fixed"
      >
        <Button variant="contained" onClick={() => push("/home")}>
          홈
        </Button>
        <Button variant="contained" onClick={() => push("/home")}>
          대화방
        </Button>
        <Button variant="contained" onClick={() => push("/setting")}>
          설정ㄴ
        </Button>
      </Stack>
    </Stack>
  )
}
