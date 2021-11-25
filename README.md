# Angular Template

El fin de este template es brindar una serie de lineamientos y configuraciones iniciales para todos los proyectos que se construyan con Angular.


## Estructura de Archivos y Carpetas

En Angular existen diversas formas de estructurar una aplicación. Para este template se utilizó una organzación de archivos y carpetas que permite ser escable y flexible.

Se divide en las siguientes secciones:

* Core: Funcionalidades e interfaces que se instancian por unica vez en la aplicación. En esta carpeta no deben existir componentes visuales ni lógica de negocio.
* Features: Aquí se ubica la lógica de negocio. Contiene módulos, componentes, servicios y otros bloques de código para la construcción de un Feature de negocio en particular. Cada módulo es cargado de forma lazy en el routing principal.
* Shared: Esta carpeta debe contener todos los componentes reutilizables de la app. Cada componente no debe esta atado a una lógica de negocio y en su lugar ser lo mas abstracto posible.

### Core
La carpeta Core es el lugar donde se colocan los servicios singleton, los tokens de inyección, las Constantes, las configuraciones de la aplicación, los Pipes, los Http Interceptos, las Guards, el servicio de autenticación, las utilidades, etc. que se utilizarán en toda la aplicación. Si hay algo que es específico para la propia aplicación, el despliegue, CI/CD, API, y el desarrollador - es probable que pertenezca al núcleo.

### Features

Las Features de negocio se ubican en esta carpeta donde cada modulo esta en su subcarpeta.
Cada feature module puede a su vez contener componentes, directivas, pipes, servicios, interfaces, enums, utilidades, etc. La idea es mantener las cosas cerca. Por lo tanto, un Pipe, que sólo se utiliza en un solo módulo  no debe ser definida en el ámbito global o dentro de Core. Lo mismo ocurre con cualquier otro bloque de construcción de Angular requerido únicamente por este módulo.

### Shared

Considerá el Shared module como una libreria de componentes de UI. Estos no deben ser específicos para una sola función de negocio sino que deberian ser Dumb components con el fin de poder tomar todos los componentes, soltarlos en otro proyecto Angular, y esperar que funcionen (dado que las dependencias se cumplen). 


## Conventional Commits

Este template tiene como dependencia a `@commitlint/cli` y `@commitlint/config-conventional` para el manejo de Conventional Commits.

### Que es Conventional Commit?

La especificación [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) es una convención sobre los mensajes de commit de GIT. Proporciona un conjunto de reglas sencillas para crear un historial de commit explícito, lo que facilita la escritura de herramientas automatizadas sobre él (ej: mantener un CHANGELOG cada vez que se hace release). Esta convención encaja con [SemVer](https://semver.org/) (Semantic Versioning), al describir las características, correcciones y cambios de ruptura realizados en los mensajes de confirmación. 



## Buenas prácticas

En la medida de lo posible siempre se recomienda mantener actualizada las versiones de Angular. Esto permite no solo la correccion de errores y seguridad del framework sino tambien optimizaciones del mismo.

Por otro lado el seguimiento de buenas practicas en cuanto a escritura del codigo permite que el mismo sea mantenible, performante y escalable.
Para ello recomendamos leer el siguiente artículo: [https://www.tatvasoft.com/blog/angular-optimization-and-best-practices](https://www.tatvasoft.com/blog/angular-optimization-and-best-practices)
