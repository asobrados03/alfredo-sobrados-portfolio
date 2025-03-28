
import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Finanzas Personales",
    description: "Finanzas Personales es una aplicación Android, diseñada para facilitar la gestión de tus finanzas personales. Implementa la arquitectura MVVM (Model-View-ViewModel) junto con el patrón Repository para garantizar un diseño modular, escalable y fácilmente mantenible.",
    technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Gradle KTS", "Android Studio"],
    githubUrl: "https://github.com/asobrados03/Finanzas_Personales",
    keyPoints: [
      "Esta app resuelve el problema de unas finanzas personales mal gestionadas.",
      "Principales funcionalidades: Ver, Añadir, Editar y Eliminar tanto transacciones de gasto o ingreso como presupuestos asignados a un mes, año y categoría concreta.",
      "Estadísticas para visualizar nuestras finanzas y una página principal que nos da un saldo, ingresos y gastos totales."
    ]
  },
  {
    id: 2,
    title: "HotelManagementAPI",
    description: "HotelManagementAPI es una API RESTful diseñada para gestionar un hotel, permitiendo la administración de clientes, habitaciones, reservas, pagos y administradores. Implementa autenticación con JWT y sigue una arquitectura limpia para separar la lógica de negocio, la infraestructura y los adaptadores.",
    technologies: ["Java 21+", "Spring Boot", "JDBC", "Docker", "Swagger/OpenAPI", "JUnit5", "Mockito", "MariaDB"],
    githubUrl: "https://github.com/asobrados03/HotelManagementAPI",
    objectives: "Este proyecto nació como un ejercicio para mejorar mis habilidades en el diseño de APIs RESTful, el manejo de bases de datos con JDBC y la aplicación de buenas prácticas en arquitectura de software.",
    keyPoints: [
      "CRUD completo para clientes, habitaciones, reservas, pagos y administradores.",
      "Implementación de autenticación y autorización con JWT.",
      "Uso de JDBC en lugar de ORM para mayor control sobre las consultas SQL.",
      "Arquitectura limpia y modular basada en principios hexagonales."
    ]
  },
  {
    id: 3,
    title: "Centro de Convenciones",
    description: "Este proyecto implementa un sistema de gestión para un Centro de Convenciones utilizando los principios de la Programación Orientada a Objetos (POO) y varios patrones de diseño. Proporciona funcionalidades para gestionar espacios, reservas, productos y aspectos económicos del centro.",
    technologies: ["Java", "NetBeans", "POO"],
    githubUrl: "https://github.com/asobrados03/Practica_FINAL_CentroDeConvenciones",
    objectives: "En esta práctica aprendí los pilares de la programación orientada a objetos (herencia, polimorfismo y encapsulación) e implemente varios patrones de diseño."
  },
  {
    id: 4,
    title: "Notificador de Avisos",
    description: "La aplicación web permite a los profesores de Tecnologías Web notificar avisos a sus alumnos.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "LAMP"],
    githubUrl: "https://github.com/asobrados03/TWEB-Notificador-Avisos",
    objectives: "Aprender a desarrollar una aplicación web básica y a prepar el entorno virtual de desarrollo."
  },
  {
    id: 5,
    title: "Estructuras de Datos",
    description: "Ejercicios y ejemplos prácticos de estructuras de datos en Java.",
    technologies: ["Java", "Estructuras de datos", "Algoritmos"],
    githubUrl: "https://github.com/asobrados03/Practicas-Programacion-y-Estructuras-de-Datos",
    objectives: "Fortalecer habilidades en lógica y resolución de problemas.",
    keyPoints: [
      "Listas enlazadas, pilas, colas, árboles binarios, etc."
    ]
  },
  {
    id: 6,
    title: "Sistemas Distribuidos",
    description: "Ejercicios prácticos para entender conceptos fundamentales de los Sistemas Distribuidos.",
    technologies: ["Java", "Threads", "Web Sockets", "Sistemas Distribuidos"],
    githubUrl: "https://github.com/asobrados03/Practicas_Sistemas_Distribuidos",
    objectives: "Aprender algunos fundamentos prácticos básicos como la ejecución concurrente de hilos o el paso de mensajes de manera bidireccional entre cliente y servidor.",
    keyPoints: [
      "Implementación de tareas concurrentes utilizando la clase Thread de Java.",
      "Uso de la interfaz Runnable para manejar tareas concurrentes.",
      "Implementación de un servidor y cliente de Web Sockets en Java."
    ]
  },
  {
    id: 7,
    title: "Arkanoid",
    description: "Esta práctica final es una replica del mítico juego Arkanoid desarrollado en Java.",
    technologies: ["Java", "Swing Java", "AWT GUI"],
    githubUrl: "https://github.com/asobrados03/PracticaFinalArkanoid",
    objectives: "Aprender a desarrollar una aplicación de escritorio visual en Java para entender y aplicar el diseño de interfaces de usuario de manera práctica."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">📂 Índice de Proyectos</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Una recopilación de mis proyectos más destacados que muestran mi experiencia y habilidades técnicas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
