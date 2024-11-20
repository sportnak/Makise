---
title: Day One
image: /images/day_one.jpg
imageMeta:
  attribution:
  attributionLink:
featured: false
authors:
  - michael
date: Mon 18 2024 11:35:00 GMT-0700 (PST)
tags:
  - development
  - software
  - career
  - growth
  - temporal
---

## Random Thoughts
Every day is day one for something. The challenge is finding out what that thing is.

Once you find that thing, take the time to evaluate it. Think about if it's a growth opportunity, a canary, or just something new. I think a lot of people tend to ignore the new thing in their day. The ones who do see the new thing often see it as the "canary in the coal mine" or as a growth opportunity. It's an action item that forecasts good or bad things to come. But there's not enough time spent just holding that new thing.

## Temporal.io

I recently came across temporal.io and I think it's an amazing tool. It allows you to build and deploy amazingly complex, reliable workflows with relative ease. I recently built a machine learning pipeline with it. The design was to take customer data and train a machine learning model nightly or weekly. In just a couple weeks I was able to move our scripty python process for running this into a temporal workflow that was stable and resilient.

One of my favorite aspects of this framework/platform is the way it encourages good development principles. Your process is broken up into workflows and activities. A Workflow is an orchestrator - and as such, it should only contain deterministic code. An Activity is where you run your filesystem operations or network requests. Just this simple separation of concerns is one of the core principles of good SOLID programming. Temporal also ends up encouraging you to split up your work because it's designed to be scalable horizontally moreso than vertically. Simply add more workers and break your work down into smaller tasks.

I've gotten to use it professionally, but look forward to using it locally to get a chance to learn more about how I can design and develop strong repeatable workflows locally.

Cheers!