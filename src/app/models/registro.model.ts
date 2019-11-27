import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public json: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinaTipo();
    }
    getObjJSON(texto: string) {
        let t = texto.replace(/{/g, "{\"");
        t = t.replace(/:/g, '":"');
        t = t.replace(/,/g, "\",\"");
        t = t.replace(/}/g, "\"}");
        return t;
    }

    private determinaTipo() {
        const inicioTexto = this.text.substr(0, 4);
        let objJSON;
        let textJSON;
        switch (inicioTexto) {
            case 'http' || 'geo:':
                console.log('Tipo no soportado', this.text);
                this.type = "No soportado";
                this.icon = "warning";
                break;
            case '{Dat':
                textJSON = this.getObjJSON(this.text);
                this.json = textJSON;
                objJSON = JSON.parse(textJSON);
                this.type = objJSON.DataType;
                if (this.type == "Location") this.icon = "locate";
                if (this.type == "Article") this.icon = "pricetag";
                console.log('Tipo: ', this.type);
                break;
            default:
                this.type = "No reconocido";
                this.icon = "help";
                console.log('Tipo no reconocido');
                break;

        }
    }
}