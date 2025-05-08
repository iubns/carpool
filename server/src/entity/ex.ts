import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Ex {
  @PrimaryGeneratedColumn()
  id: number
}
