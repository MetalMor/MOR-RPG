'use strict';

import {Util} from '../util/numbers.class';
import Numbers = Util.Numbers;
/**
 * Created by becari on 21/10/2016.
 */
export module Types {
  export class Id extends Object {
    private _value: number;

    private static _counter: number = 0;
    private static _padding: number = 3;

    constructor(obj?: Id) {
      super(obj);
      this.Value = obj && obj.Value || ++Id.Counter;
    }

    public get Value(): number {
      return this._value;
    }
    public set Value(_value: number) {
      if(_value >= 0) this._value = _value;
      else throw new Error();
    }
    private static get Padding() {
      return Id._padding;
    }
    protected static get Counter(): number {
      return Id._counter;
    }
    protected static set Counter(_counter: number) {
      if(_counter >= 0) Id._counter = _counter;
      else throw new Error();
    }

    public toString(): string {
      let value: number = this.Value || Id.Counter || 666,
        padding: number = Id.Padding || 3;
      return Numbers.NumberPad(value, padding);
    }
  }
}
