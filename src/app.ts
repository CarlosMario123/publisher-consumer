import mqtt from 'mqtt';
import { Consumidor } from './mqtt/consumer';
import { Productor } from './mqtt/producer';

const client = mqtt.connect('mqtt://broker.emqx.io');

const productor = new Productor(client);
const consumidor = new Consumidor(client);

//recibe los eventos publicados en el broker
consumidor.suscribirseAEventos();
consumidor.iniciarEscucha()
;
// productor publica eventos al broker
productor.publicarEvento('temperatura', 25);
productor.publicarEvento('humedad', 60);

//simulando el productor
/*setInterval(()=>{
    let numeroAleatorio = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
    productor.publicarEvento('temperatura',numeroAleatorio);
    productor.publicarEvento('humedad', numeroAleatorio - 4);
},3000)*/

