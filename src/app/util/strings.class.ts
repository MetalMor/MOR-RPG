'use strict';
/**
 * Created by becari on 19/10/2016.
 */
export module Util {
  export class Strings {
    /**
     * Retorna la fecha especificada por parámetro en formato String (en su defecto, retorna la fecha actual)
     * @param _date Objeto fecha del cual obtener el string.
     * @returns {string}
     * @constructor
     */
    static Date(_date: Date = new Date()) {
      return _date.toDateString();
    }
    /**
     * Retorna el string especificado por parámetro con la primera letra vuelta mayúscula.
     * @param _string
     */
    static CapitalizeFirst(_string: string): string {
      return _string.charAt(0).toUpperCase() + _string.slice(1);
    }
  }
}
