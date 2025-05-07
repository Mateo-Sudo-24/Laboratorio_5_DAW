// 1. Crear el botón
const boton = document.createElement("button");
boton.textContent = "Mostrar nombres de memes";
boton.style.padding = "10px";
boton.style.margin = "10px";
boton.style.backgroundColor = "#4CAF50";
boton.style.color = "white";
boton.style.border = "none";
boton.style.borderRadius = "5px";
document.body.prepend(boton);

// 2. Crear el textarea (inicialmente oculto)
const textarea = document.createElement("textarea");
textarea.style.width = "100%";
textarea.style.height = "200px";
textarea.style.marginTop = "10px";
textarea.style.display = "none";
document.body.appendChild(textarea);

// 3. Crear la función que obtiene los nombres de los memes
async function mostrarNombresDeMemes() {
    const request = await fetch("https://api.imgflip.com/get_memes");
    const response = await request.json();
    const nombres = response.data.memes.slice(0, 8).map((m, i) => `${i + 1}. ${m.name}`).join("\n");
    textarea.value = nombres;
    textarea.style.display = "block";
}

// 4. Asignar el evento al botón
boton.addEventListener("click", mostrarNombresDeMemes);
