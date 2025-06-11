import { IsString, IsNumber, IsArray, ArrayNotEmpty, Min } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;

  @IsNumber()
  @Min(0)
  preco: number;

  @IsString()
  descricao: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true }) // ← cada item do array deve ser uma string
  tags: string[];
}
