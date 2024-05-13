import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Booking app')
  .setDescription('Booking App will provide the possibility of booking services for different companies.')
  .setVersion('1.0')
  .build();

export const DEFAULT_PORT = 8000;

export const DEFAULT_ORIGIN = '*';