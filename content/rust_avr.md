---
title: Rust on Arduino Uno
image: /images/arduino.jpg
imageMeta:
  attribution:
  attributionLink:
featured: false
authors:
  - michael
date: Mon Nov 27 2021 09:35:00 GMT-0700 (PST)
tags:
  - rust
  - development
  - arduino
  - embedded
  - software
  - hardware
---

Rust focuses on balancing ease of use for developers with being a powerful and fast low level programming language. Today I'm going to put that to the test.

I've started reading through [The Book](https://doc.rust-lang.org/book/) and have had my interest piqued - but I want to see how difficult it is to get started with some embedded programs right away. This post will follow the [AVR Rust Guidebook](https://book.avr-rust.com/001-introduction.html) to design and implement a program for my arduino in Rust. Then I'll develop another program for my raspberry PI that communicates with the arduino using the SPI protocol.

## Goals for this project

1. Write an application in Rust
2. Experience life on the cutting edge of Rust (AVR development is on the nightly build still)
3. See if there's something I can contribute to open source

## Getting the Compiler Running

I'm going to assume you're able to read, so I won't re-type the full guidebook from the rust documentation. Instead I'll try to document primarily where things were different or difficult compared to the docs. I already had rust installed and updating the toolchain to use the nightly builds of the compiler was a breeze. I had one small issue building the `hello world` application with the error message `error: ran out of registers during register allocation`. It turns out that while the guidebook sent me from page 2.0 to 3.0 - I needed to install `avr-binutils avr-gcc avrdude` from page 2.1 (I ended up installing `ravedude` instead of `avrdude` for flashing). Also, the first time installing the `gcc` compiler took around 30-45 minutes just so you're ready to go make some coffee or a pizza or something.

While all of that was installing - I spent some time reading the [avr-hal](https://github.com/Rahix/avr-hal) repository to get a better understanding of the crates and pre-defined processes available. I would recommend spending some time here before starting on your own project. I switched to the process defined in `avr-hal` and it worked much more quickly.

The default target is the ATmega328, and I have an Arduino Uno R3 and an Elegoo Uno R3. I'm going to see if this process works the same for both of these boards. However, while researching if there was a difference, I learned that Elegoo is effectively a for-profit Chinese copy of Arduino (since Arduino makes their board design publicly available). So I'd recommend purchasing an Arduino board if you can.

### Specyfing the right rust compiler

Currently, the latest version of the nightly compiler is `nightly-1.51.0` which is associated with the date `2021-01-07`. I tried using a `rust-toolchain.toml` file to specify this, but it didn't work. Instead I ended up using `rustup override set nightly-2021-01-07-x86_64-apple-darwin` because `rustup override set nightly` was setting the version too far forward. You can find your installed versions by doing `rustup which rustc` to determine where the versions existed and then could `ls` the available ones.

### eh_personality

`eh_personality` exists for "exception handling". But the first compiler error I got was `error: language item required, but not found: 'eh_personality'`. This happens because Rust has found panics in your code, and wants to unwind them, but cannot. The solution honestly, was just to copy over the `avr-atmega328p.json` from avr-hal and use that for the program.

## Conclusion

That finally did it. I had a small problem getting serial output from the program. But it turns out that if your program is too big (24kb for me) then it runs too slow and the output never really comes back. Building and running under the `--release` flag reduced the build output to under 2kb. Now I'm off and to the races with my rowing machine program.
