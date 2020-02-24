class interfaz{
    showMessage(msg,classes){
        const div=document.createElement('div')
        div.className=classes
        div.appendChild(document.createTextNode(msg))
        const sectionToShowMsg=document.querySelector('.mensajes')
        sectionToShowMsg.appendChild(div)
    }
}