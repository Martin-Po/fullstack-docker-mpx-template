# MPX Fullstack Docker Template 🚀

Este es un **Boilerplate de Arquitectura Profesional** diseñado para acelerar el desarrollo de aplicaciones Full Stack robustas. El stack está optimizado para la productividad, portabilidad y escalabilidad, utilizando un entorno totalmente containerizado.

## 🛠 Stack Tecnológico

- **Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [Material UI (MUI)](https://mui.com/).
- **Backend:** [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/).
- **Base de Datos:** [PostgreSQL 15](https://www.postgresql.org/).
- **Orquestación:** [Docker](https://www.docker.com/) & Docker Compose.

## ✨ Características Principales

- **Arquitectura de Microservicios:** Separación clara entre cliente, servidor y persistencia.
- **Flujo de Desarrollo Optimizado:** Configuración de **Hot-Reload** mediante polling, garantizando la sincronización de archivos entre hosts Windows (NTFS) y contenedores Linux.
- **Dockerización Avanzada:** - **Multi-stage Builds:** Imágenes de producción livianas usando Nginx para servir estáticos.
  - **Docker Secrets:** Gestión segura de credenciales de base de datos y tokens.
- **Autenticación Base:** Estructura de Login y manejo de estado global (Context API) ya implementada.
- **UI Moderna:** Implementación de Material UI con sistema de alertas globales y diseño responsive.

## 🚀 Inicio Rápido

### Requisitos previos
- Docker Desktop instalado.
- Node.js (opcional, para ejecución local fuera de Docker).

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/Martin-Po/fullstack-docker-mpx-template.git](https://github.com/Martin-Po/fullstack-docker-mpx-template.git)
   cd fullstack-docker-mpx-template