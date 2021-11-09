---
title: Foray into Golang
image: /images/writing.jpg
imageMeta:
  attribution:
  attributionLink:
featured: false
authors:
  - michael
date: Mon Nov 08 2021 21:10:00 GMT-0700 (PST)
tags:
  - golang
  - development
  - microservices
  - create-microservice-app
---

AKA how many projects can I work on concurrently? 🙃

I don't know anyone who doesn't go through phases. I mean, some interests stick for life sure, but in the long run everyone has picked something up for a time, decided it's not for them, and moved on. Consider me guilty of this on all count, so I'm going to attempt to document efforts to encourage myself to push through them. I've got roughly 3-4 different projects happening at the same time for me, so why not add another? Documenting things also provides the classic benefit of [rubber ducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging). So this is going to be the start of my adventures into golang - wherever that may lead. And hopefully I'll start documenting more of the things I've been working on.

I was talking to a friend the other day and we were describing interesting developer tools. [A really cool article](https://netflixtechblog.com/beyond-rest-1b76f7c20ef6) from the Netflix Tech Blog came up that lead to a discussion about a tool like [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) that would allow you to spin up microservices quickly. In theory, you could iterate on graphql schemas and unstructured databases as a proof of concept. Then you could run with that if you plan to continue using a noSQL database or you could stamp out database schemas and deploy a production application that is more stable. Defining the API and the database (relationally) at the same time would be pretty neat and could allow you to quickly spin up a series of microservices that you could aggregate. Honestly, the directions you could take it seem infinite but I got inspired (however briefly) so I'm going to see what I can come up with.

I'll definitely get more into that in the future, but I think I'm going to take the initial steps in that project using golang. I find the language interesting as it's very performant, minimalist, and encourages good development practices. I've started [here](https://reactjs.org/docs/create-a-new-react-app.html) with my reading if you want to follow along, but while golang still seems to have a relatively modest following I like it's chances for the future.

Concurrency is a big part of golang and I think it's an interesting part of the future of programming. Hardware has evolved to a point where the every day average project doesn't necessarily <bold>need</bold> to focus on performance. Relying on this has allowed our applications to grow in a linear fashion. But if we were to combine these hardware evolutions with seriously performant code - could we maybe see a significant change in the applications that we develop? Additionally, quantum computing is a thing that exists (that I know very little about), but when that becomes commonplace how valuable will it be to be able to think in concurrent performant applications?

I really don't know, but I want to dig more into these questions. So I'm starting a journey into golang and seeing what I can come up with. I'll start simple and probably work on building out a basic microservice in golang for some other projects I'm working on. Then I'll see if I can't take it a step further with the microservices tool. And then hopefully, I'll be comfortable enough to get into some machine learning applications which is where I think the real fun will be. So stay tuned!
