import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DocentesModule } from './docentes/docentes.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
@Module({
  imports: [DatabaseModule, DocentesModule, AsignaturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
