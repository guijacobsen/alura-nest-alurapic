import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  public usuarios: Usuario[] = [];

  public create(usuario: Usuario): Usuario {
    const usuarioCriado = {
      ...usuario,
      id: Date.now().toString(),
    };
    this.usuarios.push(usuarioCriado);
    return usuarioCriado;
  }
  public getAll(): Usuario[] {
    return this.usuarios;
  }
  public getByEmail(email: string): Usuario {
    return this.usuarios.find((usuario) => usuario.email === email);
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
