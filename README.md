# http-proxy-stream Demo with CORS allowed

Demo of proxying data with Node.js + Express + http-proxy-stream + CORS express middleware

P.S. This is a basic demo without checks for origin, authorization or specific CORS settings. Tweak to your needs.

## Steps needed to run this Demo

1. Install all needed dependencies
```
npm i
```

2. Set port of your choice through .env or just environment variable PROXY_EXPRESS_PORT
```
export PROXY_EXPRESS_PORT=8081
```

3. Run demo
```
npm start
```

4. Using your port of choice you can try getting files from other websites ignoring CORS
```
http://localhost:8081/proxy?link=${encodeURIComponent(url)}
```