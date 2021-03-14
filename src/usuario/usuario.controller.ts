import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/')
  public create(@Body() usuario) {
    return this.usuarioService.create(usuario);
  }

  @Get('/')
  public get() {
    return this.usuarioService.get();
  }
}
