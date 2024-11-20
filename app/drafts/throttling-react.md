---
title: Debouncing React Effects
image: /images/advanced.jpeg
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - michael
date: Thur Jul 25 2019 4:42:00 GMT-0700 (PST)
tags:
  - javascript
  - react
---

React is an awesome powerful framework. Today I want to go over an easy way to set up searching with your hooks. Imagine we have an input set up like so:

```jsx
export function SearchInput() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchUpdate = useCallback(async (event) => {
        fetch('/data/search', {
            method: 'POST',
            body: JSON.stringify({
                query: event.target.value,
            })
        }).then(response => setSearchResults(response));
    });

    // imagine this renders our search results as well
    return <Input onChange={handleSearchUpdate} results={searchResults}>
}
```

The first issue is that the request is trigger on every keystroke, so our goal is going to be to debounce that effect. But . When you write out an effect hook, you often run a network request inside of it. First we want to take a promise based effect like the following:

```jsx
/** ... **/

const [query, setQuery] = useState('');
const handleSearchUpdate = useCallback(event => setQuery(event.target.value));

useEffect(function handleQueryUpdate() {
    fetch('/data/search', {
        method: 'POST',
        body: JSON.stringify({
            query,
        })
    }).then(response => setSearchResults(response));
}, [query]);

// manage our query value
return <Input inputValue={query} onChange={handleSearchUpdate} results={searchResults}>
```

And turn it into a promise based effect. Effect functions take a return value that are used to cleanup the function when it's called before completing or when the component is unmounted. This is helpful when a function is potentially called multiple times. It allows us to cancel previous calls to the function like so:

```jsx
useEffect(
  function handleQueryUpdate() {
    let isCancelled = false;

    async function search() {
      const response = await fetch("/data/url", {
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      });
      setSearchResults(response);
    }

    search();
    return () => {
      isCancelled = true;
    };
  },
  [query]
);
```

Here I'm managing an `isCancelled` variable that let's me know if my hook was called again or unmounted - which prevents me from updating state on an unmounted component (a memory leak) or triggering a few successive re-renders. But,

TIL about yarn resolutions.

Phew it's early. Resolutions are a relatively simple concept that allows you to manage sub dependencies of a project. For example, I have a package `face-api.js` that depends on `@tensorflow/tfjs-core@1.2.2`. It also depends on `tfjs-image-recognition-base` but `tfjs-image-recognition-base` also requires `@tensorflow/tfjs-core` but specifies `^1.2.2` and thus resolves to install `1.2.5`.

Unfortunately, these two aren't compatible (yeah let's not go there). So, I needed a way to specify that `tfjs-image-recoginition-base` should be using version `1.2.2` instead of `1.2.5`. The [documentation](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/) leads you to believe that specifying the following will work:

```
"resolutions": {
	"tfjs-image-recognition-base/@tensorflow/tfjs-core": "1.2.2"
}
```

However, you need to change that value to `**/@tensorflow/tfjs-core`. Seems kind of silly and the documentation is kind of unclear. But I think it's because the module is used at a parent level as well. But it works now, and for that I'm glad.
