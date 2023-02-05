window.addEventListener("load", function() {
    console.log("Entra")
    let img=[]
    img[0]="imagenes/imagen1.jpg";
    img[1]="imagenes/imagen2.jpg";
    img[2]="imagenes/imagen3.jpg";
    img[3]="imagenes/imagen4.jpg";
    img[4]="imagenes/imagen5.jpg"
 
    let n=0;
 
    function Slide(){
        document.slide.src = img[n];
 
        if(n<4){
            n++;
        }
        else{
            n=0;
        }
    }
    setInterval(Slide,6000);
 });




