---
title: What Makes Go Special?
date: Mon Nov 12 2021 08:27:00 GMT-0700 (PST)
tags:
  - golang
  - development
  - software engineering
---

# What Makes Go Special?

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

## Go prioritizes simplicity over safety

Again, this gets into the core of what Go was meant for. Designing for ease of concurrency and development over ideal memory safety (looking at you Rust). Garbage collection is treated similarly. Rather than requiring developers to worry about memory management, Go handles GC automatically. As a result, it becomes easier to use, but exposes some potential pitfalls if you aren't careful. You can work around these with some special tools Go provides, but you again must have high standards for your engineers when working on these problems.

## Conclusion

When you prioritize good software engineering you have to actually rely on your engineers writing good software. You should not then try to enact request-performance standards or business success as efforts to push the team towards a better product. You must focus on teaching your team to be better engineers and better, more stable code, will follow. Go was built so that you need tohave a team of engineers that either have well established (and good) conventions or a high level of talent (and can work together). If you have either of those solutions, then Go might be the language for you.

For me - I was going to write up a web server in Go and see how it performed, but my interest has been piqued in reading [Why discord switched from Go to Rust](https://discord.com/blog/why-discord-is-switching-from-go-to-rust). So for next time, expect a post on one of those or something _completely_ unrelated to technology.
