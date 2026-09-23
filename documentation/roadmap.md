# Football CLI - Portfolio Roadmap

## ✅ Implementado

### Core Features
- [x] Mostrar competiciones disponibles
- [x] Mostrar equipos por competición
- [x] Mostrar Upcoming Matches
- [x] Filtrar partidos pendientes (TIMED + SCHEDULED)
- [x] Salir de la aplicación

### API Integration
- [x] Consumo de Football Data API
- [x] Uso de Async/Await
- [x] Uso de Fetch
- [x] Manejo básico de errores HTTP
- [x] Variables de entorno con dotenv

### CLI Navigation
- [x] Menú principal
- [x] Menú de selección de ligas
- [x] Return to Menu
- [x] Exit Flow
- [x] Navegación funcional entre pantallas

### UX
- [x] Helper clearScreen()
- [x] Sustitución de console.clear()
- [x] Limpieza consistente de pantalla
- [x] Eliminación de logs de depuración
- [x] Flujo visual consistente

### Code Structure
- [x] Separación API/UI
- [x] football-api.js
- [x] menu.js
- [x] utils.js

---

## 🎯 Prioridad Alta (Próximas sesiones)

### Input Validation
- [ ] Validar opciones inválidas
- [ ] Validar entradas vacías
- [ ] Validar números fuera de rango
- [ ] Mostrar mensajes amigables al usuario

### Date Formatting
- [ ] Formatear fechas ISO
- [ ] Mostrar fechas legibles para humanos
- [ ] Mejorar presentación de Upcoming Matches

### Interactive Menu
- [ ] Migrar readline a Inquirer
- [ ] Navegación con flechas ↑ ↓
- [ ] Selección interactiva
- [ ] Mejor experiencia de usuario
- [ ] Eliminar introducción manual de números

### League Selector Refactor
- [ ] Eliminar lógica duplicada
- [ ] Crear selector reutilizable
- [ ] Centralizar configuración de ligas

---

## 🚀 Mejoras de Portfolio

### Code Quality
- [ ] Centralizar constantes
- [ ] Centralizar mensajes de la aplicación
- [ ] Reducir duplicación de código
- [ ] Revisar estructura general del proyecto

### Error Handling
- [ ] Manejo elegante de errores de red
- [ ] Mensajes amigables para el usuario
- [ ] Recovery flow cuando falle la API

### Terminal UX
- [ ] Colores con Chalk
- [ ] Resaltar estados de partidos
- [ ] Mejorar legibilidad de tablas

---

## 📁 GitHub / Portfolio

### README Profesional
- [ ] Descripción del proyecto
- [ ] Características principales
- [ ] Tecnologías utilizadas
- [ ] Instalación
- [ ] Configuración del token API
- [ ] Uso de la aplicación
- [ ] Capturas de pantalla
- [ ] Mejoras futuras

### Presentación
- [ ] GIF demostrativo
- [ ] Screenshots
- [ ] Limpiar commits antes de publicar

---

## ⭐ Bonus

### Testing
- [ ] Configurar Jest
- [ ] Tests para funciones auxiliares
- [ ] Tests básicos de validación

### Future Features
- [ ] League Standings
- [ ] Top Scorers
- [ ] Team Search
- [ ] Match Search
- [ ] Favorites

---

## 📊 Estado Actual

Functional CLI: 85%

Portfolio Ready: 70%

Objetivo para v1.0:
- Input Validation
- Date Formatting
- Interactive Menu
- League Selector Refactor
- Professional README

Estimación: 3-5 sesiones más de trabajo.