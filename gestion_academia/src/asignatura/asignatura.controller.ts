import { Controller, Get , Post , Body} from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';

@Controller('asignaturas')
export class AsignaturaController {
  constructor(
    private readonly asignaturaService: AsignaturaService,
  ) {}

  @Get()
  obtenerDocentes() {
    return this.asignaturaService.obtenerAsignatura();
  }

  @Post()
  crearDocente(
    @Body() datos: {
      nombre: string;
      descripcion: string;
      id_docente: number;
    },
  ) 
  {
    return this.asignaturaService.crearAsignatura(
      datos.nombre,
      datos.descripcion,
      datos.id_docente,
    );
  }
  
}
