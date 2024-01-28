import { Evento } from '../events/event';
import mqtt, { MqttClient } from 'mqtt';

export class Consumidor {
  private client: MqttClient;

  constructor(client: MqttClient) {
    this.client = client;
  }

  suscribirseAEventos(): void {
    this.client.subscribe(`sensores/temperatura`);
    this.client.subscribe(`sensores/humedad`);
  }

  manejarEvento(topic: string, mensaje: Buffer): void {
    const evento: Evento = JSON.parse(mensaje.toString());

    switch (topic) {
      case `sensores/temperatura`:
        console.log(`Evento de temperatura recibido:`, evento);
        break;

      case `sensores/humedad`:
        console.log(`Evento de humedad recibido:`, evento);
        break;

      default:
        console.warn(`Evento desconocido en el tema ${topic}`);
    }
  }

  iniciarEscucha(): void {
    this.client.on('message', this.manejarEvento.bind(this));
  }
}

