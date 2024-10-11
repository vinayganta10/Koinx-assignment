import coins from "../model.js";

export async function calculate(coin){
    try{
        const records = await coins.find({name:coin}).sort({createdAt:-1}).limit(3);
        if(records.length===0) return 0;
        const prices = records.map(record=>record.price);
        const deviation = calculateSD(prices);
        return deviation;
    }
    catch(err){
        console.log("Cannot calculate deviation");
        throw err;
    }
} 

function calculateSD(values) {
    const n=values.length;
    if (n===0) return 0;
    const mean = values.reduce((a,b)=> a+b)/n;
    const squareDiffs=values.map(value=>{
      const diff=value-mean;
      return diff*diff;
    });
    const avgSquareDiff = squareDiffs.reduce((a,b)=> a+b)/n;
    return Math.sqrt(avgSquareDiff).toFixed(2);
}