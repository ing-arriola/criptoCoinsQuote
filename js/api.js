class API{
    constructor(apikey){
        this.apikey=apikey
    }
    getcoinsFromAPI=async()=>{
        const url=`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`
        const connection= await fetch(url)
        const coins=await connection.json()
        //console.log(coins)
        return coins 
    } 
}