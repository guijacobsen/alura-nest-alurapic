import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/')
  public create(@Body() usuario: Usuario): Usuario {
    return this.usuarioService.create(usuario);
  }

  @Get('/')
  public getAll() {
    return this.usuarioService.getAll();
  }
  @Get(':email')
  public getByEmail(@Param('email') email: string) {
    return this.usuarioService.getByEmail(email);
  }
}
