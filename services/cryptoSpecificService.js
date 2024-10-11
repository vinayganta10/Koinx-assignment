import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function getSpecificData(coin){
    try{
        let {data} = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true`,{
            "headers":{
                'x-cg-demo-api-key': process.env.api_key
            }
        });
        return data;
    }
    catch(err){
        console.log("error ");
        throw err;
    }
}