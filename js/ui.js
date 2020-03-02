class interfaz{
    constructor(){
        this.init()
    }
    init(){
        this.builSelect()
    }
    builSelect(){
        coinsAPI.getcoinsFromAPI()
            .then(coins=>{
                //Getting the select element from the DOM in order to attach the options inside of it
                const optionsToShow=document.getElementById('criptomoneda')
                console.log('hello hello')
                //Go through the results of the API    
                for (const [key,value] of Object.entries(coins.Data)) {        
                        let option=document.createElement('option')
                        option.value=value.Symbol
                        option.appendChild(document.createTextNode(value.CoinName))
                        optionsToShow.appendChild(option)  
                    }
                }
            )
    }

    showMessage(msg,classes){
        const div=document.createElement('div')
        div.className=classes
        div.appendChild(document.createTextNode(msg))
        const sectionToShowMsg=document.querySelector('.mensajes')
        sectionToShowMsg.appendChild(div)
        //After 3 seconds the message must dissapear from the UI
        setTimeout(() => {
            sectionToShowMsg.remove()
        }, 2000);
    }
}