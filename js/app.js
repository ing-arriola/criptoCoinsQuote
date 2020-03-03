const coinsAPI=new API()
const ui=new interfaz('*^ry%u$L%YRm94X2MfX$wCrVw8!6*%^v9Vv')


const processForm=(e)=>{
    e.preventDefault()
    let selectedCoin=document.getElementById('moneda').value
    let selectedCriptoCoin=document.getElementById('criptomoneda').value

    if (selectedCoin==='' || selectedCriptoCoin==='') {
        console.log('You must set value for both select items')
        ui.showMessage('You must set value for both select items','alert bg-danger text-center')
    } else {
        coinsAPI.getValueOfCriptoCoint(selectedCriptoCoin,selectedCoin)
            .then(data=>{
                //Here there is necessary to have a try catch because there are not information of all
                //the cripto coins, so if one returns a void object we need to tell it to the user
                try {
                    ui.showResult(data.RAW,selectedCriptoCoin,selectedCoin)    
                } catch (error) {
                    alert('There is no data available of the selected cripto coin')
                    console.log(error)
                }
                
            })
    }
}

const formu=document.getElementById('formulario')
formu.addEventListener('submit',processForm)

