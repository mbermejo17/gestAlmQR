export class Registro {
     public format: string;
     public text: string;
     public type: string;
     public icon: string;
     public json: string;
     public created: Date;

     constructor(format: string, text: string){
        this.format = format;
        this.text = text;
        this.created = new Date();
     }


     private determinaTipo() {
         const inicioTexto = this.text.substr(0,4);
         switch (inicioTexto) {
             case 'http' || 'geo:':
                 console.log('Tipo no soportado',this.text);
                 break;
             default:
                 console.log('Tipo no reconocido');
                 break;    

         }
     }
}