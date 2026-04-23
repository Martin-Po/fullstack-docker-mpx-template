# SmartCatalog 📋✨

**SmartCatalog** es un sistema Full Stack de gestión de productos diseñado para cerrar la brecha entre la carga de datos manual y la generación de activos comerciales (PDF). 

Este proyecto nace de una necesidad real: permitir que un usuario sin conocimientos técnicos pueda actualizar su catálogo, mantener un Excel sincronizado para sus clientes y generar volantes de venta profesionales con un solo clic, sin depender de terceros.

---

## 🚀 Propósito y Valor de Negocio

El sistema transforma un proceso manual y fragmentado en un flujo de trabajo automatizado:
1.  **Interfaz Intuitiva:** Formulario simple para Carga/Edición/Baja de productos con imágenes.
2.  **Sincronización Bidireccional:** Integración con **Google Sheets API** para espejar los cambios en un Google Drive público automáticamente.
3.  **Generación de Activos (PDF):** Motor de renderizado dinámico para crear volantes con carátula, categorías organizadas y contratapa, listos para enviar por WhatsApp o Mail.
4.  **Autonomía Total:** El cliente final recupera el control de su información y sus tiempos.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React + Vite (Interfaz reactiva y liviana).
* **Backend:** Node.js + Express (API REST).
* **Generación de PDF:** Puppeteer (Renderizado de HTML/CSS de alta precisión para impresión).
* **Base de Datos:** PostgreSQL (Dockerizado) para persistencia local rápida.
* **Integraciones:** Google Sheets API v4.
* **Infraestructura:** Docker & Docker Compose para despliegue consistente en VPS (Hostinger/Raspberry Pi).

---

## 🏗️ Arquitectura del Sistema

El proyecto utiliza un enfoque de **microservicios dockerizados**:

* **Contenedor Web:** Servidor Nginx que sirve la SPA de React.
* **Contenedor API:** Lógica de negocio, procesamiento de imágenes con Multer y orquestación de Puppeteer.
* **Contenedor DB:** Instancia de Postgres para manejo de categorías y stock.
* **Volúmenes de Persistencia:** Gestión de archivos físicos para las imágenes de los productos, asegurando que no se pierdan entre despliegues.

---

## 📊 Integración con Google Sheets

Para no romper el flujo de trabajo histórico del cliente, el sistema utiliza **Google Auth** para comunicarse con una hoja de cálculo específica. 
- Al editar un precio en la App, el sistema busca la celda correspondiente en Drive y la actualiza.
- Mantiene formatos, negritas y agrupaciones por categorías de forma automática mediante `batchUpdate`.

---

## 🏁 Instalación Rápida (Dev Mode)

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Martin-Po/sheet-sync-catalog.git](https://github.com/Martin-Po/sheet-sync-catalog.git)
    cd sheet-sync-catalog
    ```

2.  **Credenciales de Google:**
    Colocar el archivo `credentials.json` en `backend/config/`.

3.  **Levantar el entorno:**
    ```bash
    docker compose up --build
    ```

---

> **Nota de Portfolio:** Este proyecto demuestra capacidad para resolver problemas de UX para usuarios de la tercera edad, integración de APIs de terceros (Google) y manejo de generación de documentos del lado del servidor.
