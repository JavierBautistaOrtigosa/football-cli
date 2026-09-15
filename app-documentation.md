# Football CLI - Documentation

## Overview

Football CLI is a Node.js terminal application that consumes real football data from football-data.org and displays it to the user through an interactive CLI menu.

Current scope:

- Leagues
- Teams
- Upcoming Matches

Future scope:

- Players
- Standings
- Top scorers
- Favorites
- Cache
- Express API
- Dashboard
- Electron Desktop App

---

# Architecture

```text
app.js
↓
Application entry point

menu.js
↓
User interaction

football-api.js
↓
External API communication

utils.js
↓
Reusable helper functions
```

---

# Responsibilities

## app.js

Responsibilities:

- Start the application
- Show initial menu

Should NOT:

- Fetch data
- Handle API logic
- Format responses

---

## menu.js

Responsibilities:

- Display menus
- Ask for user input
- Display data
- Handle CLI navigation

Should NOT:

- Contain fetch calls
- Know API URLs
- Know authentication tokens

---

## football-api.js

Responsibilities:

- Communicate with football-data.org
- Send requests
- Handle authentication
- Return processed data

Should NOT:

- Print to console
- Display menus
- Handle CLI interaction

Golden rule:

```text
Fetch
↓
Process response
↓
Return data
```

---

## utils.js

Responsibilities:

- Formatting
- Reusable helpers
- Generic utilities

Examples:

```text
formatLeague()

formatTeam()

formatMatch()

printSeparator()
```

---

# Environment Variables

Stored in:

```text
.env
```

Example:

```env
FOOTBALL_API_TOKEN=YOUR_TOKEN
```

Accessed via:

```js
process
  .env
  .FOOTBALL_API_TOKEN;
```

Never commit:

```text
.env
```

to GitHub.

---

# Supported Competitions

## Premier League

```text
Code: PL
Country: England
```

---

## La Liga

```text
Code: PD
Country: Spain
```

---

## Champions League

```text
Code: CL
Competition: Europe
```

---

# Competition Codes Reference

```text
PL → Premier League

PD → La Liga

CL → UEFA Champions League
```

These codes are used repeatedly in API requests.

Example:

```text
/v4/competitions/PL

/v4/competitions/PD

/v4/competitions/CL
```

---

# Error Handling Strategy

## football-api.js

Always:

```js
try {
  // API call
} catch (error) {
  throw error;
}
```

Responsibilities:

```text
Detect errors
↓
Throw errors
```

---

## menu.js

Always:

```js
try {
  // use api function
} catch (error) {
  console.log(
    "Something went wrong",
  );
}
```

Responsibilities:

```text
Inform user
```

---

# API Exploration Workflow

Whenever consuming a new endpoint:

## Step 1

```js
console.log(
  data,
);
```

---

## Step 2

```js
console.log(
  Array.isArray(
    data,
  ),
);
```

---

## Step 3

```js
console.log(
  Object.keys(
    data,
  ),
);
```

---

## Step 4

Navigate deeper:

```js
console.log(
  data.someProperty,
);

console.log(
  Object.keys(
    data.someProperty,
  ),
);
```

---

## Step 5

Repeat.

Rule:

```text
Inspect
↓
Understand structure
↓
Access data
```

Never guess property names.

---

# Useful Methods

## Arrays

```js
forEach();
```

Loop.

---

```js
map();
```

Transform.

---

```js
filter();
```

Filter.

---

```js
find();
```

Find first result.

---

```js
some();
```

Check existence.

---

## Objects

```js
Object.keys();
```

Get property names.

---

```js
Object.values();
```

Get values.

---

```js
Object.entries();
```

Get keys and values.

---

# HTTP Workflow

```text
fetch()
↓
Response
↓
response.json()
↓
JavaScript Object
```

Example:

```js
const response =
      await fetch(...)

const data =
      await response.json()
```

---

# Current Menu

```text
1 - Leagues
2 - Teams
3 - Upcoming matches
4 - Exit
```

---

# Development Order

## Phase 1

```text
Leagues
```

Display:

```text
Premier League

La Liga

Champions League
```

---

## Phase 2

```text
Teams
```

Display teams belonging to those competitions.

---

## Phase 3

```text
Upcoming matches
```

Display future matches.

---

# Design Philosophy

```text
Understand
>
Memorize
```

```text
Small functions
>
Big functions
```

```text
Inspect first
>
Guess first
```

```text
API logic
≠
UI logic
```

---

# Status

✅ HTTP fundamentals
✅ Fetch
✅ JSON
✅ Environment variables
✅ API authentication
✅ First football API integration
✅ CLI architecture
🚧 Football CLI v1 in development
