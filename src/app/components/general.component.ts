'use strict';
/**
 * Created by becari on 19/10/2016.
 */

export class GeneralComponent {
  private _name: String;
  private static _count: number = 0;
  constructor(obj?: GeneralComponent) {
    GeneralComponent.Count++;
    this.Name = obj && obj.Name || ("unnamed_" + GeneralComponent.Count)
  }
  get Name(): String {
    return this._name;
  }
  set Name(_name: String) {
    this._name = _name;
  }
  protected static get Count(): number {
    return GeneralComponent._count;
  }
  protected static set Count(_count: number) {
    GeneralComponent._count = _count;
  }
}
