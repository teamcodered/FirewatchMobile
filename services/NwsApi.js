/* eslint-disable prettier/prettier */
import * as apisauce from 'apisauce';

const NwsApi = apisauce.create({
    baseURL: 'http://firewatch-sentinel.mybluemix.net/nws-feed'
});

export default NwsApi;