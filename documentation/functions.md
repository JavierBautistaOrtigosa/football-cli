# JavaScript Notes - Functions as First-Class Citizens

## Key Idea

One of the most important concepts in JavaScript is:

> Functions are values.

This means a function can be treated just like a string, number, or object.

For example:

```js
const name =
  "David";
```

stores a string in a variable.

Likewise:

```js
const callback =
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  };
```

stores a function in a variable.

---

## Functions Can Be Passed as Arguments

Because functions are values, they can be passed to other functions.

Example:

```js
selectLeague(
  callback,
);
```

or directly:

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  },
);
```

In this case, the argument being passed is an entire function.

---

## Anonymous Callback Functions

This:

```js
async (
  competitionCode,
) => {
  await showTeams(
    competitionCode,
  );
};
```

is a complete function.

The only difference is that it has no name.

Equivalent named version:

```js
async function myCallback(
  competitionCode,
) {
  await showTeams(
    competitionCode,
  );
}
```

Used as:

```js
selectLeague(
  myCallback,
);
```

---

## Three Equivalent Ways

### 1. Named Function

```js
async function myCallback(
  competitionCode,
) {
  await showTeams(
    competitionCode,
  );
}

selectLeague(
  myCallback,
);
```

### 2. Anonymous Function Expression

```js
selectLeague(
  async function (
    competitionCode,
  ) {
    await showTeams(
      competitionCode,
    );
  },
);
```

### 3. Arrow Function

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  },
);
```

All three achieve the same result.

---

## Why Use an Anonymous Function?

If a function will only be used once, giving it a name is often unnecessary.

Instead of:

```js
async function myCallback(
  competitionCode,
) {
  await showTeams(
    competitionCode,
  );
}

selectLeague(
  myCallback,
);
```

we can simply write:

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  },
);
```

This is shorter and easier to read.

---

## What Happens Internally?

Given:

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  },
);
```

Inside `selectLeague()`:

```js
callback(
  "PD",
);
```

effectively becomes:

```js
(async (
  competitionCode,
) => {
  await showTeams(
    competitionCode,
  );
})(
  "PD",
);
```

which means:

```js
competitionCode =
  "PD";
```

and ultimately executes:

```js
await showTeams(
  "PD",
);
```

---

## Why This Pattern Is Powerful

`selectLeague()` does not need to know what happens after a league is selected.

For Teams:

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showTeams(
      competitionCode,
    );
  },
);
```

For Matches:

```js
selectLeague(
  async (
    competitionCode,
  ) => {
    await showMatches(
      competitionCode,
      "SCHEDULED",
    );
  },
);
```

The selector always does the same job:

```txt
User selects a league
↓
Competition code is obtained
↓
Callback is executed
```

The callback decides what happens next.

---

## Mental Model

```txt
selectLeague(...)
        │
        ▼
User selects "La Liga"
        │
        ▼
callback('PD')
        │
        ▼
showTeams('PD')
```

or:

```txt
selectLeague(...)
        │
        ▼
User selects "La Liga"
        │
        ▼
callback('PD')
        │
        ▼
showMatches('PD', 'SCHEDULED')
```

---

## Takeaway

Functions in JavaScript can:

- Be stored in variables
- Be passed as arguments
- Be returned from other functions
- Be executed later

This concept is known as:

```txt
Functions are First-Class Citizens
```

Understanding this idea is fundamental because it appears
