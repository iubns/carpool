import { DataSource } from "typeorm"
import { SubwayData } from "../entity/subwayData"

const dataSource = new DataSource(require("../../ormconfig.json"))

export const subwayDataDatabase = dataSource.getRepository(SubwayData)

export default dataSource
