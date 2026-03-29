import React from 'react';

// === DATOS ESTRUCTURADOS ACTUALIZADOS CON DEPLOYS ===
const info = {
    profile: {
        name: "Jesús E. Aguilar Sarria",
        title: "Fullstack Developer & Support Engineer",
        location: "Valencia, España (Con experiencia remota global)",
        summary: "Desarrollador de software con trayectoria internacional en proyectos remotos para empresas tecnológicas de EE.UU. y Europa. Especializado en el stack moderno (React, Next.js, Node.js, FastAPI, Cloud), aplico principios SOLID y código limpio para construir soluciones escalables. Mi perfil combina una mentalidad de producto con experiencia en soporte técnico y administración, lo que me permite abordar problemas desde múltiples perspectivas con alta adaptabilidad y comunicación efectiva.",
        email: "jesus.dev8@gmail.com",
        phone: "+34 742 019 743", // Reemplaza por tu número real
        linkedin: "Linkedin.com/in/jesusaguilars/",
        github: "github.com/itsseduardo" // Reemplaza por tu usuario real
    },
    techSkills: [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
        { category: "Backend & API", items: ["Node.js", "FastAPI", "Serverless", "APIs RESTful", "WebSockets"] },
        { category: "Cloud & DB", items: ["AWS Lambda", "Firebase", "Supabase", "PostgreSQL", "MySQL", "Firestore", "Vercel Deploy"] },
        { category: "DevOps & Herramientas", items: ["Git", "Docker", "Docker Compose", "Linux"] },
        { category: "Metodologías & Arquitectura", items: ["Scrum", "Agile", "SOLID", "Microservicios", "Clean Code"] },
        { category: "Soporte & Admin", items: ["Soporte Técnico SaaS", "Mantenimiento Hardware/Software", "Gestión Documental", "Excel)"] }
    ],
    softSkills: ["Compromiso", "Trabajo en Equipo", "Resolución de Problemas", "Trabajo bajo Presión", "Comunicación Efectiva", "Adaptabilidad"],
    experience: [
        {
            role: "Software Developer Intern",
            company: "Upstart13 (Remoto – EE.UU.)",
            date: "Ene 2025 – Ago 2025",
            points: [
                "Desarrollo de aplicaciones web en equipo ágil bajo Scrum.",
                "Implementación de mejoras de UI/UX con React y estilos modulares.",
                "Participación en code reviews y planificación estratégica de tareas."
            ]
        },
        {
            role: "Frontend Developer (Freelance)",
            company: "TechNova Solutions (Remoto – Irlanda)",
            date: "May 2024 – Dic 2024",
            points: [
                "Desarrollo de interfaces responsivas con React, Tailwind CSS y Firebase.",
                "Creación de dashboards interactivos y optimización de carga en un 30%.",
                "Implementación de componentes dinámicos para plataformas internas."
            ]
        },
        {
            role: "Technical Support Engineer (Freelance)",
            company: "CodeWave Global (Remoto – Canadá)",
            date: "Jul 2023 – Mar 2024",
            points: [
                "Soporte técnico SaaS nivel 2 para clientes internacionales.",
                "Reducción del 20% en tickets repetitivos mediante documentación y manuales.",
                "Mantenimiento y configuración de bases de datos MySQL en producción."
            ]
        },
        {
            role: "Cloud & API Integration Developer (Freelance)",
            company: "BrightSoft Technologies (Remoto – Alemania)",
            date: "Ene 2023 – Jun 2023",
            points: [
                "Integración de APIs externas para sistemas de facturación e inventario.",
                "Automatización de procesos con Node.js y Firebase Functions.",
                "Despliegue de microservicios en AWS Lambda, optimizando costos en un 15%."
            ]
        }
    ],
    projects: [
        // === REEMPLAZA ESTAS URLS POR LAS REALES ===
        {
            title: "ServiHausMunchen",
            subtitle: "ERP de Servicios Integrales",
            description: "Sistema integral de gestión para empresas de servicios con roles RBAC.",
            tags: ["Next.js", "TypeScript", "NestJS", "Prisma"],
            deployUrl: "https://www.servihausmunchen.de/", // Reemplaza con tu URL real
            github: "https://github.com/itsseduardo/servihaus-munchen"
        },

        {
            title: "Koki Zeit",
            subtitle: "Gestión de Juegos de Mesa Multidioma",
            description: "Web para administración de bibliotecas de juegos con i18n.",
            tags: ["Next.js", "Supabase", "i18n"],
            deployUrl: "https://www.kokizeit.com/", // Reemplaza con tu URL real
            github: "https://github.com/itsseduardo/koki-zeit"
        },

        {
            title: "Facturación Rica Fruta",
            subtitle: "Automatización Contable Internacional",
            description: "Software B2B para facturación legal bajo normativa europea.",
            tags: ["JavaScript", "Firebase", "html2pdf.js"],
            deployUrl: "https://ricafruta-e3add.web.app/", // Reemplaza con tu URL real
            github: "https://github.com/itsseduardo/Sistema-de-facturacion-rica-fruta-GERMANY"
        },

        {
            title: "Urbano de Oro",
            subtitle: "E-commerce de Perfumería",
            description: "Plataforma de ventas con catálogo dinámico y panel administrativo.",
            tags: ["JavaScript", "Supabase", "PostgreSQL"],
            deployUrl: "", // Reemplaza con tu URL real
            github: "https://github.com/itsseduardo/Urbano-de-oro"
        }

    ]
};

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-[#08080A] text-white font-sans selection:bg-blue-500/20">

            {/* 1. NAVEGACIÓN (CON BOTONES ARRIBA) */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#08080A]/90 backdrop-blur-sm border-b border-gray-900">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-lg font-bold tracking-tight">{info.profile.name}</span>
                    <div className="flex gap-6 text-sm text-gray-400 font-medium">
                        <a href="#sobremi" className="hover:text-white transition-colors">Sobre Mí</a>
                        <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
                        <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
                        <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
                    </div>
                </div>
            </nav>

            {/* 2. HERO SECTION CON REDISEÑO DE FOTO */}
            <header className="container mx-auto px-6 pt-48 pb-24 border-b border-gray-900">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* COLUMNA 1: FOTO PROFESIONAL */}
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity"></div>

                            <img
                                src="./Image_20260329_190838.jpeg" // <<< REEMPLAZAR POR TU ARCHIVO
                                alt={`Foto profesional de ${info.profile.name}`}
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#08080A] shadow-2xl transition-transform group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* COLUMNA 2: TÍTULO Y TEXTO */}
                    <div className="md:col-span-8 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-500 bg-blue-500/10 rounded uppercase">
                            {info.profile.title}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                            Ingeniería de software <br />con visión <span className="text-gray-700 italic">global</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed mb-12">
                         {info.profile.summary.split('.')[0]}. {info.profile.summary.split('.')[1]}.
                        </p>

                        <a href={`mailto:${info.profile.email}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded text-sm uppercase tracking-widest transition-all">
                            Contáctame
                        </a>
                    </div>
                </div>
            </header>

            {/* 2. SOBRE MÍ SECTION (Mismo diseño) */}
            <section id="sobremi" className="container mx-auto px-6 py-24 border-t border-gray-900 grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-4xl font-black tracking-tight mb-4">Un perfil, <br />múltiples soluciones.</h2>
                    <p className="text-gray-500">Más allá del código.</p>
                </div>
                <div className="md:col-span-8 text-gray-400 text-lg leading-relaxed space-y-6">
                    <p>
                        Mi carrera dio un giro estratégico al poder trabajar remoto internacionalmente, colaborando con equipos de EE.UU., Irlanda, Canadá y Alemania. Esta experiencia me ha dotado de una adaptabilidad y comunicación efectiva bilingüe excepcionales. No soy solo un desarrollador; mi background incluye soporte técnico SaaS de nivel empresarial y mantenimiento de infraestructura. Esto significa que construyo software pensando en su mantenibilidad, escalabilidad y en la experiencia real del usuario final.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                        {info.softSkills.map(skill => (
                            <span key={skill} className="text-xs font-bold px-3 py-1 bg-gray-900 rounded border border-gray-800 text-blue-300">{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EXPERIENCIA GLOBAL SECTION (Mismo diseño) */}
            <section id="experiencia" className="bg-[#0A0A0C] py-24 border-y border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Recorrido Profesional Internacional</h2>
                    <div className="space-y-12 max-w-5xl mx-auto">
                        {info.experience.map((job, index) => (
                            <div key={index} className="grid md:grid-cols-12 gap-8 bg-gray-950 p-8 rounded-lg border border-gray-900 group hover:border-blue-500/20 transition-all">
                                <div className="md:col-span-4">
                                    <span className="text-blue-500 font-mono text-sm tracking-widest">{job.date}</span>
                                    <h3 className="text-xl font-bold mt-1">{job.role}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{job.company}</p>
                                </div>
                                <div className="md:col-span-8 space-y-3">
                                    {job.points.map((point, i) => (
                                        <p key={i} className="text-gray-400 text-sm flex items-start gap-2 italic">
                                            <span className="text-blue-500">/</span> {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HABILIDADES TÉCNICAS SECTION (Mismo diseño) */}
            <section id="habilidades" className="container mx-auto px-6 py-24">
                <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Stack Tecnológico Dominado</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {info.techSkills.map(skillGroup => (
                        <div key={skillGroup.category} className="bg-gray-950 p-6 rounded-lg border border-gray-900 text-center group hover:border-blue-500/20 transition-all">
                            <h4 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-6 pb-2 border-b border-gray-900">{skillGroup.category}</h4>
                            <div className="space-y-2">
                                {skillGroup.items.map(skill => (
                                    <p key={skill} className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{skill}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. PROYECTOS SECTION (ACTUALIZADA CON PREVIEWS) */}
            <section id="proyectos" className="bg-[#0A0A0C] py-24 border-t border-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Proyectos Desplegados en Vivo</h2>

                    <div className="space-y-20 max-w-6xl mx-auto">
                        {info.projects.map((project, index) => (
                            <div key={index} className="grid md:grid-cols-12 gap-10 bg-gray-950 p-8 rounded-xl border border-gray-900 group hover:border-blue-500/10 transition-all">

                                {/* Texto y Botones */}
                                <div className="md:col-span-4 flex flex-col justify-between">
                                    <div>
                                        <span className="text-blue-500 font-mono text-xs mb-2 block tracking-widest uppercase">{project.subtitle}</span>
                                        <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                            <h3 className="text-3xl font-bold mb-4 italic leading-tight">{project.title}</h3>
                                        </a>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold bg-gray-900 text-gray-600 px-2.5 py-1 rounded border border-gray-800">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botones de Acción */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-900">
                                        <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded text-xs uppercase tracking-widest transition-all">
                                            Ver Demo en Vivo
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white font-bold py-2.5 px-4 rounded text-xs uppercase tracking-widest transition-colors">
                                            Ver Código
                                        </a>
                                    </div>
                                </div>

                                {/* PREVIEW EN VIVO (IFRAME) */}
                                <div className="md:col-span-8 overflow-hidden rounded-lg border-2 border-gray-900 aspect-[16/10] bg-gray-900 relative group-hover:border-blue-900/50 transition-colors">
                                    <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 block opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-gray-950/70 flex items-center justify-center transition-all">
                                        <span className="bg-gray-950/80 p-4 rounded-full border border-gray-700 text-blue-300 font-bold uppercase tracking-widest text-xs">Visitar Sitio Completo →</span>
                                    </a>
                                    <iframe
                                        src={project.deployUrl}
                                        title={`Preview de ${project.title}`}
                                        className="w-full h-full border-0 pointer-events-none group-hover:scale-105 transition-transform"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FOOTER / CONTACT (Mismo diseño) */}
            <footer className="container mx-auto px-6 py-24 border-t border-gray-900 text-center">
                <h2 className="text-5xl font-black mb-12">¿Listo para conectar?</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-bold tracking-widest uppercase text-sm">
                    <a href={`mailto:${info.profile.email}`} className="text-white hover:text-blue-500 transition-colors">{info.profile.email}</a>
                    <div className="flex gap-10 text-gray-600">
                        <a href={`https://${info.profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href={`https://${info.profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Descargar CV</a> {/* Link a tu CV aquí */}
                    </div>
                </div>
                <div className="mt-24 text-gray-800 text-xs">
                    {info.profile.name} • Basado en {info.profile.location} • {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;