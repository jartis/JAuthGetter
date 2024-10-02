# AuthGetter

A quick-and-dirty tool using a local webserver to get a refreshable authentication token for a user.

## Usage

- Your app must have `http://localhost:3000/` as one of your redirect URIs, or you can set this in the `config.json` file.

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open a browser and navigate to `http://localhost:3000/auth`
5. Ta-da it saved a `token.json` file!
