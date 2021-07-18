import firebase from 'firebase-admin';

import { FIREBASE_CONFIG } from '../../config';

class Firebase {
    private admin: firebase.app.App;
    private auth: firebase.auth.Auth

    constructor() {
      this.admin = firebase.initializeApp({
        credential: firebase.credential.cert(FIREBASE_CONFIG),
        databaseURL: FIREBASE_CONFIG.database_url,
      });
      this.auth = firebase.auth(this.admin);
    }

    /**
     * Creates a JWT token with additional claims to be parsed for authorization
     */
    async createToken(userId: string, additionalClaims?: Record<string, any>) {
      return this.auth.createCustomToken(userId, additionalClaims);
    }

    /**
     * Verifies Firebase JWT token and returns entire Firebase user
     */
    async verifyToken(token: string) {
      return this.auth.verifyIdToken(token);
    }
}

export default new Firebase();
