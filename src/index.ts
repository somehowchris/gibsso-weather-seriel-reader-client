import chalk from 'chalk';
import * as clear from 'clear';
import * as figlet from 'figlet';
import { weatherService } from './logger';
import * as schedule from 'node-schedule';
import * as SerialPort from 'serialport';
import env from './env';

const serialPort = new SerialPort(env.serialPort, {
  baudrate: env.baudRate
});

serialPort.on('data', function (data) {
  console.log('Data:', data);
});


clear();
console.log(
  chalk.yellow(
    figlet.textSync('Weather client', { horizontalLayout: 'full' })
  )
);


const hiIt = () => {

}

const allDayLong = () => {
  weatherService.info(() => 'Another try');
}
schedule.scheduleJob('0 */1 * * * *', allDayLong);