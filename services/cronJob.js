import cron from 'node-cron';
import coins from '../model.js';
import { getData } from './cryptoService.js';

export async function job(){
    try{
        let data = await getData();

        let Allcoins = Object.keys(data);

        for(let coin of Allcoins){
            const coinData = data[coin];
            await coins.create({
                name: coin,
                symbol: coin,
                price: data.usd,
                marketCap: data.usd_market_cap,
                change24h: data.usd_24h_change,
                lastUpdated:Date.now()
            });
        }
        console.log("Stored successfully");
    }
    catch(err){
        console.log("Error while storing data");
        throw err;
    }
}

cron.schedule('*/2 * * * *',()=>{
    console.log('Running crypto fetch job');
    job();
});