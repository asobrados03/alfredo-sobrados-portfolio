import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Human Perform Platform",
    description:
      "Plataforma completa para la gestión integral de un centro deportivo, desarrollada como proyecto real durante mis prácticas en Fransdata Tech Ventures y posteriormente ampliada y finalizada como Trabajo Final de Grado. El sistema combina una app móvil multiplataforma y una API REST segura que centraliza la lógica de negocio y el acceso a datos.",
    technologies: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "SwiftUI",
      "Node.js",
      "Express.js",
      "MariaDB",
      "JWT",
      "Clean Architecture",
      "Arquitectura Hexagonal",
    ],
    links: [
      {
        label: "Mobile App",
        url: "https://github.com/asobrados03/HumanPerformApp",
        type: "github",
      },
      {
        label: "REST API",
        url: "https://github.com/asobrados03/api_rest_human_app",
        type: "github",
      },
      {
        label: "TFG",
        url: "https://uvadoc.uva.es/handle/10324/84418",
        type: "document",
      },
    ],
    details: [
      {
        title: "Objetivo",
        content:
          "Diseñar e implementar una solución software multiplataforma real en producción, reutilizando más del 70% del código entre Android e iOS y separando claramente frontend y backend mediante arquitectura desacoplada.",
      },
      {
        title: "Características destacadas",
        items: [
          "Registro e inicio de sesión seguro con JWT.",
          "Persistencia cifrada de sesión y credenciales.",
          "Gestión avanzada de perfiles con subida y edición de imágenes.",
          "Sistema de entrenadores y profesionales favoritos.",
          "Backend REST desacoplado con autenticación robusta.",
          "Interfaz moderna responsive con Material Design 3 y soporte dark mode.",
        ],
      },
      {
        title: "Qué aprendí",
        items: [
          "Desarrollo full-stack móvil y backend en entorno real.",
          "Diseño de APIs REST seguras y escalables con Node.js.",
          "Integración KMM compartiendo lógica entre Android e iOS.",
          "Aplicación práctica de Clean Architecture y principios hexagonales.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Landing Page: Geotecnia y Servicios",
    description:
      "Landing page profesional para una empresa de ingeniería geotécnica con sistema completo de generación de leads. Presenta servicios como estudios geotécnicos, sondeos y ensayos, e integra un formulario de contacto con flujo automatizado de notificaciones por email y almacenamiento de datos.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "React Hook Form",
      "Vercel",
      "Supabase",
      "Resend",
      "reCAPTCHA v3",
    ],
    githubUrl: "https://github.com/asobrados03/geotecnia-servicios-landing",
    details: [
      {
        title: "Características destacadas",
        items: [
          "Arquitectura Jamstack con frontend estático y backend serverless separados.",
          "Sistema anti-spam multicapa con reCAPTCHA v3 invisible y campo honeypot oculto.",
          "Validación consistente usando esquemas Zod compartidos entre cliente y servidor.",
          "Flujo automatizado de validación, verificación captcha, persistencia y envío de emails.",
          "Optimización de rendimiento con lazy loading de imágenes, code splitting y CDN de Vercel.",
          "Manejo robusto de errores con feedback inmediato y logging detallado.",
        ],
      },
      {
        title: "API REST documentada",
        content:
          "Endpoint POST /api/contact con validación de entrada, verificación reCAPTCHA, persistencia en Supabase y envío de correos transaccionales. Incluye pruebas unitarias completas con Vitest.",
      },
      {
        title: "Implementé",
        content:
          "Integración completa de servicios externos, validación de formularios robusta, arquitectura serverless escalable y sistema de notificaciones automáticas end-to-end.",
      },
    ],
  },
  {
    id: 3,
    title: "Finanzas Personales",
    description:
      "Aplicación Android diseñada para facilitar la gestión de finanzas personales. Implementa arquitectura MVVM junto con el patrón Repository para garantizar un diseño modular, escalable y fácilmente mantenible. Fue mi práctica final de Plataformas de Software Móviles.",
    technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Gradle KTS", "Android Studio"],
    githubUrl: "https://github.com/asobrados03/Finanzas_Personales",
    details: [
      {
        title: "Puntos clave",
        items: [
          "Gestión de transacciones de gasto e ingreso.",
          "Creación, edición y eliminación de presupuestos por mes, año y categoría.",
          "Estadísticas para visualizar el estado financiero.",
          "Página principal con saldo, ingresos y gastos totales.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "HotelManagementAPI",
    description:
      "API RESTful para gestionar un hotel, permitiendo administrar clientes, habitaciones, reservas, pagos y administradores. Implementa autenticación con JWT y sigue una arquitectura limpia para separar lógica de negocio, infraestructura y adaptadores.",
    technologies: [
      "Java 21+",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JDBC",
      "MariaDB",
      "Docker",
      "Swagger/OpenAPI",
      "JUnit5",
      "Mockito",
      "Testcontainers",
      "Gradle",
    ],
    githubUrl: "https://github.com/asobrados03/HotelManagementAPI",
    details: [
      {
        title: "Motivación",
        content:
          "El proyecto nació como ejercicio de la comunidad Skool DeHaroHub. Tras la desaparición de la comunidad, lo desarrollé y publiqué por mi cuenta para reforzar diseño de APIs RESTful, manejo de bases de datos con JDBC y buenas prácticas de arquitectura.",
      },
      {
        title: "Características destacadas",
        items: [
          "CRUD completo para clientes, habitaciones, reservas, pagos y administradores.",
          "Autenticación y autorización con JWT.",
          "Uso de JDBC en lugar de ORM para mayor control sobre las consultas SQL.",
          "Arquitectura limpia y modular basada en principios hexagonales.",
          "Configuración con Docker para facilitar instalación y ejecución.",
          "Documentación interactiva con Swagger/OpenAPI.",
          "Pruebas unitarias y de integración para garantizar estabilidad.",
        ],
      },
      {
        title: "Qué aprendí",
        items: [
          "Profundización en arquitectura hexagonal aplicada a APIs REST.",
          "Manejo de bases de datos sin ORM utilizando JDBC.",
          "Implementación de autenticación segura con JWT en Spring Boot.",
          "Optimización de estructura de código para mantenibilidad y escalabilidad.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Centro de Convenciones",
    description:
      "Sistema de gestión para un Centro de Convenciones utilizando los principios de la Programación Orientada a Objetos y varios patrones de diseño. Permite gestionar espacios, reservas, productos y aspectos económicos del centro.",
    technologies: ["Java", "NetBeans", "POO", "Patrones de diseño"],
    githubUrl: "https://github.com/asobrados03/Practica_FINAL_CentroDeConvenciones",
    details: [
      {
        title: "Objetivo",
        content:
          "Aprender los pilares de la programación orientada a objetos, incluyendo herencia, polimorfismo y encapsulación, e implementar varios patrones de diseño.",
      },
    ],
  },
  {
    id: 6,
    title: "Notificador de Avisos",
    description:
      "Aplicación web que permite a los profesores de Tecnologías Web notificar avisos a sus alumnos mediante una solución básica construida sobre un entorno LAMP virtualizado.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "LAMP"],
    githubUrl: "https://github.com/asobrados03/TWEB-Notificador-Avisos",
    details: [
      {
        title: "Objetivo",
        content:
          "Aprender a desarrollar una aplicación web básica y preparar el entorno virtual de desarrollo.",
      },
    ],
  },
  {
    id: 7,
    title: "Estructuras de Datos",
    description:
      "Ejercicios y ejemplos prácticos de estructuras de datos en Java enfocados en reforzar lógica, resolución de problemas y fundamentos de programación.",
    technologies: ["Java", "Estructuras de datos", "Algoritmos"],
    githubUrl: "https://github.com/asobrados03/Practicas-Programacion-y-Estructuras-de-Datos",
    details: [
      {
        title: "Objetivo",
        content: "Fortalecer habilidades de lógica y resolución de problemas.",
      },
      {
        title: "Temas cubiertos",
        items: ["Listas enlazadas, pilas, colas, árboles binarios y otras estructuras básicas."],
      },
    ],
  },
  {
    id: 8,
    title: "Sistemas Distribuidos",
    description:
      "Ejercicios prácticos para entender conceptos fundamentales de los sistemas distribuidos, desde concurrencia en Java hasta comunicación bidireccional cliente-servidor.",
    technologies: ["Java", "Threads", "Runnable", "WebSockets", "Sistemas Distribuidos"],
    githubUrl: "https://github.com/asobrados03/Practicas_Sistemas_Distribuidos",
    details: [
      {
        title: "Objetivo",
        content:
          "Aprender fundamentos prácticos básicos como ejecución concurrente de hilos y paso de mensajes bidireccional entre cliente y servidor.",
      },
      {
        title: "Temas cubiertos",
        items: [
          "Implementación de tareas concurrentes utilizando la clase Thread de Java.",
          "Uso de la interfaz Runnable para manejar tareas concurrentes.",
          "Implementación de servidor y cliente de WebSockets en Java.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Arkanoid",
    description:
      "Réplica del mítico juego Arkanoid desarrollada en Java como práctica final, con interfaz gráfica de escritorio y mecánicas básicas del juego clásico.",
    technologies: ["Java", "Swing", "AWT GUI"],
    githubUrl: "https://github.com/asobrados03/PracticaFinalArkanoid",
    details: [
      {
        title: "Objetivo",
        content:
          "Aprender a desarrollar una aplicación de escritorio visual en Java y aplicar el diseño de interfaces de usuario de manera práctica.",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">📂 Índice de Proyectos</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Proyectos reales, personales y académicos que muestran mi evolución como desarrollador
          full-stack: mobile, backend, web, arquitectura, seguridad y despliegue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
