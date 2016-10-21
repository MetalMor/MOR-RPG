'use strict';
/**
 * Clase de utilidades varias y generales.
 * Created by Mor on 17/08/2016.
 */
export module Util {
  export class Numbers {
    /**
     * Genera un nuevo valor de <code>id</code> entre los números por defecto.
     * @returns {number}
     */
    static get AutoId(): number {
      return Numbers.RandomNumber();
    }
    /**
     * Formatea un número para que tenga tantas cifras como se especifica en el parámetro, rellenando con ceros a la
     * izquierda.
     * @param _number Número a formatear.
     * @param _pad Cantidad de cifras que se espera.
     *
     * @returns {string}
     */
    static NumberPad(_number: number, _pad: number): string {
      var number: string = _number.toString(),
        pad: number = _pad - number.length;
      if (pad < 0) throw new Error();
      while (pad-- > 0) number = '0' + number;
      return number;
    }
    /**
     * Genera un número aleatorio entre el mínimo y el máximo especificados por parámetro. En caso de ser omitidos,
     * la función llama a los valores por defecto de la clase <code>Constants</code>.
     * @param _min Límite inferior.
     * @param _max Límite superior
     * @returns {number}
     */
    static RandomNumber(_min: number = 0, _max: number = 99999): number {
      if (_min >= _max) throw new Error();
      return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    /**
     * Comprueba si el objeto especificado por parámetro es indefinido.
     * @param obj Objeto a validar.
     * @returns {boolean}
     */
    static IsUndefined(obj): boolean {
      return typeof obj === "undefined";
    }
  }
}
