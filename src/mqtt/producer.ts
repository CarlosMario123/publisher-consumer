import { Evento } from '../events/event';
import mqtt, { MqttClient } from 'mqtt';

export class Productor {
  private client: MqttClient;

  constructor(client: MqttClient) {
    this.client = client;
  }

  publicarEvento(tipo: string, valor: number): void {
    const evento = new Evento(tipo, valor);
    this.client.publish(`sensores/${tipo}`, JSON.stringify(evento));
  }
}