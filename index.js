const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("estoy arrastrando el parrafo: "+ parrafo.innerText)
        parrafo.classList.add("draggin")
        event.dataTransfer.setData("id", parrafo.id)
        const imagen_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(imagen_fantasma, 0 ,0)
    })

    parrafo.addEventListener("dragend", () => {

        parrafo.classList.remove("draggin")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" 

    })

    seccion.addEventListener("drop", event =>{
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")

        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", eliminar => {
    const id_parrafo = eliminar.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})