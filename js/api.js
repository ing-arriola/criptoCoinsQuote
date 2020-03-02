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
    //Get criptocoin value in a given country money
    getValueOfCriptoCoint=async(cripto,real)=>{
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${real}&api_key=${this.apikey}`
        const connectionToAsk=await fetch(url)
        const value=await connectionToAsk.json()
        return value
    }
}