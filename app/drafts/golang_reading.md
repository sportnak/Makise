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

So let's talk about Go. Learning about this language is incredibly valuable because it took the experiences of a large scale organization (Google) and identified key tenets of good software engineering. Those tenets directly influenced the development of the language and so from understanding how it came to be, we can learn more about what defines good software engineering. First, [How did it come into existence?](https://talks.golang.org/2012/splash.article) These are effectively my notes and summarization of this article.

## It was meant to make development more productive and scalable

Go was designed to allow developers to build large scale systems. As a result, it's "more about software engineering than programming language research". You can see some of the pain points it resolves in the article linked above. The long short of it is Go is a modern solution for scalable systems. It's design simplifies dependencies, packages, updates, and is still familiar to developers with a background in procedural programming. For example, Go eliminates unnecessary dependencies by throwing a compiler error when extra dependencies are found.

## How much did it improve builds?

Out of the gate, compilation times improved 50x. Removing dependency cycles and condensing the export data in a generated object file so that it's predictable and centralized lead to a reduction in I/O operations and lines read. This is refining software engineering into a science that can be measured in hours, days, <bold>weeks</bold> saved on build times. The first big takeaway towards building a better build system:

<quote>Dependency hygiene trumps code reuse.</quote>

## On Package Mangement

Packages are imported from a path and the name is implicit from the path. You can, however, override the name.

<quote>Go style suggests keeping package names short and clear and obvious in preference to worrying about collisions</quote>

You can even import a package from a remote repository - since dependencies are explicit, they can be downloaded recursively when installing a remote package. Package naming can thus be decentralized and scaled more easily.

## Go adds clarity to development

Through type definitions, function signatures, and even variable casing. Go adds clarity to the development process so that you can quickly identify public/private variables and easily read functions and types. This comes to fruition in the compact scope that Go works with. The scopes are listed as follows

- universe (predeclared identifiers such as int and string)
- package (all the source files of a package live at the same scope)
- file (for package import renames only; not very important in practice)
- function (the usual)
- block (the usual)

By restricting scoping as such, there are a whole host of implementaiton details that improve clarity when writing in Go. For example, there are properties called `receivers` that must be defined on types - removing the need for an implicit `this` variable. Package names are also required when using imports (`io.Reader` instead of `Reader`) which reduces naming collisions and allows you to _immediately_ see who owns what. This provides some really awesome guarantees around developing new packages and avoiding breaking updates.
