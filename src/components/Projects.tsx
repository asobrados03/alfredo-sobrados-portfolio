import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard, { Project } from "./ProjectCard";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Human Perform Platform",
    description:
      "Plataforma completa para la gestión integral de un centro deportivo, desarrollada como proyecto real durante mis prácticas en Fransdata Tech Ventures y posteriormente ampliada y finalizada como Trabajo Final de Grado. El sistema combina una app móvil multiplataforma y una API REST segura que centraliza la lógica de negocio y el acceso a datos.",
    impact:
      "App multiplataforma y API REST para un centro deportivo, nacida en prácticas reales y convertida en TFG.",
    highlights: [
      "Más del 70 % de código compartido entre Android e iOS.",
      "Autenticación JWT y persistencia cifrada de sesión.",
      "API REST desacoplada con Clean Architecture.",
    ],
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
        label: "Código app",
        url: "https://github.com/asobrados03/HumanPerformApp",
        type: "github",
      },
      {
        label: "Código API",
        url: "https://github.com/asobrados03/api_rest_human_app",
        type: "github",
      },
      {
        label: "Leer TFG",
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
    impact:
      "Landing de captación de leads con backend serverless y un flujo de contacto protegido frente a spam.",
    highlights: [
      "Validación de formularios compartida con Zod.",
      "Protección anti-spam con reCAPTCHA v3 y honeypot.",
      "Persistencia en Supabase y emails con Resend.",
    ],
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
    links: [
      {
        label: "Ver código",
        url: "https://github.com/asobrados03/geotecnia-servicios-landing",
        type: "github",
      },
      {
        label: "Visitar sitio web",
        url: "https://www.geotecniayservicios.es/",
        type: "external",
      },
    ],
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
    id: 10,
    title: "Banana Bank — experiencia de hackathon",
    description:
      "Caso de estudio desarrollado durante un reto técnico de T·dots sobre una aplicación bancaria ficticia con asistente de IA. Analiza operaciones sensibles y plantea mejoras de seguridad, recuperación ante fallos y trazabilidad de las respuestas del agente.",
    impact:
      "Caso de estudio de banca con IA centrado en transferencias seguras, idempotencia y evidencia verificable.",
    highlights: [
      "Transferencias en dos pasos con confirmación explícita.",
      "Prevención de pagos duplicados mediante idempotencia.",
      "Comparación de políticas con fuentes y fechas visibles.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "SQLite", "Node.js", "OpenAI API", "Testing"],
    links: [
      {
        label: "Ver código",
        url: "https://github.com/asobrados03/banana-bank-hackathon-case-study",
        type: "github",
      },
      {
        label: "Ver demo",
        url: "https://github.com/asobrados03/banana-bank-hackathon-case-study/blob/main/demo.mp4",
        type: "external",
      },
      {
        label: "Documentación",
        url: "https://github.com/asobrados03/banana-bank-hackathon-case-study/blob/main/documentacion-previa-hackathon.pdf",
        type: "document",
      },
    ],
    details: [
      {
        title: "Características destacadas",
        items: [
          "Protección frente a clics repetidos durante operaciones en curso.",
          "Corrección del flujo de conversaciones nuevas al alternar historial y conversaciones vacías.",
          "Pruebas de invariantes de negocio y escenarios de fallo simulados.",
        ],
      },
      {
        title: "Qué aprendí",
        content:
          "Diseñar operaciones sensibles combinando confirmación explícita, idempotencia, recuperación ante fallos y fuentes de evidencia visibles.",
      },
    ],
  },
  {
    id: 11,
    title: "Energy Deficit",
    description:
      "Herramienta CLI en Python que calcula la energía adicional necesaria para cubrir la demanda eléctrica española cuando la generación eólica es la única fuente disponible.",
    impact:
      "CLI auditable que alinea demanda eléctrica y datos eólicos de ESIOS/REE en intervalos de cinco minutos.",
    highlights: [
      "Reconstrucción trazable de huecos mediante interpolación lineal.",
      "Manejo explícito del cambio horario CET/CEST en UTC.",
      "Exportación de resultados auditables por intervalo, hora y día.",
    ],
    technologies: ["Python 3.11+", "ESIOS/REE API", "CSV", "argparse", "zoneinfo", "unittest"],
    githubUrl: "https://github.com/asobrados03/energy-deficit",
    details: [
      {
        title: "Características destacadas",
        items: [
          "Conversión consistente entre energía y potencia media para calcular el déficit de cada intervalo.",
          "Arquitectura modular que separa dominio, E/S, cliente ESIOS y CLI.",
          "Suite de pruebas unitarias e integración sin dependencia de red.",
        ],
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
    impact:
      "API de gestión hotelera construida con Java y Spring Boot, con seguridad y pruebas automatizadas.",
    highlights: [
      "Autenticación y autorización con JWT.",
      "Arquitectura hexagonal y JDBC sin ORM.",
      "Pruebas con JUnit, Mockito y Testcontainers.",
    ],
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

interface ProjectsProps {
  id: string;
  title: string;
  description: string;
  variant: "featured" | "more";
}

const featuredProjectIds = [1, 4, 2];

const Projects = ({ id, title, description, variant }: ProjectsProps) => {
  const projects =
    variant === "featured"
      ? featuredProjectIds.map((id) => projectsData.find((project) => project.id === id)!)
      : projectsData.filter((project) => !featuredProjectIds.includes(project.id));
  const compact = variant === "more";

  return (
    <section id={id} className="section-divider px-4 py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">&lt; portfolio /&gt;</p>
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          {description}
        </p>
        {compact ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const repositoryUrl = project.githubUrl ?? project.links?.find(
                (link) => link.type === "github" || link.url.includes("github.com"),
              )?.url;

              return (
              <article key={project.id} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 text-slate-100 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                {repositoryUrl && (
                  <Button asChild variant="link" className="mt-3 h-auto px-0">
                    <a
                      href={repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} en GitHub`}
                    >
                      Ver repositorio <GitHubIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
              </article>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
