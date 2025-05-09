import axios from "axios"
import express, { Router } from "express"
import dotenv from "dotenv"
import { SubwayData } from "../entity/subwayData"
import { subwayDataDatabase } from "../model/dataSource"

const env = dotenv.config().parsed || {}

const router: Router = express.Router()

/*
STATION_CD: 전철역 코드 문자값
WEEK_TAG: 평일, 주말 구분 문자값 (1: 평일, 2: 토요일, 3: 일요일/공휴일)
INOUT_TAG: 상행, 하행 구분 문자값 (1: 상행/내선, 2: 하행/외선)
*/
router.post("/fetchTimeTable", async (req, res) => {
  const key = env.SEOUL_KEY
  /* 역 코드 목록
    https://data.seoul.go.kr/dataList/OA-121/S/1/datasetView.do
  */

  const { STATION_CD, WEEK_TAG, INOUT_TAG } = req.body
  //Todo: validate STATION_CD, WEEK_TAG, INOUT_TAG
  const TIME_TABLE_API = `http://openAPI.seoul.go.kr:8088/${key}/json/SearchSTNTimeTableByIDService/1/1000/${STATION_CD}/${WEEK_TAG}/${INOUT_TAG}/`

  const { data, status } = await axios.get(TIME_TABLE_API)
  if (status !== 200) {
    return res.status(status).json({ error: "Failed to fetch data" })
  }
  if (status === 200) {
    console.log(data)
  }
})

/*
statnNm: 전철역 이름
*/
router.post("/fetchStationArriveTime", async (req, res) => {
  const key = env.SEOUL_KEY

  const { statnNm } = req.body
  const STATION_ARRIVE_API = `http://swopenapi.seoul.go.kr/api/subway/${key}/json/realtimeStationArrival/1/1000/${statnNm}`
  console.log(STATION_ARRIVE_API)
  const { data, status } = await axios.get(STATION_ARRIVE_API)
  if (status !== 200) {
    return res.status(status).json({ error: "Failed to fetch data" })
  }
  if (status === 200) {
    const subwayDataList = data.realtimeArrivalList as Array<SubwayData>

    const savePromises = subwayDataList.map(async (subwayData) => {
      const bewSubwayData = await subwayDataDatabase.create(subwayData)
      return subwayDataDatabase.save(bewSubwayData)
    })

    await Promise.all(savePromises)
    return res.status(200).json(subwayDataList)
  }
})

export default router
