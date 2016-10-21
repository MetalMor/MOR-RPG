'use strict';
import {Util} from "../util/numbers.class";
import {Types} from "../types/id.type";
import Numbers = Util.Numbers;
import Id = Types.Id;
/**
 * Created by becari on 19/10/2016.
 */

export class GeneralComponent {
  private _id: Id;
  private _name: String;

  public constructor(obj?: GeneralComponent) {
    this.Name = obj && obj.Name || "unnamed";
    this.Id = obj && obj.Id || new Id();
  }

  private AutoName(): string {
    return this.Name + "_" + this.Id.ToString();
  }

  public get Name(): String {
    return this._name;
  }
  public set Name(_name: String) {
    if(_name.length > 0) this._name = _name;
  }
  public get Id(): Id {
    return this._id;
  }
  public set Id(_id: Id) {
    this._id = _id;
  }
  public ToString(): string {
    return this.AutoName();
  }
}
