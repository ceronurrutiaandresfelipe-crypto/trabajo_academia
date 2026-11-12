import { Module } from '@nestjs/common';
import mysql from 'mysql2/promise';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const connection = await mysql.createConnection({
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: '',
          database: 'gestion_academica',
        });

        console.log('Conexion exitosa con MySQL');

        return connection;
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
