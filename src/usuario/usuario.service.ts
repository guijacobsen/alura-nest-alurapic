import { Injectable } from '@nestjs/common';
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
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
