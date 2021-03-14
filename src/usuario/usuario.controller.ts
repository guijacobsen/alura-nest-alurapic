import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  public usuarios = [];

  @Post('/')
  public create(@Body() usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }

  @Get('/')
  public get(@Param() params) {
    return this.usuarios;
  }
}
