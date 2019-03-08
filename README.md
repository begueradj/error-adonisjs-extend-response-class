## Extending AdonisJs Response

### How to use this demo

1. Clone this repository
2. Run the dependencies: `npm install`
3. Run the server: `adonis serve --dev`
4. Go to http://127.0.0.1:3333/foo

In Network (Development tools) you will see a 500 HTTP code error 

### Purpose
The goal of this repository is to demonstrate the error in the example given in Adonis JS documentation about how to extend Response class:

```
const Response = use('Adonis/Src/Response')

Response.macro('sendStatus', function (status) {
  this.status(status).send(status)
})
```

