/**sirve para obtener algunas propiedades de un objeto */
const servicios = {
    api: "Soy api",
    mailer: "Soy mailer",
}



// Caso 1 utilizar una propiedad de un objeto
const destructuringA = ({ mailer }) => {
    console.log(mailer)
}

// Caso 2 asignacion de constantes para el lado izquierdo
const destructuringB = (srs) => {
    const { api } = srs
    console.log(api)
}


destructuringA(servicios)
destructuringB(servicios)