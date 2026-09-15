# Nota Mental - Error clásico con fetch() y response.json()

## Problema

Tenía esto:

```js
const response =
  await fetch(
    url,
  );

console.log(
  response,
);
```

Y esperaba ver los datos de la API.

Pero veía algo parecido a:

```js
Response {
  status: 200,
  headers: ...
}
```

---

## Qué pasó

Olvidé hacer:

```js
const data =
  await response.json();
```

---

## Regla de Oro

```text
fetch()
↓
Response

response.json()
↓
Objeto JavaScript
```

---

## El flujo correcto

```js
const response =
  await fetch(
    url,
  );

const data =
  await response.json();

console.log(
  data,
);
```

---

## Error relacionado

Si hago:

```js
const data =
  response.json();

console.log(
  data,
);
```

Obtendré:

```text
Promise { <pending> }
```

Porque:

```js
response.json();
```

también devuelve una Promise.

---

## Recordatorio

Hay DOS awaits:

```js
const response =
  await fetch(
    url,
  );

const data =
  await response.json();
```

Primer await:

```text
Esperar respuesta HTTP
```

Segundo await:

```text
Esperar conversión JSON
```

---

## Pregunta de depuración

Si veo algo raro, preguntarme:

```text
¿Estoy viendo un Response?

o

¿Estoy viendo el JSON?
```

Porque son cosas distintas.

---

## Checklist rápido APIs

```js
const response = await fetch(...)
console.log(response.status)
const data = await response.json()

console.log(data)
console.log(Array.isArray(data))
console.log(Object.keys(data))
```

No adivinar.
Inspeccionar primero.

# Nota Mental - ¿Es un Array o un Object?

## Situación

Recibí datos de una API:

```js
console.log(
  data.competitions,
);
```

y me quedé bloqueado porque no sabía si podía hacer:

```js
data.competitions.forEach(...)
```

---

## Solución

Comprobar siempre:

```js
console.log(
  Array.isArray(
    data.competitions,
  ),
);
```

Resultado:

```text
true
```

↓

Puedo usar:

```js
data.competitions.forEach(...)
```

---

Resultado:

```text
false
```

↓

No usar forEach.

Explorar con:

```js
Object.keys(
  data.competitions,
);
```

---

## Regla Mental

Nunca asumir.

Comprobar.

```js
Array.isArray(
  data,
);
```

antes de intentar:

```js
data[0]

data.forEach(...)

data.map(...)
```

---

## Check rápido cuando exploro APIs

```js
console.log(
  Array.isArray(
    data,
  ),
);

console.log(
  Object.keys(
    data,
  ),
);
```

Estas dos líneas suelen decirme inmediatamente cómo navegar el JSON.

---

## Recordatorio

Un objeto puede contener arrays:

```js
{
      competitions: [...]
}
```

Por tanto:

```js
data;
```

puede ser un objeto

y

```js
data.competitions;
```

puede ser un array.

# API Exploration - Basic Questions Checklist

Cuando consumo una API nueva, siempre me hago estas preguntas:

---

## 1. ¿La petición ha funcionado?

```js
console.log(
  response.status,
);

console.log(
  response.ok,
);
```

---

## 2. ¿He convertido la respuesta a JSON?

```js
const data =
  await response.json();
```

Recordar:

```text
response ≠ data
```

---

## 3. ¿Qué tipo de dato tengo?

```js
console.log(
  typeof data,
);

console.log(
  Array.isArray(
    data,
  ),
);
```

---

## 4. ¿Qué propiedades existen?

```js
console.log(
  Object.keys(
    data,
  ),
);
```

---

## 5. ¿Qué propiedad parece interesante?

```js
console.log(
  data.competitions,
);

console.log(
  data.results,
);

console.log(
  data.matches,
);
```

---

## 6. ¿Es un array?

```js
console.log(
  Array.isArray(
    data.competitions,
  ),
);
```

Si:

```text
true
```

↓

```js
data.competitions.forEach(...)
```

---

## 7. ¿Cómo es el primer elemento?

```js
console.log(
  data
    .competitions[0],
);
```

---

## 8. ¿Qué propiedades tiene ese elemento?

```js
console.log(
  Object.keys(
    data
      .competitions[0],
  ),
);
```

---

## 9. ¿Qué datos necesito realmente?

Ejemplo:

```js
competition.id;

competition.name;

competition.code;
```

---

## 10. Ejemplo que he usado:

```js
console.log(
  typeof data,
);

console.log(
  Array.isArray(
    data,
  ),
);

console.log(
  Array.isArray(
    data.competitions,
  ),
);

console.log(
  Object.keys(
    data,
  ),
);
```

## Flujo Mental

```text
fetch()
↓
response.json()
↓
Object.keys()
↓
Array.isArray()
↓
Primer elemento
↓
Object.keys()
↓
Extraer datos
↓
Return
```

