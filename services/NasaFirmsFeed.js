/* eslint-disable prettier/prettier */
import * as apisauce from 'apisauce';

const NasaFirmFeed = apisauce.create({
    baseURL: 'http://firewatch-sentinel.mybluemix.net/nasa-firms-feed',
});

export default NasaFirmFeed;