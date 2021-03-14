import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  @IsString()
  nome: string;

  @IsNotEmpty({ message: 'E-mail obrigatório' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha obrigatória' })
  @Matches(/[A-Z][a-z][0-9]/)
  senha: string;

  dataEntrada: Date;
}
