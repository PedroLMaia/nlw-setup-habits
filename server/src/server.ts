import Fastify from 'fastify' //Semelhante ao Express.
import cors from '@fastify/cors'
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333, host: '0.0.0.0' //Se nao funcionar, mudar para 192.168.15.13
}).then(() => {
    var timeNow = new Date(); console.log(`HTTP Server running! \nCurrent time: ${timeNow.toLocaleTimeString()}`);
})