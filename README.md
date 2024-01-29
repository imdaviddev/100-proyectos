# App de Notas

## Descripción
NoteHub es una aplicación de gestión de notas construida con tecnologías modernas como React, Spring Boot y MySQL. Permite a los usuarios crear, editar, eliminar y archivar notas de manera eficiente.

## Tecnologías Utilizadas

### Editor de codigo
- **Visual Studio Code**
- **Intellij**

### Frontend
- **React**
- **React Icons**

### Backend
- **Spring Boot**
- **Spring Data JPA**
- **Spring Web**
- **MySQL**
- **CORS**

## Requisitos del Sistema
Asegúrese de tener instalado lo siguiente antes de ejecutar la aplicación:

### Frontend
- **Node.js**: [Descargar e instalar Node.js](https://nodejs.org/).
- **npm (Node Package Manager)**: Viene incluido con Node.js.

### Backend
- **Java**: [Descargar e instalar Java](https://www.oracle.com/java/technologies/javase-downloads.html).
- **Spring Tool Suite (STS)** o cualquier IDE compatible con Spring Boot.

### Base de Datos
- **MySQL**: [Descargar e instalar MySQL](https://dev.mysql.com/downloads/installer/).

## Configuración y Ejecución

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/ensolvers-github-challenges/Canete-5c0b16.git
   cd Canete-5c0b16.git
   ```
   
## Configurar la Base de Datos

1. **Crear Base de Datos en MySQL**:
   - Cree una base de datos con el nombre `notehub`.
      - Ingrese con su usuario root: `mysql -u root -p` y la constraseña para su usuario root
      - Desde la terminal de mysql coloque `CREATE DATABASE notehub` 

2. **Actualizar Configuración de la Base de Datos**:
   - Actualice el archivo `application.properties` en la carpeta del backend con la configuración de su base de datos.
   - Por defecto viene colocado `notehubadmin` como usuario para acceder a la base de datos y sin contraseña agregada
   - Si quiere usar esa configuracion por defecto cree un usuario llamado `notehubadmin` y asignele permisos a la base de datos llamada `notehub`
      - **1. Inicie como usuario root**
        - Desde la terminal de su sistema operativo coloque `mysql -u root -p` y la constraseña para su usuario root
      - **2. Cree el usuario y asignele los permisos a la base de datos**
        - Desde la terminal de mysql coloque `CREATE USER 'notehubadmin'@'localhost' IDENTIFIED BY '';`
      - **3. Asignele los permisos correspondientes**
        - `GRANT ALL PRIVILEGES ON nothub.* TO 'notehubadmin'@'localhost';`
      - **4. Aplicar cambios**
        - `FLUSH PRIVILEGES;`

## Ejecutar el Backend

1. **Importar Proyecto en su IDE**:
   - Importe el proyecto Spring Boot en su entorno de desarrollo integrado (IDE).
   - Cargue las dependencias con Maven

2. **Ejecutar la Clase Principal**:
   - Ejecute la clase principal `BackendApplication.java` para iniciar el backend.

## Ejecutar el Frontend

```bash
cd frontend
npm install
npm run dev
```

## Acceder a la Aplicación
- Abra su navegador y vaya a http://localhost:5173/ para acceder a la interfaz de usuario.
- El backend se estara ejecutando en http://localhost:4000/ si desea realizar pruebas.
- Por defecto la base de datos MySQL se estara ejecutando en el puerto 3306

## Endpoints de la API
- GET /notes: Obtiene todas las notas.
- POST /notes: Guarda una nueva nota.
- GET /notes/{id}: Obtiene una nota por su ID.
- PUT /notes/{id}: Actualiza una nota por su ID.
- DELETE /notes/{id}: Elimina una nota por su ID.
- DELETE /notes/all: Elimina todas las notas. (usado para agilizar el desarrollo)
  - Si desea puede realizar usando Postman, recuerde colocar la url corespondiente al backend.
  
