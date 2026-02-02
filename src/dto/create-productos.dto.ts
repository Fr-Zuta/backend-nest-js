import { IsNotEmpty, IsNumber, IsString, MinLength, Max} from 'class-validator'

export class createProductoDto{
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  title: string

  @IsNumber()
  @Max(100)
  @IsNotEmpty()
  stock: number

  @IsNotEmpty()
  status: boolean
}