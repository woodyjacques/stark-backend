import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    linkCompra: string;
    @ApiProperty()
    linkLeer: string;
    @ApiProperty()
    linkEscuchar: string;
    @ApiProperty()
    linkImagen: string;
}
