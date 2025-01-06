# Express.js POST Request Body Undefined

This repository demonstrates a common issue in Express.js applications where the request body is undefined in a POST request handler, even when `express.json()` middleware is used.  The problem often stems from improper middleware placement or inconsistencies in how the request is sent.

## The Bug

The `bug.js` file contains an Express.js server that attempts to access the request body in a POST request handler. Despite using `express.json()`, the `req.body` remains undefined. 

## The Solution

The `bugSolution.js` file provides a corrected version of the server.  The solution addresses the issue by ensuring `express.json()` middleware is placed correctly before the request handler.