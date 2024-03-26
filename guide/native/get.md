# get

## function definition

Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.

- @param {Object} object The object to query.
- @param {Array|string} path The path of the property to get.
- @param {\*} [defaultValue] The value returned for `undefined` resolved values.
- @returns {\*} Returns the resolved value.

## usage

```
const object = { 'a': [{ 'b': { 'c': 3 } }] }

get(object, 'a[0].b.c')
// => 3

get(object, ['a', '0', 'b', 'c'])
// => 3

get(object, 'a.b.c', 'default')
// => 'default'
```

## native implementation

```
const get = (obj, path, defaultValue = undefined) => {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
```

## Analysis

### summary

The fundamental concept behind the get method is to parse the given path argument into an array of keys that can be used to traverse the target object. For instance, a string path like "a.b.c" is converted into an array of keys ['a', 'b', 'c']. The method then iteratively accesses the target object using these keys. At each step, it checks if the key exists in the current level of the object. If the key is found, it proceeds to the next level; if not, it returns the default value. This process allows safe access to nested object properties without the risk of encountering type errors that would occur if a property does not exist.

### detail analisis

#### String.prototype.split.call(path, regexp) Trick

This can accommodate arrays.
In javascript, the call method of a function can be used to invoke any function and allows you to specify the value of this within the function's scope. String.prototype.split is a prototype method of String, typically used on string instances. However, when you invoke it using the call method, you can set this to any value.
If path is not a string but an array, like ['a', 'b'], and you execute the following code:

```
String.prototype.split.call(path, regexp);
```

The javascript engine will convert path to a string before executing the split function. This is because split is a string method, so when it is invoked, the engine will attempt to convert the calling value into a string. For arrays, this conversion is done by calling the array's toString method, which concatenates all array elements into a comma-seperated string.
Consequently, if path is ['a', 'b'], its string conversion would result in "a,b". The split method will be then called on this string, executing the regular expression regexp to perform the split.
For example, if your regexp is /,/, invoking String.prototype.split.call(['a', 'b'], /,/) would first convert the array ['a', 'b'] into the string "a, b" and then split this string at the comma, ultimately yielding ['a', 'b'] - the same as the original array, because once the array is converted into a string and then split by the comma, if effectively returns to the original array elements.

#### filter(Boolean) Trick

This is a very useful way to quickly remove all empty items from an array:

```
const array = [{ good }, null, { great }, undefined]

const truthyArray = array.filter(Boolean)
```

The filter(Boolean) step does the following:

- Each item in the array is passed to the Boolean constructor
- The Boolean constructor coerces each item to true or false depending on whether it’s truthy or falsy
- If the item is truthy, we keep it

This is exactly the same as array.filter(item => Boolean(item))

#### Regexp

/[,[\]]+?/:
Examples of matches include: ,, [,], [], [,][][], etc.

/[,[\].]+?/:
Examples of matches include: ,, ., [.], [,], [], .,[, etc.
