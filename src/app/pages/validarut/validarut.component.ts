import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validarut',
  templateUrl: './validarut.component.html',
  styleUrls: ['./validarut.component.css'],
})
export class ValidaRutComponent implements OnInit {
  rutInput: any = '';

  constructor() {}

  ngOnInit() {}

  validateRut() {
    if (this.rutInput.length > 12) {
      return;
    }
    const rut = this.rutInput;
    const rutEnProceso = rut.replace(/^0+/, '');
    if (rutEnProceso != '' && rutEnProceso.length > 1) {
      const rutSinPuntos = rutEnProceso.replace(/\./g, '');
      const rutEnProcesoLimpio = rutSinPuntos.replace(/-/g, '');
      const inicio = rutEnProcesoLimpio.substring(
        0,
        rutEnProcesoLimpio.length - 1
      );
      var rutPuntos = '';
      var i = 0;
      var j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        var letra = inicio.charAt(i);
        rutPuntos = letra + rutPuntos;
        if (j % 3 == 0 && j <= inicio.length - 1) {
          rutPuntos = '.' + rutPuntos;
        }
        j++;
      }
      let dv = rutEnProcesoLimpio.substring(rutEnProcesoLimpio.length - 1);
      rutPuntos = rutPuntos + '-' + dv;
    }
    this.rutInput = rutPuntos;
  }
}
