---
layout: post
title: "Quire: Building a Large Application with Dart"
---

[Quire](https://quire.io) is not the first web application written in Dart and won't be the last one, but it could be the first app that relies on Dart so heavily, on both client and server sides.

![language statistics](/img/post/dart/lang-stat.png)

It's a fun task manager with tree structure to the core. The project itself has 53992 lines, 1620KB of Dart code, built with a few open source libraries from the community.

<!--more-->

###Who we are

Before we started to work on this project, we were Dart enthusiasts known as the [Rikulo](http://rikulo.org) team, who have released several Dart libraies, including [UI framework](http://www.rikulo.org/projects/ui), [UI library](https://github.com/rikulo/bootjack), [web server](http://www.rikulo.org/projects/stream), [messaging server](https://github.com/rikulo/ripple), [database client](https://github.com/rikulo/couchclient), etc.

We were all excited by Dart's future worth when Dart was first released in 2011, and right away we started to work with Dart in small fractions of projects. Eventually we moved on to build a full application that consists of Dart majorly. Here we would like to humbly shared some of our experience, hoping to give you some information about developing in Dart.



##Choosing Dart

There are tons of reasons to choose Dart. Among them, the most important ones for us are:

* Dart's strong type system guards us from countless tiny mistakes. Dart Editor, the official IDE, gives quick feedbacks on type errors and auto-completions as well as easier tracing.
* We think the class-based inheritance model is much more intuitive than the prototype-based one.
* Dart offers the chance to use the same language on both client and server side, sharing the same data model as well as code base.
* Dart fixes most of the gotchas in JavaScript. Dart isn't perfect on this, but it does take care of 99% of the old bad surprises.
* Dart has a few popular JavaScript Harmony features available today: Future (promise), Arrow Function, etc.
* Dart is backed up by a strong team, with many high quality official libraries and well organized APIs. Dart is still evolving but the specification is quite stable already. 
* On server side, we prefer event loop model over multi-threading.
* Dart performs tree shaking when compiled to JavaScript. (See below.)

There are also cons of choosing Dart:

* Dart community is way smaller than JavaScript community.
* Communication across Dart and JavaScript isn't trivial.
* It's harder to polyfill APIs in a strong typed language.
* Dart Editor performance is not optimal for large project (yet).

Embraced by strong type support, writing in Dart is much more robust than in JavaScript. Also, Dart is less verbose than Java, and sometimes (for example, with function expression) even less verbose than vanilla JavaScript. In general, working with Dart is comfortable, except for a few things:

* Final field must be initialized at initializer, eariler than constructor body.
* Mixin specification is rather immature, and it won't be fixed before 2.0.
* No generic type parameter for function declaration, only on class. (Of course, this will increase the workload of compiler.)

###Client side

Before Dart VM lands on Chrome, you would expect to deliver your product by compiling it to JavaScript. There are tons of languages which compile to JavaScript, but Dart stands out with a few extra advantages.

* In development, we run Dart natively on Dartium, a browser forked from Chormium with a built in Dart VM. We don't need to compile in this iteration, exempting us from countless interuptions.
* In tests and production, we compile them to JavaScript and run with all major browsers. The Dart-to-JavaScript compiler performs [tree shaking](http://blog.sethladd.com/2013/01/minification-is-not-enough-you-need.html), which trims off unused code from the outcome. This greatly reduces our JavaScript code size.

###Server side

Dart on server side was never a hot topic in the Dart community, but we consider Dart as a strong candidate for server side programming language, because:

* Web service, by its asynchronous nature, works very well with event loop model (over multi-threading).
* Server side code demands much more robustness and security than client. A strong-typed language really comes in handy on this.



##Supporting libraries

Quire is built with around 30 library imports, and of which 10 come from the community, while the rest are released by Dart team. While you may guess there are AngularDART and Polymer.dart if you are a Dart expert, they are actually both absent.

We are not using [AngularDART](https://angulardart.org/), because: 

* We want delicate DOM control. 
* We use unique architectural guidelines to design the client structure, and the paradigm is different from the Angular logic.
* When we surveyed AngularDART it generated a large overhead on compiled JavaScript code size, but this has been [greatly improved](https://github.com/angular/angular.dart/issues/409).

We are not using [Polymer.dart](https://www.dartlang.org/polymer/) either, because:

* Due to encapsulation and event re-targeting, ShadowDOM can't collaborate with selector oriented framework, for example, Bootstrap.
* You can't inject style from the outside of ShadowDOM. If a 3rd party component set is made of Polymer, it's almost impossible for users to change its look-and-feel.

###DQuery & Bootjack

The cornerstones of our client side stack are DQuery and Bootjack, which are both open source projects released by the Rikulo team:

* [DQuery](https://github.com/rikulo/dquery) is a partial porting of jQuery to Dart, focusing on the event delegation system of jQuery. 
* [Bootjack](https://github.com/rikulo/bootjack) is a complete porting of Bootstrap 3, with almost identical CSS and APIs. 

We built our application stack along this way to leverage our knowledge and skills from the JavaScript world.

###Stream

[Stream](http://www.rikulo.org/projects/stream) is our web server, written in pure Dart, equipped with the abilities of routing, filter, server side MVC, etc.
Stream works seamlessly with the event loop model. Writing a request handler is just about chaining a sequence of non-blocking routines. It is not only more productive and also more pleasure to work with than traditional multi-threading model. We also scale our web service and handle HTTPS with nginx, and delegate requests to Stream. With this architecture we are able to spawn and despawn Dart VM individually and upgrade the server without interupting user activities.



##Conclusion

We have an enjoyable experience working with Dart, and we are looking forward to more exciting developments in the Dart community. 
Last but not least, if you are curious about what you can achieve with Dart, come and play with our app, [Quire](https://quire.io)! 

![Quire screenshot](/img/post/dart/quire-screenshot.png)
