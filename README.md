# clinic-flow
Backend modular para la gestión interna de centros de salud. Permite organizar operativos, derivar pacientes a especialidades y asignar responsables por área. Desarrollado en Node.js + TypeScript siguiendo principios de Arquitectura Hexagonal (Ports &amp; Adapters).

## 🚀 Tecnologías

- Node.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- Arquitectura Hexagonal (Ports & Adapters)

## 📐 Estructura

El proyecto sigue principios de arquitectura hexagonal, separando las responsabilidades en capas bien definidas:

- `domain`: entidades y contratos (interfaces)
- `application`: casos de uso y DTOs
- `infrastructure`: adaptadores como ORM, base de datos, servicios externos, controladores, rutas y entrada HTTP

- `config`: setup general (DB, express, middlewares, etc.)

## 🎯 Objetivos

- Practicar arquitectura limpia con modularidad real
- Reflejar flujos típicos de atención médica en una app backend
- Simular buenas prácticas de desarrollo profesional (PR, ramas, testeo)

---

> Este repositorio también se utiliza como ejercicio de actividad diaria en GitHub, documentando la evolución de features mediante commits y ramas por tarea.

## ⚙️ Instalación

Cloná el repositorio y seguí estos pasos para correr el proyecto en modo desarrollo:

```bash
# Clonar el repo
git clone https://github.com/kislo-Luis/clinic-flow.git
cd clinic-flow

# Instalar dependencias
npm install

# Correr el proyecto en modo desarrollo
npm run dev
