window.addEventListener('load',function(){
    let img=[]
    img[0]="imagenes/imagen1.jpg";
    img[1]="imagenes/imagen2.jpg";
    img[2]="imagenes/imagen3.jpg";
    img[3]="imagenes/imagen4.jpg";
    img[4]="imagenes/imagen5.jpg"
    let n=0;
    function Slide(){
        document.imagen.src = img[n];
        if(n<3){
            n++;
        }
        else{
            n=0;
        }
    }
    setInterval(Slide,1600);
 })

TraerDatos()
function TraerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('Get','datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let datos = JSON.parse(this.responseText)
            let rec = document.querySelector('#rectangulohabilidades');
            rec.innerHTML = "";
            for(let i of datos){
                rec.innerHTML += `
                        <div>
                            <h1 class="tituloshabilidades${i.tituloshabilidades}">${i.Habilidad}</h1>
                            <div class="rectangulo${i.Rectanguloblanco}"></div>
                            <div class="rectangulo${i.Rectanguloverde}"></div>
                        </div>
                `
            }
        }
        
    }
}
