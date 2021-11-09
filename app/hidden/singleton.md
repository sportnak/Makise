---
title: The Singleton Pattern in Javascript
image: /images/one.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - michael
date: Thur Jul 25 2019 4:42:00 GMT-0700 (PST)
tags:
  - javascript
  - singleton
  - pattern
---

One powerful pattern that can be leveraged quite easily in Javascript is the Singleton pattern. It's as easy as this

```js
class CustomConnector() {
    private static connection;

    static initConnection() {
        if (CustomConnector.connection != null) {
            CustomConnector.connection = new Connection();
        }
    }

    static destroyConnection() {
        // alternatively use an if statement if you're not using es2019
        CustomConector.connection?.close();
    }

    static getData() {
        return CustomConnector.connection.getData();
    }
}
```

Now anywhere in your JS code that you need to use a `Connector` intialize it with `CustomConnector.initConnection()` and you can use `CustomConnector.getData()` without a problem. You don't need for them to be static, it's mostly just for the example. But JS keeps around the static instance of the connection until the process exits. This is particularly helpful when you're working with connectors that cannot have multiple open connections at the same time. Pretty neat!
