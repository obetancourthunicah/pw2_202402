let variable = "Hola Mundo";
// let permite modificar el valor de la variable

const variable2 = "Hola Mundo";
// const no permite modificar el valor de la variable

var variable3 = "Hola Mundo";
// var backward compatibility deprecado

//JSON  Javascript Object Notation
const datosProyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Descripcion del proyecto 1",
    fechaInicio: "2021-01-01",
    fechaFin: "2021-01-31",
    imgUrl: "https://via.placeholder.com/150",
    done: false,
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Descripcion del proyecto 2",
    fechaInicio: "2021-02-01",
    fechaFin: "2021-02-28",
    imgUrl: "https://via.placeholder.com/150",
    done: true,
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Descripcion del proyecto 3",
    fechaInicio: "2021-03-01",
    fechaFin: "2021-03-31",
    imgUrl: "https://via.placeholder.com/150",
    done: false,
  },
];

let myModal = null;
function page_load() {
    myModal = new ModalClass();
    populateProjects();
}

// funcion para carga sitios web al dom
function populateProjects() {
    const contendorSitiosWeb = document.getElementById("sitiosWebProjects");
  datosProyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (proyecto.done) {
      card.classList.add("done");
    }
    const img = document.createElement("img");
    img.src = proyecto.imgUrl;
    img.alt = "Imagen del Proyecto";
    const h4 = document.createElement("h4");
    h4.textContent = proyecto.nombre;
    h4.addEventListener("click", () => {
        myModal.showModal(proyecto.nombre, proyecto.descripcion);
    });
    const p = document.createElement("p");
    p.textContent = `${proyecto.descripcion} | ${proyecto.fechaInicio} - ${proyecto.fechaFin}`;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p);

    contendorSitiosWeb.appendChild(card);
  });
}


//registrando una funcion para que se
// ejecute cuando este cargado todo el documento
document.addEventListener("DOMContentLoaded", page_load);
