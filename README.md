# To-Do List App

Aplicación de lista de tareas desarrollada con **Ionic + Angular**, con soporte para categorización, filtrado, y almacenamiento local. Compatible con Android y lista para implementación en iOS mediante AppFlow.

---

## Características principales

- Crear y eliminar tareas.
- Crear y eliminar categorías.
- Asignar categorías a tareas.
- Filtrar tareas por categoría.
- Persistencia de datos con almacenamiento local (Storage API).
- Interfaz moderna y adaptativa con Ionic Framework.
- Compatible con Android (APK generado).
- Proyecto listo para exportar a iOS mediante AppFlow (requiere certificados).

---

## Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
- HTML5, SCSS, TypeScript
- AppFlow para generación de IPA
- Git para control de versiones

---

##  Instalación

### 1. Clona el repositorio
```bash
git clone https://github.com/Snards02/To-Do-List.git
```

### 2. Instala dependencias
```bash
npm install
```
### 3. Ejecuta la aplicación en navegador
```bash
ionic serve
```
### 4. Compila para Android
```bash
ionic cap add android
ionic cap open android
```

## Archivos generados
app-debug.apk: versión Android generada.

ipa/: configuración para exportar a iOS mediante AppFlow (requiere certificados Apple).

## Capturas

[Link de Capturas](https://drive.google.com/drive/folders/1xFJOLDno3q18Ywh1rj3g053pPMQPUhBK?usp=drive_link)
 
## Video demostrativo
[Ver video](https://drive.google.com/file/d/1Hm5_UhwNx0afS_sjv1D_oRS0PV1BnsGM/view?usp=drive_link)

## Desafíos técnicos y soluciones
### ¿Cómo se manejó el almacenamiento?
Usamos StorageService basado en Capacitor Storage para guardar tanto tareas como categorías.

### ¿Cómo se organizó el código?
Estructura modular separando lógica de UI, servicios reutilizables, uso de ngModel y bindings claros.

### ¿Problemas encontrados?
No se puede generar IPA sin Mac. Se solucionó con AppFlow en Ionic Cloud.

Se manejó compatibilidad Java/Gradle para evitar errores con la generación del APK.

## Autor
Desarrollado por: Brayan Snader Sierra Riveros
