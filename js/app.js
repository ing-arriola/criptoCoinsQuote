const coinsAPI=new API()
const ui=new interfaz('myapikey...XD')


const processForm=(e)=>{
    e.preventDefault()
    let selectedCoin=document.getElementById('moneda').value
    let selectedCriptoCoin=document.getElementById('criptomoneda').value

    if (selectedCoin==='' || selectedCriptoCoin==='') {
        console.log('You must set value for both select items')
        ui.showMessage('You must set value for both select items','alert bg-danger text-center')
    } else {
        console.log('ok!!')
    }
}

const formu=document.getElementById('formulario')
formu.addEventListener('submit',processForm)

