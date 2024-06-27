import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class SessionStore {
  _logged = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: '@SessionStore',
      properties: ['_logged'],
      storage: window.sessionStorage,
    });
  }

  get logged() {
    return this._logged;
  }

  login() {
    this._logged = true;
  }

  logout() {
    this._logged = false;
  }
}

const sessionStore = new SessionStore();
export default sessionStore;
