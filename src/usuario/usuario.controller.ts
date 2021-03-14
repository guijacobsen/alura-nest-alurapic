import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/')
  public create(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.create(usuario);

    return new NestResponseBuilder()
      .status(HttpStatus.CREATED)
      .headers({
        Location: `/users/${usuarioCriado.id}`,
      })
      .body(usuarioCriado)
      .build();
  }

  @Get('/')
  public getAll() {
    return this.usuarioService.getAll();
  }
  @Get(':email')
  public getByEmail(@Param('email') email: string) {
    return this.usuarioService.getByEmail(email);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    this.usuarioService.delete(id);
  }
}
