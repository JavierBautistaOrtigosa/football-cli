# Contexto Actual - Plan Backend (Portfolio Project)

## Situación

Actualmente tengo un proyecto llamado Football CLI desarrollado con:

- Node.js
- JavaScript
- Fetch API
- Football Data API
- dotenv
- readline

La CLI ya está bastante avanzada y actualmente permite:

### Funcionalidades implementadas

- Mostrar competiciones disponibles
- Mostrar equipos por competición
- Mostrar upcoming matches
- Navegación entre menús
- Return to menu
- Exit flow
- Limpieza de pantalla consistente
- Filtrado de partidos futuros (TIMED + SCHEDULED)
- Separación entre lógica de UI y acceso a datos

### Estructura actual

```txt
football-cli
│
├── app.js
├── menu.js
├── football-api.js
├── utils.js
└── .env
```

### Arquitectura actual

```txt
CLI
│
├─ menu.js
│
└─ football-api.js
     ↓
Football Data API
```

---

# Objetivo a medio plazo

Quiero aprender backend de forma seria y construir una API propia.

La idea es terminar teniendo 3 proyectos conectados:

```txt
football-cli
↓
football-backend-api
↓
postgresql
```

Y más adelante:

```txt
football-react-frontend
↓
football-backend-api
↓
postgresql
```

---

# Objetivo de aprendizaje Backend

Quiero aprender correctamente:

## Fase 1

- HTTP
- Request / Response
- Status Codes
- Routing
- JSON APIs

## Fase 2

- Express
- Middleware
- Controllers
- Services
- REST APIs

## Fase 3

- PostgreSQL
- SQL
- Relaciones
- Queries
- CRUD

## Fase 4

- Arquitectura Backend
- Organización de carpetas
- Variables de entorno
- Manejo de errores

---

# Objetivo Portfolio

No quiero simplemente aprender teoría.

Quiero terminar con una API que pueda enseñar en GitHub como proyecto de portfolio.

La API debería verse profesional y seguir buenas prácticas.

---

# Importante

No quiero empezar construyendo cosas demasiado complejas.

Prefiero una progresión paso a paso:

1. Entender HTTP
2. Crear servidor básico
3. Introducir Express
4. Crear endpoints REST
5. Introducir PostgreSQL
6. Conectar todo
7. Mejorar arquitectura

---

# Relación con la CLI

La CLI seguirá consumiendo Football Data API por ahora.

Más adelante quiero que la CLI consuma mi propia API.

Por lo tanto, cuando llegue ese momento, me gustaría tener una API capaz de servir:

- Competitions
- Teams
- Matches

primero desde Football Data API y más adelante desde PostgreSQL.

---

# Estilo de aprendizaje que prefiero

- Explicaciones claras y técnicas
- Aprender haciendo
- Mucha práctica
- Nada de copiar proyectos completos
- Quiero entender cada decisión arquitectónica
- Quiero construir algo que pueda defender en una entrevista técnica

Actúa como mentor backend y ayúdame a construir el proyecto desde cero de forma profesional.
