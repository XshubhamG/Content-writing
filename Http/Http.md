---
title: 'HTTP'
description: 'Hyper Text Transfer Protocal'
date: 2022-01-01
---

# HTTP - Hyper Text Transfer Protocal

## Jargon's related to HTTP protocal

- URL : Uniform Resource Locator
- URI : Uniform Resource Indentifier
- URN : Uniform Resource Name
- HTTP headers : metadata [key-value sent along with request & response]
  - Response header : came from server
  - Request header : came from client
  - Representation header : encoding / compression
  - Payload header : sending data to client or server

## HTTP methods

Basic sets of operations that can be used to interact with server.

- GET : retrieve resource
- HEAD : no message body (response header only)
- OPTIONS : what options are available
- TRACE : loopback test
- DELETE : Remove a resource
- PUT : replace a resource
- POST : interact with resource (mostly add)
- PATCH : change part of a resource

## HTTP status code

- 1XX : Informational
- 2XX : Success
- 3XX : Redirection
- 4XX : Client error
- 5XX : Server error
