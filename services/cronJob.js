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
                price: coinData.usd,
                marketCap: coinData.usd_market_cap,
                change24h: coinData.usd_24h_change,
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

//cron job runs for 1hr
cron.schedule('0 */1 * * *',()=>{
    console.log('Running crypto fetch job');
    job();
});