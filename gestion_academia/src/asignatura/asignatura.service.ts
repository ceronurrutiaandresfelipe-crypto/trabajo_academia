import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()
export class AsignaturaService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly database: Connection,
  ) {}

  async obtenerAsignatura() {
    const [resultados] = await this.database.query(
      'SELECT * FROM Asignaturas'
      
    );
    return resultados;
  }

  async crearAsignatura(nombre: string, descripcion: string, id_docente: number) {
  const [resultado] = await this.database.execute(
    'INSERT INTO Asignaturas (nombre, descripcion, id_docente) VALUES (?, ?, ?)',
    [nombre, descripcion, id_docente]
  );
  }
}