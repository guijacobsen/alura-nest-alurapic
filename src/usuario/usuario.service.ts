import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  public usuarios: Usuario[] = [];

  public create(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
  public getAll(): Usuario[] {
    return this.usuarios;
  }
  public getByEmail(email: string): Usuario {
    const user = this.usuarios.find((usuario) => usuario.email === email);
    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado',
      });
    }
    return user;
  }

  public delete(id: string | number): void {
    const userIndex = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (userIndex >= 0) {
      this.usuarios = [
        ...this.usuarios.slice(0, userIndex),
        ...this.usuarios.slice(userIndex + 1),
      ];
    }
  }
}
