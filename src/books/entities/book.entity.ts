import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class starkBook {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    name: string;
    @Column()
    categories: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @Column()
    linkCompra: string;
    @Column()
    linkLeer: string;
    @Column()
    linkEscuchar: string;
    @Column()
    linkImagen: string;
}
