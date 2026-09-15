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
