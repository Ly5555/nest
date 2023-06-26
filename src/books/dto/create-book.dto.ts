import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateBookDto {
    @ApiProperty({ description: '描述该条目的原始文本' })
    @IsNotEmpty({ message: "书名不能为空" })
    title: string;
    @ApiProperty({ description: '作者' })
    author: string;
    @ApiProperty({ description: '价格' })
    price: number;
}
