import { TOKEN } from '../config';
import storage from './storage';

const token = storage.open(TOKEN, true);
const authTokenName = 'auth';

export default {
  remove(name) {
    token.removeItem(name);
  },

  clear() {
    token.clear();
  },

  getAuthToken() {
    return token.getItem(authTokenName) || 'anonymous.anonymous';
  },

  setAuthToken(val) {
    token.setItem(authTokenName, val);
  }
}
