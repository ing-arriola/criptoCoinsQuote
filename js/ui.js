class interfaz{
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