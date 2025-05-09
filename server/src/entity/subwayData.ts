import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SubwayData {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: "지하철호선ID" })
  subwayId: string

  @Column({ comment: "상하행선구분" })
  updnLine: string

  @Column({ comment: "도착지방면" })
  trainLineNm: string

  @Column({ comment: "이전지하철역ID" })
  statnFid: string

  @Column({ comment: "다음지하철역ID" })
  statnTid: string

  @Column({ comment: "지하철역ID" })
  statnId: string

  @Column({ comment: "지하철역명" })
  statnNm: string

  @Column({ comment: "도착예정열차순번" })
  ordkey: string

  @Column({ comment: "연계호선ID" })
  subwayList: string

  @Column({ comment: "연계지하철역ID" })
  statnList: string

  @Column({ comment: "열차종류" })
  btrainSttus: string

  @Column({ comment: "열차도착예정시간" })
  barvlDt: string

  @Column({ comment: "열차번호" })
  btrainNo: string

  @Column({ comment: "종착지하철역ID" })
  bstatnId: string

  @Column({ comment: "종착지하철역명" })
  bstatnNm: string

  @Column({ comment: "열차도착정보를 생성한 시각" })
  recptnDt: Date

  @Column({ comment: "첫번째도착메세지" })
  arvlMsg2: string

  @Column({ comment: "두번째도착메세지" })
  arvlMsg3: string

  @Column({ comment: "도착코드" })
  arvlCd: string

  @Column({ comment: "막차여부" })
  lstcarAt: string
}