---

## Regla de Oro

No adivinar.

Inspeccionar.

```js
console.log(
  data,
);

console.log(
  Object.keys(
    data,
  ),
);

console.log(
  Array.isArray(
    data,
  ),
);
```

Primero entender la estructura.

Después programar.

# Nota Rápida - Error vs error

```js
throw new Error(
  "Something went wrong",
);
```

`Error` (mayúscula)

↓

Clase nativa de JavaScript.

---

```js
catch(error) {

}
```

`error` (minúscula)

↓

Variable que contiene el Error capturado.

---

Mentalidad:

```text
Error
↓
Constructor

error
↓
Instancia capturada
```

Ejemplo:

```js
throw new Error('Boom')

catch(error) {

      console.log(
            error.message
      )

}
```

# Nota Rápida - Promise { <pending> }

Si veo:

```text
Promise { <pending> }
```

preguntarme:

```text
¿Estoy olvidando un await?
```

Ejemplo:

❌

```js
const competitions =
  getLeagues();
```

Resultado:

```text
Promise { <pending> }
```

✅

```js
const competitions =
  await getLeagues();
```

Porque:

```text
Toda función async
↓
Devuelve una Promise
```

# Nota - map(), console.table() y Mutación

## map()

```js
const newArray =
      oldArray.map(...)
```

`map()`:

```text
Array original
↓
Transformación
↓
Nuevo array
```

No modifica el array original.

---

## Ejemplo

```js
const names =
  teams.map(
    (
      team,
    ) =>
      team.name,
  );
```

Resultado:

```js
names;
```

↓

```js
[
  "Arsenal",
  "Chelsea",
  "Liverpool",
];
```

---

## Mi caso

```js
competitions.map(
  (
    competition,
  ) => ({
    code: competition.code,
    country:
      competition
        .area
        .name,
    name: competition.name,
    type: competition.type,
    id: competition.id,
  }),
);
```

Produce:

```js
[
      {
            code: 'PL',
            country: 'England',
            name: 'Premier League',
            type: 'LEAGUE',
            id: 2021
      },
      ...
]
```

---

## ¿Dónde se guarda?

Aquí:

```js
const leagues =
      competitions.map(...)
```

↓

El nuevo array se llama:

```js
leagues;
```

---

Aquí:

```js
console.table(
      competitions.map(...)
)
```

↓

No se guarda.

Se crea temporalmente.

```text
competitions
↓
map()
↓
nuevo array temporal
↓
console.table()
↓
desaparece
```

---

## console.table()

```js
console.table(
  array,
);
```

Muestra un array de objetos como una tabla.

No necesita:

```js
console.log();
```

porque ya imprime directamente en consola.

---

## Diferencia rápida

```text
forEach()
↓
Recorrer elementos

map()
↓
Crear nuevo array

console.table()
↓
Mostrar datos
```

---

## Regla Mental

```text
map()
↓
Transformar

console.table()
↓
Visualizar

Sin mutar el array original
```

## filter() con múltiples valores

Al filtrar varios valores concretos, existen varias opciones.

### Opción 1: OR (||)

Útil cuando hay pocos valores.

```js
competitions.filter(
  (
    competition,
  ) =>
    competition.code ===
      "PD" ||
    competition.code ===
      "PL" ||
    competition.code ===
      "CL",
);
```

Se lee:

"Quiero las competiciones cuyo código sea PD, PL o CL."

### Opción 2: Array + includes() ✅ Recomendado

Más escalable y fácil de mantener.

```js
const availableCodes =
  [
    "PD",
    "PL",
    "CL",
  ];

const competitionsAvailable =
  competitions.filter(
    (
      competition,
    ) =>
      availableCodes.includes(
        competition.code,
      ),
  );
```

Se lee:

"Quiero las competiciones cuyo código esté dentro de la lista de códigos permitidos."

Ventajas:

- Más limpio.
- Más legible.
- Fácil añadir nuevos valores.

```js
const availableCodes =
  [
    "PD",
    "PL",
    "CL",
    "BL1",
    "SA",
  ];
```

No es necesario modificar el filter().

### Cuándo usar &&

Se utiliza cuando todas las condiciones deben cumplirse.

```js
competition.type ===
  "LEAGUE" &&
  competition
    .area
    .name ===
    "England";
```

Se lee:

"Quiero competiciones que sean ligas y además sean de Inglaterra."

### Regla mental

- Varias opciones posibles → `||` o `includes()`
- Varias condiciones obligatorias → `&&`
- Lista configurable de valores → `includes()`

Patrón muy común en JavaScript:

```js
array.filter(
  (
    item,
  ) =>
    allowedValues.includes(
      item.prop,
    ),
);
```
