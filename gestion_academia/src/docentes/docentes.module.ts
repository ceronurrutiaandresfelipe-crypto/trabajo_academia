import { Module } from '@nestjs/common';
import { DocentesController } from './docentes.controller';
import { DocentesService } from './docentes.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule {}
