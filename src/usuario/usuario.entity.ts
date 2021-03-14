import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { IsEmailUnique } from './isEmailUnique.validator';

export class Usuario {
  @Expose({ name: 'id' })
  id: string;

  @Expose({ name: 'name' })
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @IsString()
  nome: string;

  @IsNotEmpty({ message: 'E-mail obrigatório' })
  @IsString()
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsEmailUnique({ message: 'E-mail deve ser único' })
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
    // toClassOnly: false,
  })
  @IsNotEmpty({ message: 'Senha obrigatória' })
  @IsString()
  @Matches(/[a-z]/, {
    message: 'Senha deve conter letra minuscula, maiuscula e numero',
  })
  @Matches(/[A-Z]/, {
    message: 'Senha deve conter letra minuscula, maiuscula e numero',
  })
  @Matches(/[0-9]/, {
    message: 'Senha deve conter letra minuscula, maiuscula e numero',
  })
  senha: string;

  @Expose({ name: 'joinDate' })
  dataEntrada: Date;
}
