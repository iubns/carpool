"use client"

import { Button, Stack } from "@mui/material"
import useApi from "./useApi"
import { useEffect } from "react"

export default function Home() {
  const { getSubwayList } = useApi()

  useEffect(() => {
    getSubwayList()
  }, [])
  return (
    <Stack width="100vw" gap="24px">
      <Stack margin="16px" textAlign="center" gap="12px">
        이동 방향을 선택해 주세요!
        <Stack direction="row" justifyContent="space-evenly">
          <Button variant="outlined">신창역 -&gt; 학교</Button>
          <Button variant="outlined">학교 -&gt; 신창역</Button>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Stack>차편 선택</Stack>
        {[0, 1, 2].map((_, index) => (
          <Button key={index} variant="outlined">
            {index + 1}차
          </Button>
        ))}
      </Stack>
      <Stack>공지사항</Stack>
    </Stack>
  )
}
