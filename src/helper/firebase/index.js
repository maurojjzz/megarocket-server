const admin = require('firebase-admin');

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE_FIREBASE,
    project_id: process.env.PROJECT_ID_FIREBASE,
    private_key_id: process.env.PRIVATE_KEY_ID_FIREBASE,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDg3dh2mIUd7uS2\nBrMhkecD2276bLELW6aYKojVxst6w4GxUHcyh76Mgk0rXw6Bg0zVulM4dVftYUMy\nHFld+31z96u48qWWIRoj/ksj5BpQm3eSNeutdjJlsE1avvqTy44kHupD1avuHXIN\nux229QKpYVBhH01id56eh84Y90A8oql6maq8x9qZmVa+BdM6LH4tNarcm724mtpW\nzUgFDEB15kqJPbSK7PsIwRxST3smNA9glLfGYIGfpThAPjC1lZBnN/hPA43yPHNg\nRIgzq7dGb0+XQQ2SPTZgTR/lVDhxPO/Pqz2F8SduatesdVPRAODwRBKhj4uaPU1S\nFcZOTIdnAgMBAAECggEAO+B24mWMlMLnHd0818SNGkbVD1Pf9OFLxBsXYq1Tw3XJ\n1BhUFR12TN3phJIEP9JhpEvAGzmL10bd6LsJxO/RoQ6jKFVcaFSaLFlrUrxLkYlE\nVqeLAR6HHvLKNk7CVJaQW+frg3KjHH20wBlCOVSWh9nE2IfISF8H2rjY1WcJMNuz\niU6jcf0XK+U+RZMFmUSm5rP88GE2JkxfWixtTPPyspnaWgnCzNFGVmzz1aL5BxYI\nxq/NCZMwdbARFy0k75xruV1F7A+ZUJ/590FLKsuVBoCWnu5hce9BqNbQSYJm2kfB\neLQoaXfTQQRBdmqe1ST+HPERkoLektleKIAOfc8wkQKBgQD8kNwZK/wiM8rkO54E\nBvmadr3LhQq4zxyJC1ft7y67mmUsS8G8tYUqSyU47r+smWfNDv15GyyGjqMFpkdX\n12lmAdjitfLjrXJm8NEaxL5fZh8Kr4LDZ8ccP3TcXXFqYb88dBISNdvCX7QBQrRk\nJlc4CntzDAEp+K3szsKlND36TwKBgQDj7JG1wtc7zv8TIUnDbkFOqfipmgwPd3zq\nFfYhOGTdwxnFasSOTm3T4mVqgJxH7QAiCPAw37AOW9wtXFzquXL8WeKX8o6Vdr/y\nezoQHk5xvNGUjcY8MhvNOoY+c0tZpZi5yoGbqJFBMUh4hHsEWrN4UAxFsdyzjO92\njHm16aMTaQKBgBlN0h9bfslWcw9mwbAZmsxU9TL8w1Q8u9knH8og2ofFMjm75U8o\nyIyyNqp7kQyT2gh7Zf3KMS3SAJdCT4eHd3HW4YnlPM5+xCV4HxsVdxVLv/RsHSfC\nr/ouiWDCo+hKnsRJxL26U6gnunsd2cDm7noY4sFmBH/WAGbnWC0BDOyVAoGAHGun\nT67X/9Ez5ULFW+Unp5NyOlPHJTaVEOtkIYhSq4RkdkV19Pi6oS0d0EXxNtbKqXPL\n34xE+8VgkxdtTqeJOwZKRwAr319LWAUdnFzrEyukRo3XJjJpXRHrI2ZlAuyvOpuR\nxcMjOanXi4+Zd1WIA3yXyyj+iDUOtw2VL6XOe+ECgYBNecbJppt50jjB85lHCXTj\nu5v4PmyaCY4TmYVNi6dhYgl/V+7XCCSai5rgl3Zwxsn+YztvZWIyoGOKolDRygZh\n8wQdbQ1QK8JJmLs0jYP1jz/zpnTDddzcytb+iASfG2DbTJw02CkTRQmL9J6ZaRUz\ncDR8TLM0Phnvc+bHyMfzHQ==\n-----END PRIVATE KEY-----\n',
    client_email: process.env.CLIENT_EMAIL_FIREBASE,
    client_id: process.env.CLIENT_ID_FIREBASE,
    auth_uri: process.env.AUTH_URI_FIREBASE,
    token_uri: process.env.TOKEN_URI_FIREBASE,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL_FIREBASE,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL_FIREBASE,
    universe_domain: process.env.UNIVERSE_DOMAIN_FIREBASE,
  }),
});

module.exports = firebaseApp;
