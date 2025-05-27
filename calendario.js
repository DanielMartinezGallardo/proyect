document.addEventListener('DOMContentLoaded',main);

function main()
{
    calendario();
}




function calendario() 
{
    const hoy = new Date();
    const mes = hoy.getMonth(); // 0-11
    const año = hoy.getFullYear();

    const nombresMes = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    document.getElementById("mes").innerText = `${nombresMes[mes]} ${año}`;

    const primerDia = new Date(año, mes, 1);
    const ultimoDia = new Date(año, mes + 1, 0);
    const primerDiaSemana = (primerDia.getDay() + 6) % 7; // lunes = 0

    let tabla = "<table border='1' cellspacing='0' cellpadding='10'>";
    
    // Encabezado con días de la semana
    tabla += "<thead><tr>";
    diasSemana.forEach(dia => {
    tabla += `<th>${dia}</th>`;
    });
    tabla += "</tr></thead><tbody><tr>";

    // Celdas vacías antes del primer día del mes
    for (let i = 0; i < primerDiaSemana; i++) {
    tabla += "<td></td>";
    }

    // Celdas con días
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
    tabla += `<td><a href="detalle.php?dia=${dia}&mes=${mes + 1}&anio=${año}">${dia}</a></td>`;
    if ((primerDiaSemana + dia) % 7 === 0) {
        tabla += "</tr><tr>";
    }
    }

    tabla += "</tr></tbody></table>";

    document.getElementById("calendario").innerHTML = tabla;
}

 

