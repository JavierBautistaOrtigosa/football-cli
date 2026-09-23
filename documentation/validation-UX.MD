# Refactor Note - Improving League Selection Validation UX

## Problem

After extracting the reusable `selectLeague()` function, invalid league selections were correctly detected:

```js
if (
  Number.isNaN(
    option,
  ) ||
  option <
    1 ||
  option >
    3
) {
  console.log(
    "\nInvalid option. Please try again.\n",
  );
  showLeagues();

  return selectLeague(
    callback,
  );
}
```

However, the error message was never visible to the user.

Example:

```txt
Choose league: 99

1 - La Liga
2 - Premier League
3 - Champions League

Choose league:
```

The validation worked, but the message disappeared.

---

## Root Cause

`showLeagues()` contains:

```js
clearScreen();
```

Therefore the flow became:

```txt
Show error message
↓
showLeagues()
↓
clearScreen()
↓
Error message disappears
```

The terminal was being cleared immediately after printing the validation message.

---

## Solution

Make `showLeagues()` capable of displaying an optional message.

### Before

```js
function showLeagues() {
  clearScreen();

  console.log(
    "1 - La Liga",
  );
  console.log(
    "2 - Premier League",
  );
  console.log(
    "3 - Champions League",
  );
}
```

### After

```js
function showLeagues(
  errorMessage = "",
) {
  clearScreen();

  console.log(
    "1 - La Liga",
  );
  console.log(
    "2 - Premier League",
  );
  console.log(
    "3 - Champions League",
  );

  if (
    errorMessage
  ) {
    console.log(
      `\n${errorMessage}\n`,
    );
  }
}
```

---

## Validation Block

### Before

```js
console.log(
  "\nInvalid option. Please try again.\n",
);

showLeagues();

return selectLeague(
  callback,
);
```

### After

```js
showLeagues(
  "Invalid option. Please try again.",
);

return selectLeague(
  callback,
);
```

---

## Result

Before:

```txt
Choose league: 99

1 - La Liga
2 - Premier League
3 - Champions League

Choose league:
```

After:

```txt
Choose league: 99

1 - La Liga
2 - Premier League
3 - Champions League

Invalid option. Please try again.

Choose league:
```

---

## Benefits

- Keeps validation feedback visible.
- Eliminates the conflict with `clearScreen()`.
- Improves user experience.
- Keeps the responsibility for rendering league-selection screens inside `showLeagues()`.
- Makes future messages easy to implement.

Examples:

```js
showLeagues(
  "Invalid option.",
);
showLeagues(
  "Network error.",
);
showLeagues(
  "Feature coming soon.",
);
```

---

## Design Principle

A screen-rendering function should be responsible for rendering all information related to that screen.

In this case:

```txt
showLeagues()
↓
renders:
- league options
- validation messages
- future status messages
```

This produces a cleaner and more maintainable CLI.
