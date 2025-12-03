import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Users, TrendingUp, Heart, Award, Sparkles } from 'lucide-react';

// --- Interfaces de Componentes ---

interface AccordionSectionProps {
  title: string;
  icon: React.ElementType; // CAMBIO: Usamos React.ElementType que acepta cualquier componente
  children: React.ReactNode;
  defaultOpen?: boolean;
}

// Definir los tipos permitidos para 'variant'
type CardVariant = "default" | "highlight" | "success";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: CardVariant;
}

// Definir los tipos permitidos para 'color'
type BadgeColor = "red" | "blue" | "green" | "purple";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
}

// --- Componentes con Tipos Aplicados ---

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-left flex items-center justify-between hover:from-red-700 hover:to-red-800 transition-all"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, children, variant = "default" }) => {
  const variants: Record<CardVariant, string> = {
    default: "bg-white border-gray-200",
    highlight: "bg-red-50 border-red-200",
    success: "bg-green-50 border-green-200"
  };
  
  return (
    <div className={`border rounded-lg p-5 mb-4 ${variants[variant]}`}>
      {title && <h4 className="font-bold text-lg mb-3 text-gray-800">{title}</h4>}
      {children}
    </div>
  );
};

const Badge: React.FC<BadgeProps> = ({ children, color = "red" }) => {
  const colors: Record<BadgeColor, string> = {
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800"
  };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors[color]} mr-2 mb-2`}>
      {children}
    </span>
  );
};

export default function EstrategiaElToro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">🐂</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">ESTRATEGIA DE MARKETING INTEGRAL</h1>
              <p className="text-xl opacity-90">EL TORO | Dulces Navideños de Tradición</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur">
            <p className="text-sm font-semibold mb-2">📋 RESUMEN EJECUTIVO</p>
            <p className="text-sm leading-relaxed">
              Estrategia integral para aumentar la visibilidad y notoriedad de EL TORO mediante patrocinios estratégicos, 
              colaboraciones creativas y acciones innovadoras, manteniendo valores de tradición, autenticidad y compromiso local.
            </p>
          </div>
        </div>

        {/* Identidad de Marca */}
        <AccordionSection title="Identidad y Posicionamiento de Marca" icon={Target} defaultOpen={true}>
          <Card variant="highlight">
            <h4 className="font-bold text-lg mb-3">ADN de la Marca</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏛️</div>
                <h5 className="font-semibold">Tradición</h5>
                <p className="text-sm text-gray-600">Herencia cultural de Castilla y León</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">✨</div>
                <h5 className="font-semibold">Autenticidad</h5>
                <p className="text-sm text-gray-600">Producto artesanal de calidad</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🤝</div>
                <h5 className="font-semibold">Compromiso Local</h5>
                <p className="text-sm text-gray-600">Apoyo activo a la comunidad</p>
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="font-bold text-lg mb-3">Evolución Estratégica</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 text-center p-3 bg-gray-100 rounded">
                <p className="text-sm text-gray-600 mb-1">DE:</p>
                <p className="font-semibold">La Porvenir de Marca - El Toro Ibérico</p>
              </div>
              <div className="text-2xl">→</div>
              <div className="flex-1 text-center p-3 bg-red-100 rounded">
                <p className="text-sm text-gray-600 mb-1">A:</p>
                <p className="font-bold text-red-700">EL TORO</p>
              </div>
            </div>
            <p className="text-sm text-gray-700"><strong>Objetivo:</strong> Hacer más notoria la presencia de Castilla y León en el ámbito de los dulces navideños a nivel nacional</p>
          </Card>

          <Card>
            <h4 className="font-bold text-lg mb-3">Pilares de Implicación</h4>
            <div className="flex flex-wrap gap-2">
              <Badge color="red">🏅 Deporte</Badge>
              <Badge color="purple">🎭 Cultura</Badge>
              <Badge color="blue">🌟 Talento Local</Badge>
              <Badge color="green">🏛️ Potencia Local</Badge>
            </div>
          </Card>
        </AccordionSection>

        {/* Alianzas Estratégicas */}
        <AccordionSection title="Alianzas Estratégicas y Patrocinios" icon={Users}>
          <Card variant="highlight" title="1. Patrocinio Sillor | Compromiso Cultural">
            <p className="text-sm mb-3"><strong>Objetivo:</strong> Posicionar EL TORO como marca culturalmente comprometida</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Acciones:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Patrocinio de eventos e ideas innovadoras transables</li>
                <li>• Compromiso por lo local, la cultura y la música</li>
                <li>• Desarrollo de propuestas que generen engagement</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="text-sm font-semibold mb-2">Beneficios:</p>
              <p className="text-sm text-gray-700">Asociación con valores culturales positivos, visibilidad ante público comprometido y construcción de imagen responsable</p>
            </div>
          </Card>

          <Card title='2. Colaboración con "Bro Lucas" | Marketing Deportivo'>
            <p className="text-sm mb-3"><strong>Concepto:</strong> Activación en eventos deportivos mediante merchandising estratégico</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Implementación:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Chaquetas exclusivas EL TORO para celebración de goles</li>
                <li>• Presencia visual en momentos de máximo impacto emocional</li>
                <li>• Llamar la atención en eventos mediante imagen de calidad</li>
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <p className="text-sm font-semibold mb-1">Impacto:</p>
              <p className="text-sm text-gray-700">Viralización natural, asociación con celebración y alegría, contenido orgánico en redes sociales</p>
            </div>
          </Card>

          <Card title="3. Colaboración con Boca Negra | Innovación Gastronómica">
            <p className="text-sm mb-3"><strong>Concepto disruptivo:</strong> Hamburguesas de polvorones</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Estrategia:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Fusión gastronómica que genera conversación</li>
                <li>• Experiencia única: tradición + innovación</li>
                <li>• Producto exclusivo de edición limitada</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm font-semibold mb-1">Resultados:</p>
              <p className="text-sm text-gray-700">Buzz marketing, atracción millennial/Gen Z, demostración de versatilidad, contenido compartible</p>
            </div>
          </Card>
        </AccordionSection>

        {/* Campañas de Marketing */}
        <AccordionSection title="Campañas y Acciones de Marketing" icon={TrendingUp}>
          <Card variant="highlight" title="🌐 CAMPAÑA 1: Publicidad con Agente Virtual">
            <p className="text-sm mb-3">Implementación de tecnología innovadora para captar atención y generar expectación</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Enfoque en User Generated Content:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Experiencias exclusivas que inviten a la participación</li>
                <li>• Incentivo para que usuarios creen y compartan contenido</li>
                <li>• Amplificación orgánica del alcance</li>
              </ul>
            </div>
          </Card>

          <Card title="🎊 CAMPAÑA 2: Activación San Fermines y Eventos Taurinos">
            <p className="text-sm mb-3"><strong>Concepto:</strong> Capitalización de eventos icónicos relacionados con la marca</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Estrategia:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Activaciones en San Fermines, toros y eventos relacionados</li>
                <li>• Conexión ideas a la marca y dar visibilidad</li>
                <li>• Aprovechamiento para apertura de nueva tienda</li>
                <li>• Combinación de tradición taurina con polvorones de calidad</li>
              </ul>
            </div>
          </Card>

          <Card title="⚽ CAMPAÑA 3: Patrocinio Real Valladolid">
            <p className="text-sm mb-3"><strong>Objetivo:</strong> Visibilidad masiva mediante alianza deportiva estratégica</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Propuesta de valor:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Patrocinio a cambio de visibilidad en estadio y uniformes</li>
                <li>• Asociación con talento deportivo y apoyo al equipo local</li>
                <li>• Escribir su imagen al club: talento, apoyo local, compromiso y tradición</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm font-semibold mb-1">ROI esperado:</p>
              <p className="text-sm text-gray-700">Exposición masiva por partido, cobertura mediática, conexión emocional con afición, posicionamiento como marca comprometida</p>
            </div>
          </Card>

          <Card variant="highlight" title="🎁 CAMPAÑA 4: El Día del Polvorón">
            <p className="text-sm mb-3"><strong>Concepto:</strong> Creación de evento/celebración propia de la marca</p>
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Mecánica (Branded Content):</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Sorteo de viajes mediante concurso</li>
                <li>• Monedas ocultas en polvorones (gamificación)</li>
                <li>• Aquellos que reciban moneda en el polvorón participan</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="text-sm font-semibold mb-1">Beneficios:</p>
              <p className="text-sm text-gray-700">Incremento ventas, engagement masivo, contenido orgánico, construcción de evento anual propio</p>
            </div>
          </Card>
        </AccordionSection>

        {/* Estrategia de Comunicación */}
        <AccordionSection title="Estrategia de Comunicación en Medios" icon={Sparkles}>
          <Card variant="highlight" title="📱 Presencia en Marquesinas | Publicidad Exterior Inteligente">
            <div className="mb-4 p-3 bg-white rounded">
              <p className="text-sm font-semibold mb-2">Filosofía:</p>
              <p className="text-sm italic">"Lo que SIGUE MUCHO en cuenta el público objetivo - no se puede utilizar el mismo tono, el mismo humor ni las mismas frases"</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-red-200 rounded p-4 bg-red-50">
                <h5 className="font-semibold mb-2 text-red-800">ZONA A: Población Ibérica</h5>
                <p className="text-sm mb-2"><strong>Tono:</strong> Humorístico y llamativo</p>
                <p className="text-sm mb-2"><strong>Estilo:</strong> Frases con tono gracioso</p>
                <p className="text-sm mb-2"><strong>Segmentación:</strong> Por temas geográficos</p>
              </div>
              
              <div className="border border-blue-200 rounded p-4 bg-blue-50">
                <h5 className="font-semibold mb-2 text-blue-800">ZONA B: Población Mayor</h5>
                <p className="text-sm mb-2"><strong>Tono:</strong> Humor más leve y serio</p>
                <p className="text-sm mb-2"><strong>Enfoque:</strong> Valores tradición, nostalgia</p>
                <p className="text-sm mb-2"><strong>Mensaje:</strong> Tono algo más serio</p>
              </div>
            </div>
            
            <p className="text-xs mt-3 text-gray-600 italic">* Estas marquesinas se colocan como S (estratégicamente según análisis demográfico)</p>
          </Card>

          <Card title="🤳 Colaboración con Inelusa | Amplificación Digital">
            <p className="text-sm mb-3">Lograr visibilidad y reforzar la marca con ideas que cuenten con la imagen de la empresa</p>
            <div className="flex flex-wrap gap-2">
              <Badge color="blue">Campañas digitales</Badge>
              <Badge color="purple">Contenido audiovisual</Badge>
              <Badge color="green">Experiencias interactivas</Badge>
            </div>
          </Card>

          <Card title="👥 Campaña con Influencers | Humanización de Marca">
            <p className="text-sm mb-3"><strong>Concepto:</strong> Humanizar la marca mediante portavoces auténticos que transmitan ideas de la marca</p>
            
            <div className="mb-3">
              <p className="text-sm font-semibold mb-2">Objetivos (más allá de ventas directas):</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded text-sm">🎯 Visibilidad</div>
                <div className="bg-gray-50 p-2 rounded text-sm">🎯 Notoriedad</div>
                <div className="bg-gray-50 p-2 rounded text-sm">🎯 No solo ventas</div>
                <div className="bg-gray-50 p-2 rounded text-sm">🎯 Público objetivo</div>
              </div>
            </div>
          </Card>

          <Card title="📺 Campañas en Medios Diversos | Estrategia Omnicanal">
            <p className="text-sm mb-3">Campañas en medios distintos para llegar a todos los individuos posibles</p>
            <div className="flex flex-wrap gap-2">
              <Badge color="red">📻 Radio</Badge>
              <Badge color="blue">📰 Prensa</Badge>
              <Badge color="green">📱 Digital</Badge>
              <Badge color="purple">📺 TV</Badge>
              <Badge color="red">🏙️ Exterior</Badge>
            </div>
          </Card>
        </AccordionSection>

        {/* Valores y RSC */}
        <AccordionSection title="Valores de Marca y Responsabilidad Social" icon={Heart}>
          <Card variant="success">
            <div className="text-center mb-4 p-4 bg-white rounded-lg">
              <p className="text-lg font-bold text-gray-800 mb-2">🧭 Equilibrio Estratégico Fundamental</p>
              <p className="text-sm italic text-gray-700">"No solo fijarse en lo que le gusta a la marca, sino también encontrar lo que le interesa al consumidor (mantener un equilibrio)"</p>
            </div>
          </Card>

          <Card title="🏅 Apuesta por el Deporte y la Cultura">
            <p className="text-sm mb-2">Valores de la marca expresados en acción:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Compromiso con manifestaciones deportivas locales</li>
              <li>• Apoyo a eventos culturales que enriquecen la comunidad</li>
              <li>• Visibilidad como marca comprometida</li>
            </ul>
          </Card>

          <Card title="🌟 Patrocinio a Sillor | Apoyo al Talento Emergente">
            <p className="text-sm mb-3">Desde sus inicios se logra apoyar al talento local emergente. Se traduce en visibilidad a futuro.</p>
            <div className="bg-purple-50 p-3 rounded mb-3">
              <p className="text-sm italic">"El padre decir: 'Ya conoce allí cuando no le conocía nadie'"</p>
            </div>
            <p className="text-sm">Se demuestra un apoyo genuino y el deseo de devolver a la sociedad lo que le ha dado</p>
          </Card>

          <Card variant="highlight" title="🤲 Devolución a la Sociedad">
            <div className="mb-4 p-3 bg-white rounded">
              <p className="text-sm font-bold text-center">"No todo es lo que gana: hay que acordarse de la sociedad"</p>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">💰 Donaciones</p>
                <p className="text-sm text-gray-700">Apoyo por la sociedad y el bienestar mediante donaciones</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold mb-2">🎪 Organización de Eventos Solidarios</p>
                <p className="text-sm text-gray-700">Eventos de recaudación, actividades comunitarias, iniciativas sociales</p>
              </div>
            </div>
          </Card>
        </AccordionSection>

        {/* KPIs */}
        <AccordionSection title="Indicadores Clave de Éxito (KPIs)" icon={Award}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="📊 Visibilidad y Reconocimiento">
              <ul className="text-sm space-y-1">
                <li>• Incremento reconocimiento marca</li>
                <li>• Alcance medios tradicionales/digitales</li>
                <li>• Share of voice categoría</li>
              </ul>
            </Card>
            
            <Card title="💬 Engagement y Comunidad">
              <ul className="text-sm space-y-1">
                <li>• Interacciones redes sociales</li>
                <li>• User Generated Content</li>
                <li>• Participación en activaciones</li>
              </ul>
            </Card>
            
            <Card title="💼 Impacto Comercial">
              <ul className="text-sm space-y-1">
                <li>• Incremento ventas campaña</li>
                <li>• Nuevos puntos de venta</li>
                <li>• Crecimiento distribución</li>
              </ul>
            </Card>
            
            <Card title="❤️ Responsabilidad Social">
              <ul className="text-sm space-y-1">
                <li>• Fondos recaudados</li>
                <li>• Talentos apoyados</li>
                <li>• Eventos comunitarios</li>
              </ul>
            </Card>
          </div>
        </AccordionSection>

        {/* Footer */}
        <div className="mt-8 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 CONCLUSIÓN</h2>
          <p className="text-sm leading-relaxed mb-6">
            Esta estrategia integral posiciona a <strong>EL TORO</strong> no solo como una marca de dulces navideños, 
            sino como un actor social activo que combina tradición auténtica con innovación estratégica, 
            éxito comercial con responsabilidad social, identidad local con alcance nacional, 
            y valores sólidos con comunicación moderna.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge color="red">✅ Tradición + Innovación</Badge>
            <Badge color="blue">✅ Éxito + Responsabilidad</Badge>
            <Badge color="green">✅ Local + Nacional</Badge>
            <Badge color="purple">✅ Valores + Modernidad</Badge>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-lg font-semibold italic">
              EL TORO | Tradición que se siente, calidad que se saborea, compromiso que se vive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}