import { Module } from '@nestjs/common';
import { IsEmailUniqueConstraint } from './isEmailUnique.validator';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, IsEmailUniqueConstraint],
})
export class UsuarioModule {}
