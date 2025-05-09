import axios from "@axios"

export default function useApi() {
  async function getSubwayList() {
    await axios.post("/subwayData/fetchStationArriveTime", {
      statnNm: "신창",
    })
    return []
  }

  return { getSubwayList }
}
