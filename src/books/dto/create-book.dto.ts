import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({ description: '描述该条目的原始文本' })
    title: string;
    @ApiProperty({ description: '作者' })
    author: string;
    @ApiProperty({ description: '价格' })
    price: number;
}
