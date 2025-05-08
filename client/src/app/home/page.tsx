import { Button, Stack } from "@mui/material"

export default function Home() {
  return (
    <Stack width="100vw" gap="24px">
      <Stack direction="row" justifyContent="space-between">
        Header
        <Stack>로그인</Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly">
        <Button variant="outlined">신창역 -&gt; 학교</Button>
        <Button variant="outlined">학교 -&gt; 신창역</Button>
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
