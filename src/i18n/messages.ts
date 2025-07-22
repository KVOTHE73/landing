const messages = {
  es: {
    lang: {
      es: "Español",
      en: "Inglés",
    },
    brand: "NovaCorp",
    brandSurname: "Solutions",
    slogan: "Tecnología inteligente. Resultados reales.",
    menu: {
      home: "Inicio",
      about: "Nosotros",
      features: "Ventajas",
      pricing: "Precios",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Comenzar",
    },
    home: {
      title: "Acelera tu negocio con ",
      description:
        "Ofrecemos soluciones tecnológicas innovadoras y escalables para empresas modernas.",
      description2:
        "Páginas web, Apps de todo tipo, eCommerce, dashboards y más desarrolladas a medida.",
      description3:
        "Utilizando las últimas tecnologías en desarrollo de aplicaciones web y PWA para móvil.",
      cta: "Descubre nuestros servicios",
      techs: "Tecnologías que usamos",
      downloads: "Descargas / Clientes",
      version: "Versión Bootstrap",
    },
    about: {
      title: "Sobre NovaCorp",
      description:
        "En NovaCorp ayudamos a empresas a lanzar productos digitales innovadores y de alto rendimiento.",
      description2:
        "Ya sean App para móvil o dashboards de escritorio personalizados, nuestro enfoque es siempre la excelencia técnica y la experiencia de usuario.",
      features: [
        {
          title: "Arquitectura Mobile-First",
          text: "Diseñado para adaptarse perfectamente a cualquier dispositivo y resolución.",
        },
        {
          title: "Personalización total",
          text: "Ajusta colores, módulos y estilos según tus necesidades sin complicaciones.",
        },
        {
          title: "Rendimiento optimizado",
          text: "Cargas ultrarrápidas, código limpio y experiencia fluida.",
        },
        {
          title: "Seguridad empresarial",
          text: "Protección avanzada para tus datos y los de tus clientes.",
        },
        {
          title: "Soporte colaborativo",
          text: "Comunidad activa y canales de soporte listos para ayudarte.",
        },
        {
          title: "Asistencia 24/7",
          text: "Nuestro equipo está disponible en cualquier momento que lo necesites.",
        },
        {
          title: "Infraestructura escalable",
          text: "Listo para crecer con tu negocio sin límites técnicos.",
        },
        {
          title: "Interfaz intuitiva",
          text: "Pensado para la productividad y facilidad de uso.",
        },
      ],
    },
    features: {
      title: "Nuestras Ventajas",
      subtitle:
        "Funcionalidades destacadas para impulsar tu presencia digital.",
      subtitle2:
        "Con personalización avanzada e integración perfecta, crea interfaces de administración poderosas y atractivas",
      subtitle3: "mejorando la productividad y satisfacción del usuario.",
      dashboard1: "Panel de control (español tema claro)",
      dashboard2: "Panel de control (inglés tema oscuro)",
      ecommerce1: "Interfaz eCommerce (español tema claro)",
      ecommerce2: "Interfaz eCommerce (inglés tema oscuro)",
      messenger1: "App de mensajería (español tema oscuro)",
      messenger2: "App de mensajería (inglés tema claro)",
      todo1: "Interfaz de lista de tareas (español tema claro)",
      todo2: "Interfaz de lista de tareas (inglés tema oscuro)",
      markdown1: "Editor markdown en tiempo real (español tema oscuro)",
      markdown2: "Editor markdown en tiempo real (inglés tema claro)",
      login1: "Control de acceso (español tema claro)",
      login2: "Control de acceso (inglés tema oscuro)",
    },
    pricing: {
      title: "Planes disponibles",
      subtitle: "Elige el que mejor se adapte a tu proyecto",
      subtitle2:
        "Nuestros precios están diseñados para ser flexibles y asequibles, brindando valor a empresas de todos los tamaños.",
      subtitle3:
        "Explora nuestros planes para encontrar el mejor ajuste para tus necesidades",
      cta: "Comenzar",
      plansFixed: [
        {
          title: "Plan Inicial",
          price: "$5",
          icon: "solar:usb-bold-duotone",
          featured: false,
          features: [
            { label: "Almacenamiento", value: "10 GB", available: true },
            { label: "Ancho de banda", value: "100 GB", available: true },
            { label: "Dominios", value: "1", available: true },
            { label: "Certificado SSL", value: "Compartido", available: true },
            { label: "Cuentas de email", value: "5", available: true },
            { label: "Soporte 24/7", value: "Sí", available: true },
            {
              label: "Copias de seguridad",
              value: "No",
              available: false,
            },
            {
              label: "Garantía de disponibilidad",
              value: "No",
              available: false,
            },
            { label: "Acceso FTP", value: "No", available: false },
            { label: "Panel de control", value: "No", available: false },
            { label: "Dominio gratuito", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "Soporte E-commerce", value: "No", available: false },
            {
              label: "Garantía de reembolso 45 días",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Plan Potenciado",
          price: "$10",
          icon: "solar:map-arrow-up-bold-duotone",
          featured: false,
          features: [
            { label: "Almacenamiento", value: "20 GB", available: true },
            { label: "Ancho de banda", value: "200 GB", available: true },
            { label: "Dominios", value: "2", available: true },
            { label: "Certificado SSL", value: "Gratis", available: true },
            { label: "Cuentas de email", value: "10", available: true },
            { label: "Soporte 24/7", value: "Sí", available: true },
            {
              label: "Copias de seguridad",
              value: "No",
              available: false,
            },
            {
              label: "Garantía de disponibilidad",
              value: "No",
              available: false,
            },
            { label: "Acceso FTP", value: "No", available: false },
            { label: "Panel de control", value: "No", available: false },
            { label: "Dominio gratuito", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "Soporte E-commerce", value: "No", available: false },
            {
              label: "Garantía de reembolso 45 días",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Plan Premium",
          price: "$15",
          icon: "solar:cup-first-bold-duotone",
          featured: true,
          features: [
            { label: "Almacenamiento", value: "50 GB", available: true },
            { label: "Ancho de banda", value: "500 GB", available: true },
            { label: "Dominios", value: "Ilimitados", available: true },
            { label: "Certificado SSL", value: "Gratis", available: true },
            { label: "Cuentas de email", value: "Ilimitadas", available: true },
            { label: "Soporte 24/7", value: "Sí", available: true },
            {
              label: "Copias de seguridad",
              value: "Semanales",
              available: true,
            },
            {
              label: "Garantía de disponibilidad",
              value: "99.9%",
              available: true,
            },
            { label: "Acceso FTP", value: "Sí", available: true },
            { label: "Panel de control", value: "cPanel", available: true },
            { label: "Dominio gratuito", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "Soporte E-commerce", value: "No", available: false },
            {
              label: "Garantía de reembolso 45 días",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Plan Empresarial",
          price: "$99",
          icon: "solar:buildings-bold-duotone",
          featured: false,
          features: [
            { label: "Almacenamiento", value: "1 TB", available: true },
            { label: "Ancho de banda", value: "20 TB", available: true },
            { label: "Dominios", value: "Ilimitados", available: true },
            { label: "Certificado SSL", value: "Gratis", available: true },
            { label: "Cuentas de email", value: "Ilimitadas", available: true },
            { label: "Soporte 24/7", value: "Sí", available: true },
            { label: "Copias de seguridad", value: "Diarias", available: true },
            {
              label: "Garantía de disponibilidad",
              value: "99.9%",
              available: true,
            },
            { label: "Acceso FTP", value: "Sí", available: true },
            { label: "Panel de control", value: "cPanel", available: true },
            { label: "Dominio gratuito", value: "Sí", available: true },
            { label: "Firewall", value: "Sí", available: true },
            { label: "Soporte E-commerce", value: "Sí", available: true },
            {
              label: "Garantía de reembolso 45 días",
              value: "Sí",
              available: true,
            },
          ],
        },
      ],
    },
    testimonials: {
      title: "Nuestros clientes opinan",
      description1:
        "Descubre cómo ayudamos a empresas a transformar su presencia digital.",
      description2:
        "Lee testimonios de clientes satisfechos con NovaCorp y cómo mejoramos su productividad.",
      description3:
        "Con su facilidad de uso, características avanzadas y soporte excepcional.",
      comments: [
        {
          name: "John Doe",
          position: "CEO, Empresa",
          text: "NovaCorp transformó nuestro flujo de trabajo. Las opciones de personalización son inigualables y el equipo de soporte es increíblemente receptivo.",
        },
        {
          name: "Carlos Ruiz",
          position: "CTO, Innovate Corp",
          text: "Nuestra productividad ha aumentado desde que adoptamos esta plantilla. Las características son de primera y la experiencia del usuario es excepcional.",
        },
        {
          name: "Jane Smith",
          position: "Gerente de Proyectos, Agencia Creativa",
          text: "Sus aplicaciones son un cambio de juego. Son intuitivas, flexibles y la integración fluida ha hecho que nuestros proyectos funcionen mejor que nunca.",
        },
        {
          name: "Paula González",
          position: "CEO, Empresa",
          text: "NovaCorp ha superado todas nuestras expectativas. Las características avanzadas y el excelente soporte lo convierten en una opción destacada.",
        },
        {
          name: "David Lee",
          position: "Fundador, Startup Hub",
          text: "Las apps de NovaCorp y su desarrollo de software han transformado nuestro flujo de trabajo. Las opciones de personalización son inigualables y el equipo de soporte es increíblemente receptivo.",
        },
      ],
    },
    blog: {
      title: "Últimos Artículos",
      description1:
        "Sumérgete en nuestro blog para descubrir las últimas tendencias, consejos y novedades",
      description2:
        "sobre desarrollo web, diseño y buenas prácticas del sector. Mantente informado e inspirado",
      description3: "con ideas de expertos y recursos valiosos.",
      more: "Ver más artículos",
      posts: [
        {
          badge: "Diseño Web",
          title: "Domina el Diseño Responsivo: Guía para Principiantes",
          text: "Explora los fundamentos del diseño web responsivo y aprende consejos esenciales para crear sitios que luzcan bien en cualquier dispositivo.",
          date: "15 de julio de 2025",
        },
        {
          badge: "Diseño UX/UI",
          title: "El Futuro de las Tendencias UI/UX en 2025",
          text: "Descubre las últimas tendencias que están dando forma al diseño de interfaces y experiencia de usuario en el panorama digital de este año.",
          date: "11 de julio de 2025",
        },
        {
          badge: "Motor de Búsqueda",
          title: "Estrategias SEO Efectivas para 2025",
          text: "Sumérgete en estrategias SEO prácticas y consejos para mejorar la visibilidad de tu sitio web y aumentar el tráfico orgánico.",
          date: "29 de junio de 2025",
        },
        {
          badge: "Ciberseguridad",
          title: "Fundamentos de Seguridad: Protege tu Sitio Web de Amenazas",
          text: "Medidas esenciales de seguridad y buenas prácticas para proteger tu sitio web y los datos de los usuarios ante amenazas cibernéticas.",
          date: "27 de junio de 2025",
        },
      ],
    },
    contact: {
      title: "Ponte en Contacto",
      intro1:
        "Contáctanos hoy mismo para descubrir cómo nuestro equipo puede ayudarte.",
      intro2:
        "Ya sea que tengas consultas, necesites soporte o quieras hablar sobre una colaboración, estamos aquí para ayudarte.",
      intro3: "¡Escríbenos y comencemos una conversación!",
      sectionTitle: "Contáctanos para Hablar de Tu Proyecto",
      sectionText:
        "¿Tienes un proyecto en mente? Estamos deseando hablar contigo. Si necesitas asesoramiento, tienes preguntas o quieres compartir tus ideas, no dudes en escribirnos.",
      company: {
        name: "NovaCorp, Inc",
        addressLine1: "795 Folsom Ave, Suite 600",
        addressLine2: "San Francisco, CA 94107",
        hours: [
          "Lunes a Viernes: 9:00 AM - 6:00 PM",
          "Sábados y Domingos: Cerrado",
        ],
        phone: "Teléfono",
        intlPhone: "Internacional",
        email: "Correo electrónico",
        phoneNumber: "(123) 456-7890",
        intlPhoneNumber: "+11 (0) 123 456 78",
        emailUser: "soporte",
        emailDomain: "novacorp.com",
      },
      form: {
        name: "Nombre",
        lastname: "Apellidos",
        email: "Correo electrónico",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar mensaje",
      },
    },
    footer: {
      description:
        "Tu solución ideal para crear aplicaciones web sorprendentes, responsivas y de alto rendimiento.",
      follow: "Síguenos",
      column2: {
        title: "Enlaces Rápidos",
        links: [
          "Noticias",
          "Información Corporativa",
          "Carreras",
          "Para Inversores",
          "Recursos de Marca",
        ],
        servicesTitle: "Servicios",
        services: ["Desarrollo Web", "Apps", "SEO", "Marketing"],
      },
      column3: {
        title: "Recursos",
        links: [
          "Documentación",
          "Soporte",
          "Preguntas Frecuentes",
          "Comunidad",
          "Tutoriales",
        ],
        legalTitle: "Legal",
        legal: [
          "Política de Privacidad",
          "Términos de Servicio",
          "Cookies",
          "Cumplimiento",
        ],
      },
      column4: {
        title: "Centro de Ayuda",
        help: [
          "Formulario de Contacto",
          "Soporte por Chat",
          "Portal de Ayuda",
          "Soporte por Email",
          "Documentación Técnica",
          "Actualizaciones de Servicio",
          "API para Desarrolladores",
          "Base de Conocimientos",
        ],
      },
    },
  },

  en: {
    lang: {
      es: "Spanish",
      en: "English",
    },
    brand: "NovaCorp",
    brandSurname: "Solutions",
    slogan: "Smart Tech. Real Results.",
    menu: {
      home: "Home",
      about: "About",
      features: "Features",
      pricing: "Pricing",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      cta: "Get started",
    },
    home: {
      title: "Accelerate your business with ",
      description:
        "We provide innovative, scalable tech solutions for modern businesses.",
      description2:
        "Websites, apps of all kinds, eCommerce platforms, dashboards, and more — all custom developed.",
      description3:
        "Using the latest technologies in web application development and mobile PWAs.",
      cta: "Discover our services",
      techs: "Technologies we use",
      downloads: "Downloads / Clients",
      version: "Bootstrap Version",
    },
    about: {
      title: "About NovaCorp",
      description:
        "NovaCorp helps companies launch innovative, high-performance digital products.",
      description2:
        "Whether mobile apps or custom desktop dashboards, our focus is always on technical excellence and user experience.",
      features: [
        {
          title: "Mobile-First Architecture",
          text: "Perfectly responsive across all devices and screen sizes.",
        },
        {
          title: "Fully Customizable",
          text: "Easily adjust styles, modules and layouts to your needs.",
        },
        {
          title: "Optimized Performance",
          text: "Fast loading, clean code, and smooth UX guaranteed.",
        },
        {
          title: "Enterprise Security",
          text: "Advanced protection for your business and customer data.",
        },
        {
          title: "Community Support",
          text: "Active developer community and support channels.",
        },
        {
          title: "24/7 Support",
          text: "We’re always here when you need us.",
        },
        {
          title: "Scalable Infrastructure",
          text: "Built to grow with your business without limits.",
        },
        {
          title: "Intuitive UI",
          text: "User-centered interface for maximum productivity.",
        },
      ],
    },
    features: {
      title: "Our Features",
      subtitle: "Standout capabilities to boost your digital presence.",
      subtitle2:
        "With advanced customization and seamless integration, create powerful and stunning",
      subtitle3:
        "admin interfaces, enhancing productivity and user satisfaction.",
      dashboard1: "Dashboard (spanish light theme)",
      dashboard2: "Dashboard (english dark theme)",
      ecommerce1: "eCommerce interface (spanish light theme)",
      ecommerce2: "eCommerce interface (english dark theme)",
      messenger1: "Messenger App (spanish dark theme",
      messenger2: "Messenger App (english light theme)",
      todo1: "ToDo List interface (spanish light theme)",
      todo2: "ToDo List interface (english dark theme)",
      markdown1: "Markdown live editor (spanish dark theme)",
      markdown2: "Markdown live editor (english light theme)",
      login1: "Access control system (spanish light theme)",
      login2: "Access control system (english dark theme)",
    },
    pricing: {
      title: "Our Pricing Plans",
      subtitle: "Pick the plan that fits your business needs.",
      subtitle2:
        "Our pricing is designed to be flexible and affordable, providing value for businesses of all sizes.",
      subtitle3: "Explore our plans to find the best fit for your requirements",
      cta: "Get started",
      plansFixed: [
        {
          title: "Starter Plan",
          price: "$5",
          icon: "solar:usb-bold-duotone",
          featured: false,
          features: [
            { label: "Storage", value: "10 GB", available: true },
            { label: "Bandwidth", value: "100 GB", available: true },
            { label: "Domains", value: "1", available: true },
            { label: "SSL Certificate", value: "Shared", available: true },
            { label: "Email Accounts", value: "5", available: true },
            { label: "24/7 Support", value: "Yes", available: true },
            { label: "Backups", value: "No", available: false },
            { label: "Uptime Guarantee", value: "No", available: false },
            { label: "FTP Access", value: "No", available: false },
            { label: "Control Panel", value: "No", available: false },
            { label: "Free Domain", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "E-commerce Support", value: "No", available: false },
            {
              label: "45-day Money-back Guarantee",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Booster Plan",
          price: "$10",
          icon: "solar:map-arrow-up-bold-duotone",
          featured: false,
          features: [
            { label: "Storage", value: "20 GB", available: true },
            { label: "Bandwidth", value: "200 GB", available: true },
            { label: "Domains", value: "2", available: true },
            { label: "SSL Certificate", value: "Free", available: true },
            { label: "Email Accounts", value: "10", available: true },
            { label: "24/7 Support", value: "Yes", available: true },
            { label: "Backups", value: "No", available: false },
            { label: "Uptime Guarantee", value: "No", available: false },
            { label: "FTP Access", value: "No", available: false },
            { label: "Control Panel", value: "No", available: false },
            { label: "Free Domain", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "E-commerce Support", value: "No", available: false },
            {
              label: "45-day Money-back Guarantee",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Premium Plan",
          price: "$15",
          icon: "solar:cup-first-bold-duotone",
          featured: true,
          features: [
            { label: "Storage", value: "50 GB", available: true },
            { label: "Bandwidth", value: "500 GB", available: true },
            { label: "Domains", value: "Unlimited", available: true },
            { label: "SSL Certificate", value: "Free", available: true },
            { label: "Email Accounts", value: "Unlimited", available: true },
            { label: "24/7 Support", value: "Yes", available: true },
            { label: "Backups", value: "Weekly", available: true },
            { label: "Uptime Guarantee", value: "99.9%", available: true },
            { label: "FTP Access", value: "Yes", available: true },
            { label: "Control Panel", value: "cPanel", available: true },
            { label: "Free Domain", value: "No", available: false },
            { label: "Firewall", value: "No", available: false },
            { label: "E-commerce Support", value: "No", available: false },
            {
              label: "45-day Money-back Guarantee",
              value: "No",
              available: false,
            },
          ],
        },
        {
          title: "Enterprise Plan",
          price: "$99",
          icon: "solar:buildings-bold-duotone",
          featured: false,
          features: [
            { label: "Storage", value: "1 TB", available: true },
            { label: "Bandwidth", value: "20 TB", available: true },
            { label: "Domains", value: "Unlimited", available: true },
            { label: "SSL Certificate", value: "Free", available: true },
            { label: "Email Accounts", value: "Unlimited", available: true },
            { label: "24/7 Support", value: "Yes", available: true },
            { label: "Backups", value: "Daily", available: true },
            { label: "Uptime Guarantee", value: "99.9%", available: true },
            { label: "FTP Access", value: "Yes", available: true },
            { label: "Control Panel", value: "cPanel", available: true },
            { label: "Free Domain", value: "Yes", available: true },
            { label: "Firewall", value: "Yes", available: true },
            { label: "E-commerce Support", value: "Yes", available: true },
            {
              label: "45-day Money-back Guarantee",
              value: "Yes",
              available: true,
            },
          ],
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      description1: "Read testimonials from our satisfied customers.",
      description2:
        "Discover how NovaCorp  enhances productivity and exceeds expectations",
      description3:
        "with its ease of use, advanced features, and exceptional support.",
      comments: [
        {
          name: "John Doe",
          position: "CEO, Company",
          text: "NovaCorp transformed our workflow. The customization options are unparalleled, and the support team is incredibly responsive.",
        },
        {
          name: "Carlos Ruiz",
          position: "CTO, Innovate Corp",
          text: "Our productivity has soared since adopting this template. The features are top-notch, and the user experience is outstanding.",
        },
        {
          name: "Jane Smith",
          position: "Project Manager, Creative Agency",
          text: "Their apps are a game-changer. They are intuitive, flexible, and the seamless integration has made our projects run smoother than ever.",
        },
        {
          name: "Paula González",
          position: "CEO, Company",
          text: "NovaCorp has exceeded all our expectations. The advanced features and excellent support make it a standout choice.",
        },
        {
          name: "David Lee",
          position: "Founder, Startup Hub",
          text: "NovaCorp Apps & Software developed transformed our workflow. The customization options are unparalleled, and the support team is incredibly responsive.",
        },
      ],
    },
    blog: {
      title: "Our Latest Insights",
      description1:
        "Dive into our blog for the latest trends, tips, and updates",
      description2:
        "on web development, design, and industry best practices. Stay informed and inspired",
      description3: "with expert insights and valuable resources.",
      more: "See More Company Stories and News",
      posts: [
        {
          badge: "Web Design",
          title: "Mastering Responsive Design: A Guide for Beginners",
          text: "Explore the fundamentals of responsive web design and learn essential tips to create websites that look great on any device.",
          date: "July 15, 2025",
        },
        {
          badge: "UXUI Design",
          title: "The Future of UI/UX Trends in 2025",
          text: "Discover the latest trends shaping user interface and experience design in the digital landscape this year.",
          date: "July 11, 2025",
        },
        {
          badge: "Search Engine",
          title: "Effective SEO Strategies for 2025",
          text: "Dive into actionable SEO strategies and tips to boost your website’s visibility and drive organic traffic.",
          date: "June 29, 2025",
        },
        {
          badge: "Cyber Security",
          title:
            "Security Essentials: Protecting Your Website from Cyber Threats",
          text: "Essential security measures and best practices to safeguard your website and user data from cyber threats.",
          date: "June 27, 2025",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      intro1: "Contact us today to explore how our team can assist you.",
      intro2:
        "Whether you have inquiries, need support, or want to discuss a partnership, we're here to help.",
      intro3: "Reach out to us and let's start a conversation!",
      sectionTitle: "Contact Us to Discuss Your Project",
      sectionText:
        "Do you have a project in mind? We’re eager to discuss it with you. Whether you’re looking for advice, have questions, or want to share your ideas, feel free to reach out.",
      company: {
        name: "NovaCorp, Inc",
        addressLine1: "795 Folsom Ave, Suite 600",
        addressLine2: "San Francisco, CA 94107",
        hours: [
          "Monday - Friday: 9:00 AM - 6:00 PM",
          "Saturday - Sunday: Closed",
        ],
        phone: "Phone",
        intlPhone: "International",
        email: "Email",
        phoneNumber: "(123) 456-7890",
        intlPhoneNumber: "+11 (0) 123 456 78",
        emailUser: "support",
        emailDomain: "novacorp.com",
      },
      form: {
        name: "First Name",
        lastname: "Last Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send Message",
      },
    },
    footer: {
      description:
        "Your go-to solution for creating stunning, responsive, and high-performance web applications.",
      follow: "Follow Us",
      column2: {
        title: "Quick Links",
        links: [
          "Newsroom",
          "Company Info",
          "Careers",
          "For Investors",
          "Brand Resources",
        ],
        servicesTitle: "Services",
        services: ["Web Development", "App Development", "SEO", "Marketing"],
      },
      column3: {
        title: "Resources",
        links: ["Documentation", "Support", "FAQs", "Community", "Tutorials"],
        legalTitle: "Legal",
        legal: [
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "Compliance",
        ],
      },
      column4: {
        title: "Help Center",
        help: [
          "Contact Form",
          "Live Chat Support",
          "Portal Help Center",
          "Email Support",
          "Technical Documentation",
          "Service Updates",
          "Developer API",
          "Knowledge Base",
        ],
      },
    },
  },
};

export default messages;
