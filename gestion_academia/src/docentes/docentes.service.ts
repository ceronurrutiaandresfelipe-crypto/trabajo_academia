import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()
export class DocentesService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly database: Connection,
  ) {}

  async obtenerDocentes() {
    const [resultados] = await this.database.query(
      'SELECT * FROM Docentes'
      
    );
    return resultados;
  }

  async crearDocente(nombre: string, apellido: string, correo: string, telefono: string) {
  const [resultado] = await this.database.execute(
    'INSERT INTO Docentes (nombre, apellido, correo, telefono) VALUES (?, ?, ?, ?)',
    [nombre, apellido, correo, telefono]
  );
  }
}