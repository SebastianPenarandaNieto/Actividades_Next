# Administrador de Tareas (React + Next.js)

Aplicación simple de lista de tareas construida con **React**, **Next.js** y **TailwindCSS**.
Permite agregar, ordenar, marcar y eliminar tareas con una interfaz limpia y funcional.

## Funcionalidades

* ➕ **Agregar tareas** (no permite vacías ni repetidas)
* ✔️ **Marcar tareas como completadas**
* ❌ **Eliminar tareas completadas dando click de nuevo**
* 🔤 **Ordenar tareas alfabéticamente** (A-Z / Z-A)
* 🗑️ **Eliminar todas las tareas**
* 🎨 Estilos con **TailwindCSS**

## Estructura principal

Toda la lógica está en `page.js`, usando:

* `useState` para manejar:

  * Lista de tareas
  * Entrada actual
  * Estado del ordenamiento
  
* Funciones:

  * `addButtonHandler` → agrega tareas
  * `marcarTarea` → tacha una tarea
  * `eliminarTarea` → elimina tareas completadas
  * `ordenarTarea` → ordena alfabéticamente
  * `setTasks([])` → limpia todo

## Cómo ejecutar

```bash
npm install
npm run dev
```

Luego abre: **[http://localhost:3000](http://localhost:3000)**

## Vista previa

Interfaz sencilla con controles para agregar, ordenar y eliminar tareas.
