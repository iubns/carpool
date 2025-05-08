import { DataSource } from "typeorm"
import { Ex } from "../entity/ex"

const dataSource = new DataSource(require("../../ormconfig.json"))

export const exDatabase = dataSource.getRepository(Ex)

export default dataSource
