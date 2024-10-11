import axios from "axios";

export async function getData(){
    try{
        let {data} = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cmatic-network&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true",{
            "headers":{
                'x-cg-demo-api-key': 'CG-r8wDjjPy1iRN6eaJwyrVF3UU'
            }
        });
        return data;
    }
    catch(err){
        console.log("error ");
        throw err;
    }
}
