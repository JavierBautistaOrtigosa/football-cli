# Roadmap Definitivo - Football Data Ecosystem

## Versión Intensiva (4 horas diarias)

Objetivo:

Construir un ecosistema de aplicaciones relacionadas con fútbol mientras aprendo backend moderno.

No aprenderé tecnologías aisladas.

Aprenderé conceptos necesarios para construir proyectos reales.

Cada fase debe producir algo visible en GitHub.

---

# Estado Actual

✅ JavaScript Básico

✅ Node.js Básico

✅ Arrays

✅ Objetos

✅ Funciones

✅ Módulos

✅ JSON

✅ File System

✅ CRUD

✅ Validaciones

✅ Modularización

✅ Callbacks

✅ ToDo App CLI v1 Finalizada

✅ Primer Servidor HTTP

---

# Semana 1 - HTTP Fundamentals

Objetivo:

Entender cómo se comunica un navegador con un servidor.

Temas:

✅ http module

✅ createServer()

✅ request

✅ response

✅ response.end()

✅ server.listen()

⬜ request.url

⬜ request.method

⬜ Routing manual

⬜ Status Codes

⬜ Headers

Proyecto:

Football Server Demo

Rutas:

```text
/
/teams
/players
/matches
```

Resultado:

Comprensión sólida de HTTP.

---

# Semana 2 - APIs y Consumo de Datos

Objetivo:

Convertirme en cliente HTTP.

Temas:

⬜ fetch()

⬜ JSON

⬜ async / await

⬜ Manejo de errores

⬜ APIs públicas

Concepto clave:

```text
Mi App
↓
API externa
↓
JSON
↓
Procesamiento
```

Mini proyecto:

Football Data Explorer

Funcionalidades:

✅ Buscar equipo

✅ Ver clasificación

✅ Ver resultados

✅ Ver partidos

Resultado:

Primer consumo real de APIs.

---

# Semana 3 - Football CLI v1

Objetivo:

Construir la primera app seria.

Tecnologías:

```text
Node
CLI
HTTP
Fetch
JSON
```

Funcionalidades:

✅ Menú principal

✅ Ver clasificación

✅ Ver resultados

✅ Ver próximos partidos

✅ Buscar equipo

✅ Buscar jugador

✅ Navegación por menús

✅ Validaciones

Arquitectura:

```text
menu.js

football-api.js

services.js

utils.js
```

Resultado:

Primer proyecto portfolio.

Publicación:

✅ GitHub

✅ README profesional

---

# Semana 4 - Football CLI Pro

Objetivo:

Convertir el proyecto en algo más profesional.

Funcionalidades:

✅ Favoritos

✅ Equipos guardados

✅ Jugadores favoritos

✅ Persistencia local

✅ Configuración

✅ Historial de búsquedas

✅ Refactors

✅ Mejor arquitectura

Resultado:

Football CLI Pro

Primer proyecto realmente enseñable.

---

# Primer Hito Importante

Tiempo estimado:

4 semanas

Portfolio:

✅ Football CLI

✅ Football CLI Pro

✅ HTTP

✅ APIs

✅ Arquitectura Modular

---

# Semana 5 - Express

Objetivo:

Entender por qué Express existe.

Temas:

⬜ app.listen()

⬜ app.get()

⬜ app.post()

⬜ request

⬜ res

⬜ Middleware

⬜ Routing

Concepto clave:

```text
Express simplifica HTTP.
```

Mini proyecto:

Football API Skeleton

---

# Semana 6 - Football API

Objetivo:

Crear mi propia API.

Endpoints:

```text
GET /teams

GET /players

GET /matches

GET /standings
```

Temas:

⬜ REST

⬜ JSON responses

⬜ Controladores

⬜ Rutas

Resultado:

Football API v1

---

# Semana 7 - Football API Pro

Objetivo:

Mejorar arquitectura.

Temas:

⬜ Services

⬜ Controllers

⬜ Error handling

⬜ Configuración

⬜ Logging básico

Resultado:

API lista para evolucionar.

---

# Semana 8-9 - Base de Datos

Objetivo:

Eliminar dependencia de JSON.

Opciones:

```text
SQLite
o
MongoDB
```

Temas:

⬜ CRUD DB

⬜ Modelado

⬜ Consultas

⬜ Persistencia real

Resultado:

Football API v2

---

# Mes 3 - Dashboard Web

Objetivo:

Visualizar datos.

Frontend:

```text
HTML

CSS

JavaScript
```

Funcionalidades:

✅ Clasificación

✅ Equipos

✅ Jugadores

✅ Resultados

✅ Partidos

Consumirá:

```text
Football API v2
```

Resultado:

Football Dashboard

---

# Mes 4 - Autenticación

Temas:

⬜ Registro

⬜ Login

⬜ Password Hashing

⬜ JWT

Funcionalidades:

✅ Usuario

✅ Equipos favoritos

✅ Jugadores favoritos

---

# Mes 5 - Desktop App

Tecnología:

```text
Electron
```

Objetivo:

Transformar todo el ecosistema en una aplicación instalable.

Proyecto:

Football Desktop App

Funcionalidades:

✅ Dashboard

✅ Favoritos

✅ Estadísticas

✅ API propia

✅ Persistencia

---

# Proyecto Portfolio Final

```text
Football CLI
↓
Football CLI Pro
↓
Football API
↓
Football API Pro
↓
Football Dashboard
↓
Football Desktop App
```

---

# Objetivo a 30 Días

Tener publicado en GitHub:

✅ Football CLI

✅ Football CLI Pro

✅ HTTP

✅ APIs

✅ Arquitectura modular

✅ README profesional

✅ Proyecto enseñable

---

# Regla Principal

No memorizar.

Entender.

Si un concepto no hace click:

```text
Parar
↓
Reducir ejemplo
↓
Entender
↓
Continuar
```

---

# Próximo Paso Inmediato

HTTP

Tema:

request.url

Primer Routing Manual:

```js
if (
  request.url ===
  "/"
) {
  response.end(
    "Home",
  );
} else if (
  request.url ===
  "/teams"
) {
  response.end(
    "Teams",
  );
} else if (
  request.url ===
  "/players"
) {
  response.end(
    "Players",
  );
} else {
  response.end(
    "Not Found",
  );
}
```
