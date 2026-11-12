import { Controller, Get , Post , Body} from '@nestjs/common';
import { DocentesService } from './docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(
    private readonly docentesService: DocentesService,
  ) {}

  @Get()
  obtenerDocentes() {
    return this.docentesService.obtenerDocentes();
  }

  @Post()
  crearDocente(
    @Body() datos: {
      nombre: string;
      apellido: string;
      correo: string;
      telefono: string;
    },
  ) 
  {
    return this.docentesService.crearDocente(
      datos.nombre,
      datos.apellido,
      datos.correo,
      datos.telefono,
    );
  }
  
}
