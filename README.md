# Healthcheck

Simple utility class to setup periodic http pings to an endpoint.

## Install

```
npm install --save @todotoit/healthcheck
```

## Usage

```javascript
import HealthCheck from '@todotoit/healthcheck'
const hc = new HealthCheck({options})

hc.start()  // starts a timer - called by default when calling new HealthCheck() without autorun: false;
hc.stop()   // stops a running timer
```

## Options

```javascript
{
  url: '...',        // the url for the http request
  interval: 3600,    // default: pings every hour - can be a later time string eg. "every 6 hours"
  autorun: true,    // by default, the timer starts when the class is instantiated, you can set this to false to start it programmatically using hc.start()
  callback: false   // a callback to be called each time the healthcheck runs - it receives the response text as an argument
}
```

## Development

1. Build the library
  * Run `yarn install` (recommended) or `npm install` to get the project's dependencies
  * Run `yarn build` or `npm run build` to produce minified version of the library.
2. Development mode
  * Having all the dependencies installed run `yarn dev` or `npm run dev`. This command will generate an non-minified version of the library and will run a watcher so you get the compilation on file change.
