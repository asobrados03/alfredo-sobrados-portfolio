import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard, { Project } from "./ProjectCard";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { hasMoreInfo } from "@/lib/projectTypes";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Human Perform Platform",
    description:
      "Aplicación multiplataforma para un centro deportivo, desarrollada durante mis prácticas y ampliada como Trabajo Fin de Grado. Incluye aplicaciones para Android e iOS y una API REST propia.",
    impact:
      "Aplicación multiplataforma para un centro deportivo, con API REST propia y más del 70 % del código compartido entre Android e iOS.",
    featuredMetric: {
      value: "+70%",
      label: "de código compartido entre Android e iOS",
    },
    showHighlightsInDialog: false,
    highlights: [
      "Más del 70% de código compartido entre Android e iOS.",
      "Sesión autenticada con JWT y credenciales almacenadas de forma cifrada.",
      "API REST independiente con responsabilidades separadas por capas.",
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
    technologyGroups: [
      {
        title: "Aplicación móvil",
        technologies: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI"],
      },
      {
        title: "Backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        title: "Datos y seguridad",
        technologies: ["MariaDB", "JWT"],
      },
      {
        title: "Arquitectura",
        technologies: ["Clean Architecture", "Principios hexagonales"],
      },
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
        title: "El reto",
        content:
          "Compartir la lógica necesaria entre Android e iOS sin renunciar a interfaces específicas para cada plataforma y mantener, al mismo tiempo, una API REST independiente para los datos y la lógica del servidor.",
      },
      {
        title: "Implementación: aplicación móvil",
        items: [
          "La lógica de negocio y el networking se comparten en el módulo KMP.",
          "Las interfaces se adaptan a cada plataforma con Jetpack Compose y SwiftUI.",
          "Perfiles con edición y subida de imágenes, reservas, favoritos y operaciones de cuenta.",
          "Material Design 3 en Android y modo oscuro.",
        ],
      },
      {
        title: "Implementación: backend y seguridad",
        items: [
          "API REST independiente organizada en rutas, controladores, servicios y repositorios.",
          "Autenticación con access token, refresh token y middleware de autorización.",
          "Persistencia en MariaDB y gestión de archivos para fotos y documentos.",
          "Tokens y datos de usuario persistidos de forma cifrada en el cliente.",
        ],
      },
      {
        title: "Decisiones de arquitectura",
        content:
          "Kotlin Multiplatform concentra la lógica compartida y deja la presentación en cada plataforma. En la API, rutas y controladores gestionan HTTP, los servicios encapsulan las reglas de negocio y los repositorios aíslan la persistencia y las integraciones. Esta separación reduce el acoplamiento y permite evolucionar cada capa con mayor independencia.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Diseño de APIs REST con autenticación y reglas de negocio no triviales.",
          "Aplicación práctica de arquitectura por capas y código compartido entre plataformas.",
          "Capacidad para conectar cliente, backend, persistencia y seguridad en una solución mantenible.",
        ],
      },
    ],
  },
  {
    id: 13,
    title: "AI Incident Triage",
    description:
        "API para registrar incidencias técnicas, generar una propuesta de triaje estructurada y permitir que una persona la acepte o la corrija. MVP con separación entre entrada, análisis, persistencia y revisión humana.",
    impact:
        "API FastAPI con analizador intercambiable (baseline determinista u Ollama local), revisión humana auditable y evaluación offline sobre un dataset etiquetado.",
    highlights: [
      "Propuesta del sistema y revisión humana guardadas por separado para poder auditar qué cambió la persona.",
      "Analizador intercambiable mediante el protocolo IncidentAnalyzer: FakeAnalyzer reproducible u OllamaAnalyzer con salida validada por Pydantic.",
      "Evaluación offline con métricas de exactitud, errores y latencia, más CI con GitHub Actions y Docker.",
    ],
    technologies: [
      "Python 3.11+",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "Ollama",
      "Docker",
      "GitHub Actions",
      "pytest",
    ],
    technologyGroups: [
      {
        title: "Backend",
        technologies: ["Python 3.11+", "FastAPI", "Pydantic"],
      },
      {
        title: "Datos",
        technologies: ["SQLAlchemy", "SQLite"],
      },
      {
        title: "IA",
        technologies: ["Ollama"],
      },
      {
        title: "Calidad y entrega",
        technologies: ["pytest", "Docker", "GitHub Actions"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/ai-incident-triage",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Flujo de triaje",
        items: [
          "POST /incidents registra la incidencia en SQLite con estado created.",
          "POST /incidents/{id}/analysis ejecuta el analizador y guarda categoría, severidad, prioridad, información faltante y confianza.",
          "PATCH /incidents/{id}/triage acepta o corrige la propuesta; el estado pasa a reviewed.",
          "Estados: created → analyzing → analyzed → reviewed, o analysis_failed si el análisis falla.",
        ],
      },
      {
        title: "Arquitectura",
        content:
            "Los routers de FastAPI traducen HTTP y errores; IncidentService contiene las transiciones de estado y los casos de uso; IncidentRepository aísla la persistencia con SQLAlchemy. El analizador se define como protocolo, de modo que el caso de uso no depende del proveedor.",
      },
      {
        title: "Analizador y modelo local",
        content:
            "FakeAnalyzer es el backend por defecto: determinista y útil para probar transiciones, no para medir la calidad de un LLM. OllamaAnalyzer es opcional, pide JSON estructurado con temperatura cero y valida la respuesta contra el esquema. Un proveedor no disponible o una respuesta inválida devuelven 502 y un timeout devuelve 504, sin fallback silencioso.",
      },
      {
        title: "Revisión humana",
        content:
            "La propuesta original se conserva en triage_results y la decisión de la persona en triage_reviews. Así se puede auditar qué sugirió el sistema y qué se corrigió, y medir correcciones en el futuro.",
      },
      {
        title: "Evaluación y calidad",
        content:
            "Un dataset de 8 incidencias etiquetadas a mano permite ejecutar una evaluación offline independiente de FastAPI. Los resultados del baseline fake se documentan como referencia de plumbing, no como calidad de un LLM. La CI instala el proyecto, ejecuta pytest y valida el Dockerfile; los tests nunca llaman a Ollama.",
      },
      {
        title: "Alcance y limitaciones",
        content:
            "Es un MVP para portfolio: no incluye interfaz, autenticación, RAG ni agentes, y usa SQLite sin migraciones. El propio README lista como mejoras ampliar el dataset, añadir PostgreSQL y autenticación antes de producción.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Diseño de una API con estados explícitos, errores diferenciados y contratos validados.",
          "Integración de un LLM local detrás de una abstracción, con evaluación y límites conocidos.",
          "Revisión humana auditable en un flujo asistido por IA.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Landing Page: Geotecnia y Servicios",
    description:
      "Landing page profesional para presentar servicios geotécnicos, con un formulario de contacto conectado a validación, protección anti-spam, notificaciones por correo y archivo de solicitudes.",
    impact:
      "Web de servicios con formulario de contacto, validación de datos, protección anti-spam y envío automatizado de notificaciones.",
    highlights: [
      "Validación compartida: el mismo esquema Zod se ejecuta en cliente y servidor.",
      "Anti-spam en dos capas: honeypot en el formulario y reCAPTCHA v3 en la función serverless.",
      "Notificación fiable: Resend envía un aviso interno y una respuesta automática al contacto.",
      "Archivo secundario: Supabase guarda la solicitud sin bloquear la respuesta si la base de datos falla.",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "Vercel",
      "Supabase",
      "Resend",
      "reCAPTCHA v3",
    ],
    technologyGroups: [
      {
        title: "Frontend",
        technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      },
      {
        title: "Formularios y validación",
        technologies: ["Zod"],
      },
      {
        title: "Backend y servicios",
        technologies: ["Vercel Functions", "Supabase", "Resend", "reCAPTCHA v3"],
      },
      {
        title: "Pruebas",
        technologies: ["Vitest"],
      },
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
        title: "Flujo de contacto",
        items: [
          "1. El usuario completa nombre, email, empresa opcional y mensaje.",
          "2. El cliente descarta los envíos que rellenan el honeypot y valida los datos con Zod.",
          "3. La función POST /api/contact vuelve a validar la entrada y verifica el token reCAPTCHA v3.",
          "4. Resend envía el aviso interno y la confirmación automática al contacto.",
          "5. Tras el envío de correos, la solicitud se archiva en Supabase de forma no bloqueante.",
          "6. El formulario muestra un mensaje de éxito o el error devuelto por el servidor.",
        ],
      },
      {
        title: "Implementación y decisiones técnicas",
        content:
          "La landing separa la interfaz del endpoint serverless de Vercel. Zod mantiene las mismas reglas de formato y longitud en cliente y servidor; el honeypot filtra automatizaciones sencillas antes de hacer la petición y reCAPTCHA aporta una segunda comprobación en backend.",
      },
      {
        title: "Servicios y tratamiento de errores",
        content:
          "El endpoint devuelve errores diferenciados para método no permitido, datos inválidos, reCAPTCHA no configurado o fallido y problemas de Resend. Si Supabase no está configurado, expira o falla la inserción, registra el problema y conserva la respuesta correcta cuando los correos ya se han enviado.",
      },
      {
        title: "Pruebas y frontend",
        content:
          "Vitest cubre métodos no permitidos, validación, reCAPTCHA, errores de Resend y el archivado best-effort en Supabase. En el frontend, la carga diferida de imágenes y la división de código se mantienen como optimizaciones de presentación documentadas por el proyecto.",
      },
    ],
  },
  {
    id: 10,
    title: "Banana Bank — experiencia de hackathon",
    description:
      "Caso de estudio personal sobre una aplicación bancaria ficticia con asistente de IA. Diseña transferencias sensibles con confirmación explícita, reintentos controlados y evidencia visible.",
    impact:
      "Caso de estudio de banca con IA centrado en transferencias confirmables, idempotencia y trazabilidad.",
    highlights: [
      "Propuesta revisable antes de ejecutar una transferencia.",
      "Referencia reutilizable para tratar reintentos y respuestas ambiguas.",
      "Políticas comparadas con fuentes y fechas visibles.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "SQLite", "Node.js", "OpenAI API", "Testing"],
    technologyGroups: [
      {
        title: "Frontend",
        technologies: ["TypeScript", "React", "Next.js"],
      },
      {
        title: "Backend y persistencia",
        technologies: ["Node.js", "SQLite"],
      },
      {
        title: "IA",
        technologies: ["OpenAI API"],
      },
      {
        title: "Calidad",
        technologies: ["Testing"],
      },
    ],
    links: [
      {
        label: "Ver repositorio",
        url: "https://github.com/asobrados03/banana-bank-hackathon-case-study",
        type: "github",
      },
    ],
    details: [
      {
        title: "Contexto",
        content:
          "Proyecto personal desarrollado durante un reto técnico de T·dots sobre una aplicación bancaria ficticia con asistente de IA, datos de prueba y un simulador de banca. Es un caso de estudio: no representa un sistema bancario de producción ni redistribuye el código de la aplicación base.",
      },
      {
        title: "Transferencias sensibles",
        items: [
          "La primera acción crea una propuesta con origen, destinatario, importe y concepto para revisión.",
          "La transferencia solo se ejecuta después de confirmar esa propuesta de forma explícita.",
          "Cada propuesta caduca a los 15 minutos y no puede consumirse dos veces.",
        ],
      },
      {
        title: "Idempotencia y recuperación",
        content:
          "Los reintentos reutilizan la misma referencia bancaria para que una respuesta ambigua o perdida no se trate como una operación nueva. La interfaz bloquea clics repetidos durante el procesamiento y el caso de estudio valida el comportamiento con escenarios de fallo del simulador; la garantía descrita se limita a ese flujo y entorno simulado.",
      },
      {
        title: "Políticas con evidencia",
        content:
          "Para preguntas sobre cambios de condiciones, el flujo identifica el producto, selecciona de forma determinista las versiones vigentes e históricas y conserva sus fuentes y fechas. Así, la respuesta del asistente permite distinguir qué información está vigente y de dónde procede.",
      },
      {
        title: "Fiabilidad de la interfaz",
        content:
          "Al volver desde el historial a una conversación nueva, el estado se reinicia correctamente y solo se aceptan colecciones de mensajes válidas, evitando tratar una conversación vacía como un historial recuperado.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Diseño de flujos de aprobación para operaciones sensibles.",
          "Tratamiento de reintentos, expiración y estados ambiguos en un simulador.",
          "Integración de IA con fuentes y fechas visibles en lugar de respuestas sin procedencia.",
          "Validación de invariantes de negocio y escenarios de fallo mediante pruebas automatizadas.",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Energy Deficit",
    description:
      "Herramienta CLI en Python que calcula la energía adicional necesaria para cubrir la demanda eléctrica española cuando la generación eólica es la única fuente disponible.",
    impact:
      "Herramienta CLI que calcula en MWh la energía adicional de cada intervalo cuando la eólica es la única generación disponible.",
    highlights: [
      "Reconstrucción trazable de huecos mediante interpolación lineal.",
      "Manejo explícito del cambio horario CET/CEST en UTC.",
      "Exportación de resultados auditables por intervalo, hora y día.",
    ],
    technologies: ["Python 3.11+", "ESIOS/REE API", "CSV", "argparse", "zoneinfo", "unittest"],
    technologyGroups: [
      {
        title: "Lenguaje",
        technologies: ["Python 3.11+"],
      },
      {
        title: "Datos",
        technologies: ["ESIOS/REE API", "CSV"],
      },
      {
        title: "CLI y tiempo",
        technologies: ["argparse", "zoneinfo"],
      },
      {
        title: "Pruebas",
        technologies: ["unittest"],
      },
    ],
    githubUrl: "https://github.com/asobrados03/energy-deficit",
    showHighlightsInDialog: false,
    details: [
      {
        title: "Modelo de cálculo",
        content:
          "La demanda de entrada representa energía consumida en kWh durante cada intervalo de cinco minutos. La API de ESIOS/REE aporta la potencia eólica media en MW para esos mismos intervalos; se convierte a MWh con MW × 5 / 60 y la demanda con kWh / 1000. El resultado es max(demanda - eólica, 0): energía adicional bajo el supuesto de que solo existe generación eólica, no una evaluación completa del sistema eléctrico.",
      },
      {
        title: "Datos ausentes y trazabilidad",
        content:
          "La herramienta completa celdas vacías o marcas de cinco minutos ausentes situadas entre datos válidos mediante interpolación lineal. Guarda la serie resultante en demanda_preparada.csv y marca cada valor estimado con is_interpolated=true; no presenta esas reconstrucciones como mediciones originales.",
      },
      {
        title: "Tiempo y cambio horario",
        content:
          "Las marcas de demanda se leen en Europe/Madrid, se validan y se normalizan a UTC antes de alinear las series y agregarlas. La rejilla local excluye explícitamente las horas inexistentes del cambio CET/CEST mediante una conversión de ida y vuelta; después, UTC proporciona una línea temporal continua para validar intervalos de cinco minutos. Las salidas horarias reflejan por ello las horas reales del rango.",
      },
      {
        title: "Salidas auditables",
        items: [
          "deficit_cinco_minutos.csv conserva el resultado calculado por intervalo.",
          "deficit_horario.csv y deficit_diario.csv suman energía en UTC; el primer día puede ser parcial.",
          "deficit_minutal.csv reparte cada bloque de cinco minutos en cinco partes iguales: es una desagregación convencional, no una medición nueva.",
          "Los CSV de déficit exponen utc_datetime y additional_energy_mwh, con redondeo a dos decimales solo al escribir.",
        ],
      },
      {
        title: "Arquitectura",
        content:
          "El dominio concentra el cálculo, la validación de series regulares y las agregaciones. io.py lee la demanda, reconstruye huecos y escribe CSV; esios.py encapsula la autenticación y descarga del indicador eólico 551; cli.py coordina argumentos, ejecución y mensajes. La separación evita mezclar la integración externa con las reglas de cálculo.",
      },
      {
        title: "Calidad y pruebas",
        content:
          "La suite unittest cubre conversiones de unidades, déficit no negativo, preservación de energía al reagrupar, decimales españoles, huecos, cambios horarios y rechazo de series desalineadas o discontinuas. La prueba de integración ejecuta el CLI completo con una respuesta de ESIOS simulada y comprueba las cuatro salidas y demanda_preparada.csv, sin llamadas de red ni token real.",
      },
    ],
  },
  {
    id: 3,
    title: "Finanzas Personales",
    description:
      "Aplicación Android para registrar ingresos y gastos, organizar presupuestos y consultar estadísticas financieras. Es el proyecto final de la asignatura Plataformas de Software Móviles.",
    impact:
      "Aplicación Android de gestión financiera personal con Room, Jetpack Compose y una estructura MVVM con Repository.",
    highlights: [
      "Registro y gestión de transacciones de ingresos y gastos.",
      "Presupuestos organizados por categoría, mes y año.",
      "Resumen financiero con saldo, totales y estadísticas.",
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Room",
      "Gradle KTS",
      "Android Studio",
      "MVVM",
      "Repository",
    ],
    technologyGroups: [
      {
        title: "Android",
        technologies: ["Kotlin", "Jetpack Compose", "Material Design 3"],
      },
      {
        title: "Datos y arquitectura",
        technologies: ["Room", "MVVM", "Repository"],
      },
      {
        title: "Herramientas",
        technologies: ["Gradle KTS", "Android Studio"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/Finanzas_Personales",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Funcionalidades principales",
        items: [
          "Las transacciones registran tipo, importe, categoría, fecha y descripción, y pueden gestionarse desde la aplicación.",
          "Los presupuestos se crean, editan y eliminan por categoría, mes y año para relacionar el límite con el gasto acumulado.",
          "La pantalla principal resume el saldo y los ingresos y gastos totales.",
          "Las estadísticas y gráficos permiten consultar el estado de las finanzas a partir de los datos registrados.",
        ],
      },
      {
        title: "Decisiones técnicas",
        content:
          "La arquitectura MVVM separa el estado y la lógica de presentación de las pantallas Compose. Los ViewModel coordinan las operaciones y los Repository encapsulan el acceso a los datos, evitando acoplar la interfaz directamente con la persistencia.",
      },
      {
        title: "Persistencia local",
        content:
          "Room organiza la base de datos local mediante entidades y DAO para transacciones, categorías y presupuestos. Las consultas exponen datos reactivos con Flow, que los ViewModel pueden observar y trasladar al estado de la interfaz.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Construcción de una interfaz Android nativa con Jetpack Compose y Material Design 3.",
          "Modelado de relaciones entre transacciones, categorías y presupuestos.",
          "Aplicación práctica de MVVM y Repository en una aplicación académica completa.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "HotelManagementAPI",
    description:
      "API REST para gestionar la operativa de un hotel, construida con Java y Spring Boot sobre una arquitectura hexagonal y persistencia JDBC directa.",
    impact:
      "API hotelera con arquitectura hexagonal, JDBC sin ORM, seguridad JWT y pruebas automatizadas.",
    highlights: [
      "Arquitectura hexagonal que separa dominio, aplicación y adaptadores.",
      "JDBC sin ORM para mantener el control explícito de las consultas SQL.",
      "Seguridad por roles y pruebas de integración con Testcontainers.",
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
    technologyGroups: [
      {
        title: "Backend",
        technologies: ["Java 21+", "Spring Boot", "Arquitectura hexagonal"],
      },
      {
        title: "Datos y seguridad",
        technologies: ["JDBC", "MariaDB", "Spring Security", "JWT"],
      },
      {
        title: "Pruebas",
        technologies: ["JUnit 5", "Mockito", "Testcontainers"],
      },
      {
        title: "Herramientas e integración",
        technologies: ["Gradle", "Docker", "Swagger/OpenAPI", "Redis", "RabbitMQ"],
      },
    ],
    githubUrl: "https://github.com/asobrados03/HotelManagementAPI",
    details: [
      {
        title: "Motivación",
        content:
          "Nació como un ejercicio de la comunidad Skool DeHaroHub. Cuando la comunidad dejó de estar activa, decidí continuarlo y publicarlo por mi cuenta para profundizar en APIs REST, JDBC y arquitectura mantenible.",
      },
      {
        title: "Funcionalidades",
        items: [
          "CRUD de clientes, habitaciones, reservas, pagos y administradores.",
          "Consulta de disponibilidad de habitaciones con caché e invalidación al cambiar reservas o estados.",
          "Publicación de eventos de reserva para desacoplar el envío de notificaciones.",
          "Documentación interactiva de endpoints mediante Swagger/OpenAPI.",
        ],
      },
      {
        title: "Arquitectura y persistencia",
        items: [
          "Los controladores y DTOs actúan como adaptadores de entrada; los casos de uso coordinan la lógica de aplicación.",
          "El dominio define entidades y puertos de repositorio sin depender de la infraestructura.",
          "Los adaptadores de persistencia implementan esos puertos con JDBC y consultas SQL explícitas sobre MariaDB.",
        ],
      },
      {
        title: "Seguridad y fiabilidad",
        content:
          "Spring Security protege los endpoints mediante JWT y autorización basada en roles. La suite de pruebas combina pruebas unitarias y de integración con JUnit 5, Mockito y Testcontainers para validar lógica, seguridad y acceso a MariaDB en escenarios reproducibles.",
      },
      {
        title: "Evolución del sistema",
        content:
          "Redis se utiliza para cachear la disponibilidad de habitaciones. RabbitMQ y el módulo independiente notification-worker desacoplan el envío de confirmaciones de reserva y permiten gestionar reintentos mediante colas de recuperación.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Diseño de APIs REST con reglas de negocio, persistencia y control de acceso por roles.",
          "Capacidad para aplicar arquitectura hexagonal sin ocultar las decisiones de infraestructura.",
          "Uso de pruebas automatizadas para validar componentes aislados e integraciones con servicios externos.",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "PetAdopt",
    description:
      "Aplicación web empresarial desarrollada en equipo para facilitar la adopción de mascotas y la comunicación entre refugios y clientes.",
    impact:
      "Proyecto académico en equipo con Java EE empaquetado como WAR, persistencia JPA sobre PostgreSQL, interfaz PrimeFaces y configuración de autenticación mediante realm JDBC.",
    highlights: [
      "Flujo de adopción orientado a la comunicación entre refugios y clientes.",
      "Persistencia de entidades mediante JPA con EclipseLink.",
      "Generación de códigos QR y códigos de barras para la aplicación web.",
    ],
    technologies: ["Java", "Java EE 7", "JPA", "EclipseLink", "PrimeFaces", "Maven", "QRGen", "Barcode4j"],
    technologyGroups: [
      {
        title: "Aplicación web",
        technologies: ["Java", "Java EE 7", "PrimeFaces"],
      },
      {
        title: "Datos y acceso",
        technologies: ["JPA", "EclipseLink", "PostgreSQL", "Realm JDBC"],
      },
      {
        title: "Construcción y utilidades",
        technologies: ["Maven", "QRGen", "Barcode4j"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/PetAdopt",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Objetivo y alcance",
        content:
          "PetAdopt plantea, como trabajo académico realizado en equipo, una aplicación empresarial para conectar las necesidades de los refugios con las personas interesadas en adoptar. El repositorio incluye la configuración del entorno, el esquema y los datos iniciales necesarios para ejecutar el proyecto.",
      },
      {
        title: "Implementación",
        items: [
          "El proyecto se construye como un archivo WAR mediante Maven sobre Java EE 7.",
          "La persistencia se configura con JPA y EclipseLink sobre PostgreSQL, con las entidades almacenadas en una base de datos relacional.",
          "PrimeFaces proporciona los componentes de la interfaz web.",
          "QRGen y Barcode4j cubren la generación de códigos QR y de barras contemplada por el proyecto.",
        ],
      },
      {
        title: "Acceso y configuración",
        content:
          "El README documenta un realm JDBC para integrar la autenticación con las tablas de usuarios y grupos mediante JNDI. La configuración requiere preparar el realm y cargar el script SQL incluido; no se presenta como una aplicación desplegada en producción.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Desarrollo colaborativo de una aplicación web Java EE con persistencia y componentes de interfaz.",
          "Integración de servicios del contenedor, JPA y configuración de acceso basada en roles.",
          "Organización de un proyecto Maven orientado a un despliegue web en formato WAR.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Centro de Convenciones",
    description:
      "Sistema académico en Java realizado en equipo para coordinar espacios, reservas, consumiciones y la carta de productos de un centro de convenciones, junto con el cálculo de sus ingresos.",
    impact:
      "Práctica académica colaborativa en Java que aplica POO y patrones de diseño a espacios, reservas, productos y cálculos económicos.",
    highlights: [
      "Gestión de espacios disponibles y no disponibles con equipamientos opcionales.",
      "Reservas con consumiciones y consulta de la información asociada.",
      "Carta jerárquica de secciones y productos con cálculos de ingresos.",
    ],
    technologies: ["Java", "NetBeans", "POO", "Patrones de diseño"],
    technologyGroups: [
      {
        title: "Lenguaje y entorno",
        technologies: ["Java", "NetBeans"],
      },
      {
        title: "Diseño",
        technologies: ["Programación orientada a objetos", "Patrones de diseño"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/Practica_FINAL_CentroDeConvenciones",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Funcionalidades principales",
        items: [
          "Los espacios pueden darse de alta, consultarse por disponibilidad y actualizar su estado o sus precios.",
          "Las reservas asocian un espacio, una fecha y un cliente; también permiten añadir, consultar y eliminar consumiciones.",
          "La carta organiza secciones y productos, con operaciones para añadir elementos, cambiar su disponibilidad y consultar su información.",
          "El sistema calcula los ingresos de un espacio y los ingresos totales del centro para un intervalo de fechas.",
        ],
      },
      {
        title: "Diseño orientado a objetos",
        content:
          "El estado de espacios, reservas, costes y productos se mantiene encapsulado en sus clases. La herencia aparece en los equipamientos decoradores, que conservan la interfaz de Espacio y amplían su comportamiento; esto permite calcular ingresos y consultar propiedades de forma polimórfica.",
      },
      {
        title: "Patrones identificados",
        items: [
          "Singleton en Centro_Convenciones para centralizar la instancia que gestiona espacios, reservas y carta.",
          "Decorator en Espacio y sus decoradores para añadir música, ornamentos o escenarios sin modificar la clase base.",
          "Composite en Carta, Sección y Producto para tratar secciones compuestas y productos dentro de una estructura común.",
          "Strategy en los menús y submenús para separar las alternativas de interacción de la gestión del dominio.",
        ],
      },
      {
        title: "Persistencia y alcance",
        content:
          "El programa serializa los objetos en un fichero binario .dat para conservar espacios, reservas y productos entre sesiones. Es una práctica académica de POO; no se presenta como un sistema comercial ni como una solución con base de datos externa.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Modelado colaborativo de relaciones entre recursos, reservas y consumiciones.",
          "Uso de composición, herencia y polimorfismo para extender el comportamiento del dominio.",
          "Selección de patrones según la responsabilidad que debe resolver cada parte del sistema.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Notificador de Avisos",
    description:
      "Aplicación web académica para que el profesorado publique avisos dirigidos a todo el alumnado o a estudiantes concretos, y para que cada perfil consulte la información que le corresponde.",
    impact:
      "Aplicación PHP en un entorno LAMP virtualizado para publicar, importar y filtrar avisos según el perfil de usuario.",
    highlights: [
      "Publicación de avisos individuales o colectivos por parte del profesorado.",
      "Consulta y filtrado de avisos para estudiantes y profesores.",
      "Importación de avisos mediante archivos CSV con comprobación de estructura.",
    ],
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "jQuery", "LAMP"],
    technologyGroups: [
      {
        title: "Interfaz",
        technologies: ["HTML", "CSS"],
      },
      {
        title: "Servidor",
        technologies: ["PHP", "MySQL"],
      },
      {
        title: "Interacción",
        technologies: ["JavaScript", "jQuery"],
      },
      {
        title: "Entorno",
        technologies: ["LAMP virtualizado"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/TWEB-Notificador-Avisos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Flujo de uso",
        content:
          "El profesorado inicia sesión, registra estudiantes y publica un aviso con asunto, contenido breve y destinatario. Puede dirigirlo a todo el alumnado o a una persona concreta; el sistema registra la relación entre el aviso y sus destinatarios para que después cada perfil consulte su propio índice.",
      },
      {
        title: "Consulta y gestión de avisos",
        items: [
          "Los estudiantes consultan los avisos recibidos y pueden filtrarlos por estado leído o no leído.",
          "El profesorado consulta los avisos publicados y puede distinguir entre comunicaciones grupales e individuales.",
          "El contenido se muestra primero resumido y se abre una vista específica para leer el aviso completo.",
          "La aplicación contempla el registro de estudiantes y el restablecimiento de contraseñas.",
        ],
      },
      {
        title: "Importación y validación de CSV",
        content:
          "El profesorado puede cargar avisos desde un archivo CSV separado por punto y coma. PHP comprueba el tipo de archivo, el tamaño y las cabeceras esperadas antes de guardarlo; después, la aplicación permite leer las filas importadas para preparar su procesamiento.",
      },
      {
        title: "Implementación y entorno",
        content:
          "HTML y CSS estructuran y presentan las pantallas; PHP coordina sesiones, formularios y consultas a MySQL; JavaScript valida entradas y límites de los formularios en el navegador. jQuery añade el filtrado AJAX del índice de avisos y la lectura del archivo seleccionado. El proyecto se preparó para ejecutarse en una máquina Ubuntu con Apache, MySQL y PHP dentro de un entorno LAMP virtualizado.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Construcción de un flujo web tradicional con perfiles y operaciones diferenciadas.",
          "Integración entre formularios, sesiones PHP, consultas MySQL y actualización parcial con AJAX.",
          "Preparación de un entorno de ejecución y de una importación de datos con formato definido.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Estructuras de Datos",
    description:
      "Colección de prácticas académicas de Java realizadas en equipo para la asignatura Programación y Estructuras de Datos, con implementaciones propias de listas, TAD lineales y árboles binarios de búsqueda.",
    impact:
      "Trabajo académico colaborativo en Java para organizar datos con listas, pilas, colas y árboles, y resolver operaciones mediante algoritmos sobre estructuras propias.",
    highlights: [
      "Multilista para gestionar viajes de una empresa de autobuses.",
      "Implementaciones de pilas y colas con arrays y listas enlazadas.",
      "Árbol binario de búsqueda genérico con inserción, búsqueda, eliminación y recorridos.",
    ],
    technologies: ["Java", "Estructuras de datos", "Algoritmos"],
    technologyGroups: [
      {
        title: "Lenguaje",
        technologies: ["Java"],
      },
      {
        title: "Conceptos",
        technologies: ["Estructuras de datos", "Algoritmos"],
      },
    ],
    links: [
      {
        label: "Explorar ejercicios en GitHub",
        url: "https://github.com/asobrados03/Practicas-Programacion-y-Estructuras-de-Datos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Descripción",
        content:
          "Repositorio de prácticas de laboratorio realizadas en equipo con Java para la asignatura de Programación y Estructuras de Datos. Cada ejercicio parte de un problema concreto y requiere modelar la información, definir las operaciones de la estructura y conectarlas con un programa de prueba.",
      },
      {
        title: "Prácticas y estructuras implementadas",
        items: [
          "Gestión de viajes de una empresa de autobuses mediante una multilista: una lista doblemente enlazada genérica ordenada y una lista enlazada genérica para relacionar la información.",
          "TAD Pila y TAD Cola con dos enfoques de implementación: arrays redimensionables y nodos enlazados.",
          "TAD Árbol Binario de Búsqueda genérico, con inserción con o sin duplicados, recuperación, eliminación y recorridos del árbol.",
          "La práctica del ABB incluye también una variante para enteros con una operación de inserción equilibrada a partir de un array.",
        ],
      },
      {
        title: "Operaciones y razonamiento algorítmico",
        content:
          "Las prácticas trabajan operaciones como insertar, buscar, eliminar, recuperar extremos y recorrer estructuras. En la multilista se mantiene el orden al insertar elementos; en el ABB se aprovecha la relación entre valores menores y mayores para localizar elementos y construir recorridos en preorden, inorden y postorden.",
      },
      {
        title: "Enfoque técnico",
        items: [
          "Diseño de tipos abstractos mediante interfaces para separar las operaciones de una pila, una cola o un árbol de sus implementaciones.",
          "Uso de genéricos y de Comparable para reutilizar estructuras con distintos tipos de datos ordenables.",
          "Práctica de referencias, nodos, enlaces y casos de inserción o eliminación en estructuras dinámicas.",
          "Aplicación de las estructuras a dominios concretos, en lugar de limitar el trabajo a ejemplos aislados.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Sistemas Distribuidos",
    description:
      "Colección de prácticas en Java sobre concurrencia y comunicación bidireccional entre procesos mediante tareas concurrentes y sockets TCP.",
    impact:
      "Prácticas de Java sobre concurrencia, coordinación de tareas y comunicación cliente-servidor con un protocolo de comandos.",
    highlights: [
      "Procesamiento concurrente de palabras mediante hilos consumidores y BlockingQueue.",
      "Asignación asíncrona de llamadas con prioridades, cola de espera y ExecutorService.",
      "Juego cliente-servidor con ServerSocket, comandos de movimiento y difusión del estado.",
    ],
    technologies: ["Java", "Thread", "Runnable", "Sockets TCP", "Sistemas Distribuidos"],
    technologyGroups: [
      {
        title: "Lenguaje",
        technologies: ["Java"],
      },
      {
        title: "Concurrencia",
        technologies: ["Thread", "Runnable", "ExecutorService", "BlockingQueue"],
      },
      {
        title: "Comunicación",
        technologies: ["Sockets TCP", "Protocolo de comandos"],
      },
      {
        title: "Área",
        technologies: ["Sistemas distribuidos"],
      },
    ],
    links: [
      {
        label: "Explorar prácticas en GitHub",
        url: "https://github.com/asobrados03/Practicas_Sistemas_Distribuidos",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Descripción",
        content:
          "Repositorio de prácticas académicas de Java para trabajar dos formas de ejecutar tareas concurrentes y una comunicación cliente-servidor. El alcance es el de ejercicios independientes: muestra cómo se reparten tareas, cómo se coordinan y cómo se intercambian mensajes entre procesos.",
      },
      {
        title: "Prácticas de concurrencia",
        items: [
          "En el contador de vocales, varias instancias de WordVowelCounter implementan Runnable, consumen palabras de una BlockingQueue y devuelven resultados mediante otra cola. TextVowelCounter crea los hilos, inserta marcadores de finalización y espera con join.",
          "En la centralita telefónica, las llamadas se asignan de forma asíncrona a empleados según su prioridad. El código usa ExecutorService con un grupo fijo de hilos, un Lock para proteger el estado y una cola para las llamadas que esperan disponibilidad.",
          "La diferencia práctica queda visible en el código: Runnable encapsula el trabajo que ejecuta cada tarea, mientras Thread también aparece como la unidad que se inicia para ejecutar ese trabajo; en la centralita, la ejecución se delega al executor.",
        ],
      },
      {
        title: "Comunicación cliente-servidor",
        content:
          "La tercera práctica implementa un juego de búsqueda del tesoro mediante ServerSocket y Socket de Java. El servidor acepta conexiones, crea un ManagerCliente por jugador y procesa cada conexión en un hilo separado. El cliente envía comandos MOVE y DIG; el servidor actualiza el estado y difunde mensajes como PLAYER JOIN, MOVE y DIG al conjunto de clientes.",
      },
      {
        title: "Protocolo y ciclo de ejecución",
        items: [
          "Los mensajes se intercambian como líneas de texto, con comandos sencillos para mover al jugador o excavar en su posición.",
          "El servidor conserva el estado compartido del tablero y de los jugadores; ManagerCliente traduce los mensajes recibidos en operaciones sobre ese estado.",
          "La práctica documenta pruebas de conexión, movimiento, excavación y finalización cuando se encuentra el tesoro.",
          "Aunque el README denomina la práctica WebSockets, la implementación revisada utiliza sockets TCP directamente; no se presenta como una implementación del protocolo WebSocket.",
        ],
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Descomposición de un problema en productores, consumidores y tareas ejecutables de forma concurrente.",
          "Uso de colas, prioridades, bloqueo explícito y un executor para coordinar trabajo asíncrono.",
          "Separación entre cliente, servidor, gestor de conexión y estado compartido en una comunicación basada en mensajes.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Arkanoid",
    description:
      "Práctica final realizada en equipo sobre una base de Arkanoid para escritorio, a la que añadimos internacionalización, nuevos niveles, controles y pantallas de estado.",
    impact:
      "Trabajo de ampliación realizado junto a un compañero sobre una aplicación Java/Swing existente: diez idiomas, niveles adicionales, eventos y nuevas pantallas.",
    highlights: [
      "Internacionalización del juego y pantalla de selección entre diez idiomas.",
      "Niveles 6 a 10 con fondos y música propios, además de pantallas de inicio, pausa, muerte y victoria.",
      "Controles de teclado, reinicio del nivel y mejoras de representación de las vidas.",
    ],
    technologies: ["Java", "Swing", "AWT GUI"],
    technologyGroups: [
      {
        title: "Lenguaje",
        technologies: ["Java"],
      },
      {
        title: "Interfaz gráfica",
        technologies: ["Swing", "AWT GUI"],
      },
    ],
    links: [
      {
        label: "Ver código en GitHub",
        url: "https://github.com/asobrados03/PracticaFinalArkanoid",
        type: "github",
      },
    ],
    showHighlightsInDialog: false,
    details: [
      {
        title: "Descripción",
        content:
          "Práctica final realizada junto a un compañero a partir de una base de Arkanoid para escritorio que ya proporcionaba la aplicación y sus mecánicas principales. Nuestro trabajo se centró en ampliar esa base con funcionalidades de interacción, internacionalización, niveles y pantallas de juego.",
      },
      {
        title: "Funcionalidades añadidas por el equipo",
        items: [
          "Internacionalización de los textos y pantalla de selección entre diez idiomas, con la bandera correspondiente durante los niveles.",
          "Captura de eventos de teclado para mover la pala con A, D, W y las teclas de dirección, además del control existente con ratón.",
          "Incorporación de los niveles 6, 7, 8, 9 y 10, cada uno con su fondo y música de nivel.",
          "Pantalla inicial para comenzar la partida, pantalla de pausa con Esc o al salir con el cursor, y reinicio del nivel con R.",
          "Pantallas de muerte y victoria con sus recursos de audio, además de la sustitución de la representación de las vidas por corazones rojos pixelados.",
        ],
      },
      {
        title: "Base recibida y alcance",
        items: [
          "La base proporcionada ya incluía la aplicación de escritorio, la representación gráfica y las mecánicas principales de Arkanoid.",
          "Las ampliaciones se desarrollaron en colaboración con un compañero; el modal no atribuye en solitario la aplicación completa ni separa contribuciones individuales que no están documentadas.",
        ],
      },
      {
        title: "Implementación gráfica",
        content:
          "La ampliación reutiliza la interfaz Swing/AWT y las clases de la base recibida. Las modificaciones incorporan captura de eventos con KeyListener, textos y banderas para los idiomas, nuevos fondos y recursos de audio, junto con estados de inicio, pausa, derrota y victoria. No se presenta la arquitectura gráfica ni las mecánicas base como trabajo desarrollado desde cero por el equipo.",
      },
      {
        title: "Qué demuestra este proyecto",
        items: [
          "Coordinación entre entrada de usuario, actualización del estado y representación gráfica en una aplicación Swing.",
          "Modelado de elementos del juego con clases específicas para la pelota, la pala, los bloques y los efectos.",
          "Implementación de reglas de colisión, progresión y estados de partida sin presentarlo como un motor de físicas general.",
        ],
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

const featuredProjectIds = [1, 13, 2, 4];

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
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {hasMoreInfo(project) && (
                      <ProjectDetailsDialog project={project}>
                        <Button variant="link" className="h-auto min-h-11 px-0 text-cyan-400">
                          Ver detalles
                        </Button>
                      </ProjectDetailsDialog>
                  )}
                  {repositoryUrl && (
                      <Button asChild variant="link" className="h-auto min-h-11 px-0">
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
                </div>
              </article>
              );
            })}
          </div>
        ) : (
            <div
                className={
                  projects.length === 4
                      ? "grid grid-cols-1 gap-8 md:grid-cols-2"
                      : "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
                }
            >
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
