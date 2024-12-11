## Nit Picky
I like to consider myself to be not very nit picky. But there are few things that I think are easy wins that can help you save time in the long run. Let's go over a couple of them.

### Modifying Function Parameters
This may seem like an obvious one, but most of the time, you should not be modifying the function parameters.

Here's an example:
```js
function innocuousFn(objectParameter) {
    objectParameter['isDirty'] = true
    return objectParameter
}

let myObject = { isDirty: false }
let result = innocuousFn(myObject)
console.log(myObject) // isDirty: true
console.log(result) // isDirty: true

myObject = { isDirty: false }
result = innocuousFn(JSON.parse(JSON.stringify((myObject)))) // pass a copy to avoid modification
console.log(myObject) // isDirty: false
console.log(result) // isDirty: true

```

As you can see, the first call to this seemingly innocuous function modifies `myObject` without the caller knowing. The caller might then have to update their call to the second format where they must do a deep copy of the object they are passing in to avoid the modification. As the writer of the innocuous function you don't know if an object is passed in by reference or if it was passed in as a copy. The caller has to dig in to why their application code isn't working and it's because their base object is getting modified unbeknownst to them. Finally, it can hinder code reusability. We'll have trouble using this method in other locations because there may be instances where we don't want to modify the original. 

If you do feel like you have a good reason to modify the parameters of your function, make sure you are clear in your documentation. Either adding JSDOC (or similar) comments for IDE visibility and then naming the method something like `innocuousMutationFn` to indicate that the function performs a mutation of the parameters will reduce difficulties with the function down the road.

```js

/**
 * @param objectParameter: mutated by this function
 **/
function innocuousMutationFn(objectParameter) {
    objectParameter['isDirty'] = true
    return objectParameter
}

```

### Using == vs. === 
Another common pitfall that I've seen lead to hours of debugging for a one character change is the comparison operator in JS. The quick explanation is that `==` does a type coercion, meaning that it will attempt to push the two values in the same type before checking for equality. `===`, on the other hand, will check the types are the same before returning `true`. As a result, my default guideline is to only use `==` when comparing with `null` - here are some examples:

```js
1 == '1' // true
1 == '001' // true
1 === '1' // false
1 === 1 // true

'1' == true // true
'0' == true // false
!!'0' // true

null == undefined // true
null === undefined // false
```

As you can see from the first few comparisons, using the `==` operator is pretty great when we have varying values to compare to. This might be an input and we don't want to worry about `parseInt`, we just want to check if the user put in a 1. All is good and well. However, when we move further down this list of examples, things get a little more hairy. `'1'` is coerced into `true` which is fine, `'0'` is coerced into `false` which also makes sense - but `!!'0'` ( or `Boolean('0')`) evaluates to `true`! This is inconsistent because you would probably expect that `if (input == true)` should have the same execution as `if (Boolean(input))` but it doesn't. So using `===` is generally more predictable and therefore safer to use as a default.

The final example compares `null` and `undefined` which in most cases are the same. If you want to check if a value has been set (even to null) then `myObject['key'] === undefined` makes sense. But most of the time you want to know if it has an actual value, and so doing `myObject['key'] == null` will check both which is what we want a majority of the time.

There's obviously a reason why JS supports both `==` and `===`, so you need to evaluate it's use on a case by case basis. My rule of thumb is if I see `x === null` or `x == 1` then there is something that we need to dig further in to.