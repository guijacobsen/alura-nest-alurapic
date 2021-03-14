export class UsuarioService {
  public usuarios = [];

  public create(usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }
  public get() {
    return this.usuarios;
  }
}
