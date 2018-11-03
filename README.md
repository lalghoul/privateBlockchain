# Private Blockchain with RESFUL API

This project is private Blockchain that store data locally using LevelDB integrated with RESTFUL API to GET and POST Blocks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site).

```
https://nodejs.org/en/
```

### Installing

1. Clone the repository to your local computer.
2. Open the terminal and install the packages: `npm install`.
3. Run your application `node app.js`
4. Go to yur browser and type: `http://localhost:8000/block`
5. a function initializeMockData() will add 10 blocks to Blockchain for testing.

## Running the tests

Use POSTMAN or CURL to send GET requests to the Blockchain by adding to the URL block height.

```
http://localhost:8000/block/[blockheight]
```

Example URL path:
http://localhost:8000/block/0, where '0' is the block height.

## Example GET Response

For URL, http://localhost:8000/block/0

```
X-Powered-By →Express
Content-Type →text/plain; charset=utf-8
Data →{"hash":"e4d04d5522c0a2d777695e8b374211fae3bf4f270f45924ce635682bb1b87e35","height":0,"body":"Test Block","time":"1541273025","previousBlockHash":""}
Connection →close
Content-Length →208
ETag →W/"d0-Nam5HnrdK6hqMyz5HW9XEqdxgVs"
Date →Sat, 03 Nov 2018 19:23:45 GMT
```

## Example POST Response

Example URL path:
http://localhost:8000/block/[My data] where [My data] is the block data.

Example For URL, http://localhost:8000/block/Foo

```
X-Powered-By →Express
Content-Type →text/plain; charset=utf-8
Data →{"hash":"5a4cfcb0eeb4ea09eeba722fec4fa8795cb1b8aef3c855f92f59eef4ee956a4e","height":21,"body":"Foo","time":"1541275030","previousBlockHash":"e4d04d5522c0a2d777695e8b374211fae3bf4f270f45924ce635682bb1b87e35"}
Connection →close
Content-Length →207
ETag →W/"cf-1dfORKZcSoeamE44HYEj6a4iUPs"
Date →Sat, 03 Nov 2018 19:57:11 GMT
```

## Built With

- [ExpressJs](https://expressjs.com) - The web framework used.
- [LevelDb](http://leveldb.org/) - Database.
- [Crypto-js] - Used to hash blocks with SHA256.
