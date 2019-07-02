function isObject(o) {
  return typeof o == 'object' && o == new Object(o);
}

class Storage {

  constructor(name, permanent) {
    this._name = name;
    this._permanent = !!permanent;
    this._storage = this._permanent? sessionStorage:sessionStorage;
  }

  _getValue() {
    let value = this._storage.getItem(this._name) || '{}';
    return JSON.parse(value);
  }

  _setValue(value) {
    if( !isObject(value) ) return;
    this._storage.setItem(this._name, JSON.stringify(value));
  }

  getItem(name) {
    let value = this._getValue();
    return value[name];
  }

  setItem(name, value) {
    let item = this._getValue();
    item[name] = value;
    this._setValue(item);
  }

  removeItem(name) {
    this.setItem(name, undefined);
  }

  clear() {
    this._value = {};
    this._setValue(this._value);
  }

}

export default {
  open(name, permanent) {
    return new Storage(name, permanent);
  }
}
