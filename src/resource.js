class Resource {

  constructor(params) {
    this.params = params
  }

  static find(id) {
    return this.repository[id];
  }

  static create(record) {
    this._repository[record.id] = record;
    return record
  }

  static update(record) {
    this._repository[record.id] = record;
    return record
  }

  static remove(id) {
    delete this._repository[id];
  }

  _repository() {
    return storage[this._namespace()] || {};
  }

  _updateRepository(data) {
    storage[this._namespace()] = data
  }
  _namespace() {
    return this.constructor.name.toLowerCase() + 's'
  }
}

class Page extends Resource {

  constructor({id, title, content, path}) {
    super();
  }
}
