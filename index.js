// Cannot set properties of NULL error in JavaScript

// ✅ Provide a fallback value when initializing the variable

const fromDb = null;

const obj = fromDb || {};
obj['src'] = 'value'; // 👉️ {src: 'value'}

const arr = fromDb || [];
arr[0] = 'value'; // 👉️ ['value']

// ----------------------------------------------

// ✅ Checking if the variable isn't null

const obj2 = null;

if (obj2 != null) {
  obj2.property = 'value';
}

console.log(obj2); // 👉️ null
