const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/about.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/account.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/login.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/Users/samay/Desktop/enlight/notes-app/src/pages/signup.js")))
}

