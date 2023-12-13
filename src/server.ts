/**
 * Module dependencies.
 */

import app from "./app";
// import debug from "debug";
import http from "http";
import chalk from "chalk";
// debug("my-node:server");

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val: string): number => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return NaN;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return NaN;
};

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || "3030");
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error: any): void => {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = (): void => {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : addr?.port;
  //   debug("Listening on " + bind);
  console.log(`App is running on http://localhost:${bind}`);
};

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
