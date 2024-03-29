import { Column, DeleteDateColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class UserBook {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ length: 500 })
  telefono: string;
  @Column({ nullable: false })
  password: string;
  @Column({ default: "user" })
  rol: string;
  @Column()
  isVerified: boolean;
  @DeleteDateColumn()
  deletedAt: Date;
}
