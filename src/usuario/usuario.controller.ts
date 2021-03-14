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
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/')
  public create(@Body() usuario: Usuario, @Res() res) {
    const usuarioCriado = this.usuarioService.create(usuario);

    res
      .status(HttpStatus.CREATED)
      .location(`/users/${usuarioCriado.id}`)
      .json(usuarioCriado);
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
