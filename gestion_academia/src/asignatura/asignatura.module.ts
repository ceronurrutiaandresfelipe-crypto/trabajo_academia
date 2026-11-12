import { Module } from '@nestjs/common';
import { AsignaturaController } from './asignatura.controller';
import { AsignaturaService } from './asignatura.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
})
export class AsignaturaModule {}
