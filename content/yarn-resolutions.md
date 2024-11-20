---
title: Yarn Resolutions
date: Thur Jul 25 2019 4:42:00 GMT-0700 (PST)
tags:
  - javascript
  - yarn
---

TIL about yarn resolutions.

Phew it's early. Resolutions are a relatively simple concept that allows you to manage sub dependencies of a project. For example, I have a package `face-api.js` that depends on `@tensorflow/tfjs-core@1.2.2`. It also depends on `tfjs-image-recognition-base` but `tfjs-image-recognition-base` also requires `@tensorflow/tfjs-core` but specifies `^1.2.2` and thus resolves to install `1.2.5`.

Unfortunately, these two aren't compatible (yeah let's not go there). So, I needed a way to specify that `tfjs-image-recoginition-base` should be using version `1.2.2` instead of `1.2.5`. The [documentation](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/) leads you to believe that specifying the following will work:

```
"resolutions": {
	"tfjs-image-recognition-base/@tensorflow/tfjs-core": "1.2.2"
}
```

However, you need to change that value to `**/@tensorflow/tfjs-core`. Seems kind of silly and the documentation is kind of unclear. But I think it's because the module is used at a parent level as well. But it works now, and for that I'm glad.
