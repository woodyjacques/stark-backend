import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CategoryBook {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    name: string;
    @Column()
    description: string;
}
