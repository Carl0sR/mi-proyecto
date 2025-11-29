import React, { useState } from 'react';
import { TrendingUp, Users, Target, AlertCircle, Zap, Shield, Smartphone, Database, ChevronRight, DollarSign } from 'lucide-react';

export default function MarketAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null);

  const marketData = {
    size: "580B€",
    growth: "+10% anual",
    spain: "Mercado fragmentado",
    digital: "65% adopción IA"
  };

  const opportunities = [
    {
      id: 1,
      title: "Plataforma Todo-en-Uno para PYMEs",
      icon: Smartphone,
      priority: "Alta",
      difficulty: "Media",
      revenue: "Suscripción + Comisión",
      description: "Marketplace que conecta PYMEs con gestorías, asesorías fiscales y servicios legales verificados",
      painPoints: [
        "PYMEs no saben cómo elegir una buena gestoría",
        "Falta de transparencia en precios y servicios",
        "Proceso de cambio de asesoría es complejo"
      ],
      solutions: [
        "Sistema de matching automático basado en necesidades",
        "Comparador de precios y servicios transparente",
        "Proceso de migración asistida",
        "Reseñas verificadas de clientes reales"
      ],
      metrics: {
        tam: "100K+ PYMEs en España",
        competition: "Baja (mercado fragmentado)",
        barriers: "Confianza y red de proveedores"
      }
    },
    {
      id: 2,
      title: "Portal de Gestión Colaborativa",
      icon: Database,
      priority: "Alta",
      difficulty: "Alta",
      revenue: "SaaS B2B2C",
      description: "Software que conecta empresas con sus gestorías/asesorías para colaboración en tiempo real",
      painPoints: [
        "Comunicación ineficiente con asesores (email, WhatsApp)",
        "Documentación desorganizada",
        "Falta de visibilidad sobre estado de trámites"
      ],
      solutions: [
        "Portal centralizado cliente-asesoría",
        "Subida automática de documentos con OCR",
        "Dashboard con estado de trámites y deadlines",
        "Integración con software de gestorías (Holded, etc.)"
      ],
      metrics: {
        tam: "50K+ gestorías + sus clientes",
        competition: "Media (existen soluciones parciales)",
        barriers: "Integración técnica compleja"
      }
    },
    {
      id: 3,
      title: "Servicios Legales On-Demand",
      icon: Shield,
      priority: "Media",
      difficulty: "Media",
      revenue: "Pay-per-use + Premium",
      description: "Marketplace de servicios legales puntuales con abogados especializados",
      painPoints: [
        "Servicios legales son caros para trámites simples",
        "No está claro qué especialista necesitas",
        "Proceso lento y poco transparente"
      ],
      solutions: [
        "Servicios a precio fijo (ej: crear SL 299€)",
        "Consultas express por videollamada",
        "Wizard inteligente que identifica tu necesidad legal",
        "Red de abogados especializados verificados"
      ],
      metrics: {
        tam: "Autónomos + PYMEs + particulares",
        competition: "Media (Legalitas existe)",
        barriers: "Regulación colegios profesionales"
      }
    },
    {
      id: 4,
      title: "Asistente de Cumplimiento con IA",
      icon: Zap,
      priority: "Media",
      difficulty: "Alta",
      revenue: "Suscripción mensual",
      description: "Herramienta que alerta sobre obligaciones fiscales, laborales y legales personalizadas",
      painPoints: [
        "Difícil estar al día con cambios normativos",
        "Olvidos cuestan multas y sanciones",
        "Cada negocio tiene obligaciones diferentes"
      ],
      solutions: [
        "Alertas personalizadas según tipo de empresa",
        "Calendario automático de obligaciones fiscales",
        "Explicaciones simples de nuevas normativas",
        "Integración con tu gestoría actual"
      ],
      metrics: {
        tam: "300K+ autónomos + PYMEs",
        competition: "Baja (nicho específico)",
        barriers: "Actualización constante normativa"
      }
    },
    {
      id: 5,
      title: "Red de Subvenciones y Ayudas",
      icon: DollarSign,
      priority: "Alta",
      difficulty: "Media",
      revenue: "Comisión por éxito",
      description: "Plataforma que conecta empresas con gestores especializados en subvenciones (Kit Digital, etc.)",
      painPoints: [
        "Empresas desconocen ayudas disponibles",
        "Tramitación compleja y lenta",
        "Gestorías no todas tienen expertise en subvenciones"
      ],
      solutions: [
        "Buscador inteligente de ayudas elegibles",
        "Matching con gestores especializados en subvenciones",
        "Seguimiento de expediente en tiempo real",
        "Comisión solo si se obtiene la ayuda"
      ],
      metrics: {
        tam: "Kit Digital: miles de empresas sin aprovechar",
        competition: "Media (FANDIT lidera)",
        barriers: "Conocimiento técnico especializado"
      }
    }
  ];

  const trends = [
    {
      trend: "Digitalización acelerada",
      impact: "Las gestorías tradicionales están migrando a digital. Oportunidad para ser el 'agregador' que las conecta con clientes digitales",
      stat: "60% adopta modelos híbridos"
    },
    {
      trend: "Factura electrónica obligatoria",
      impact: "Todas las empresas necesitarán adaptarse en 2025. Oportunidad para ofrecer soluciones integradas",
      stat: "Obligatorio 2025"
    },
    {
      trend: "Fondos europeos (Next Generation)",
      impact: "Millones en ayudas disponibles. Las empresas necesitan ayuda para acceder (Kit Digital, etc.)",
      stat: "11.483M€ disponibles"
    },
    {
      trend: "Búsqueda de transparencia",
      impact: "Clientes buscan comparativas, precios claros y reseñas. Mercado maduro para marketplace",
      stat: "Top criterio de elección"
    }
  ];

  const competitors = [
    { name: "Gestorías tradicionales", threat: "Baja", reason: "Lentas en digitalizar, sin presencia online fuerte" },
    { name: "Legalitas/TaxDown", threat: "Media", reason: "Verticales específicos, no cubren gestión integral" },
    { name: "Holded/Sage", threat: "Media", reason: "Software para gestorías, no marketplace B2C" },
    { name: "FANDIT", threat: "Baja", reason: "Especializado solo en subvenciones" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Intermediación de Servicios Profesionales
              </h1>
              <p className="text-gray-600 text-lg">
                Análisis de oportunidades de mercado - España 2025
              </p>
            </div>
            <TrendingUp className="w-16 h-16 text-indigo-600" />
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(marketData).map(([key, value]) => (
              <div key={key} className="bg-indigo-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">{value}</div>
                <div className="text-sm text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-xl mb-6">
          <div className="flex border-b">
            {[
              { id: 'overview', label: 'Tendencias', icon: TrendingUp },
              { id: 'opportunities', label: 'Oportunidades', icon: Target },
              { id: 'competition', label: 'Competencia', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-4 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Trends Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🔥 Tendencias del Mercado</h2>
                {trends.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.trend}</h3>
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-gray-700">{item.impact}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Opportunities Tab */}
            {activeTab === 'opportunities' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Oportunidades de Negocio</h2>
                <div className="grid gap-4">
                  {opportunities.map((opp) => (
                    <div
                      key={opp.id}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => setSelectedOpportunity(opp.id === selectedOpportunity ? null : opp.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-indigo-100 p-3 rounded-xl">
                            <opp.icon className="w-8 h-8 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{opp.title}</h3>
                            <p className="text-gray-600">{opp.description}</p>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-6 h-6 text-gray-400 transition-transform ${
                            selectedOpportunity === opp.id ? 'rotate-90' : ''
                          }`}
                        />
                      </div>

                      <div className="flex gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          opp.priority === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          Prioridad: {opp.priority}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                          Dificultad: {opp.difficulty}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                          {opp.revenue}
                        </span>
                      </div>

                      {selectedOpportunity === opp.id && (
                        <div className="mt-4 space-y-4 border-t pt-4">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 text-red-600" />
                              Problemas que resuelve:
                            </h4>
                            <ul className="space-y-1">
                              {opp.painPoints.map((point, idx) => (
                                <li key={idx} className="text-gray-700 ml-7">• {point}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-green-600" />
                              Solución propuesta:
                            </h4>
                            <ul className="space-y-1">
                              {opp.solutions.map((sol, idx) => (
                                <li key={idx} className="text-gray-700 ml-7">✓ {sol}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-indigo-50 rounded-lg p-4">
                            <h4 className="font-bold text-gray-900 mb-2">📊 Métricas clave:</h4>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Mercado:</span>
                                <p className="font-semibold">{opp.metrics.tam}</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Competencia:</span>
                                <p className="font-semibold">{opp.metrics.competition}</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Barreras:</span>
                                <p className="font-semibold">{opp.metrics.barriers}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Competition Tab */}
            {activeTab === 'competition' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Análisis Competitivo</h2>
                <div className="space-y-4">
                  {competitors.map((comp, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{comp.name}</h3>
                          <p className="text-gray-700">{comp.reason}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          comp.threat === 'Alta' ? 'bg-red-100 text-red-700' :
                          comp.threat === 'Media' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          Amenaza: {comp.threat}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Tu Ventaja Competitiva
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-green-800">✓ El mercado está <strong>fragmentado</strong> - ningún player domina la intermediación integral</li>
                    <li className="text-green-800">✓ <strong>Momento perfecto</strong>: digitalización forzada + nuevas obligaciones (factura electrónica)</li>
                    <li className="text-green-800">✓ Puedes atacar <strong>nicho específico primero</strong> (ej: autónomos + Kit Digital) y expandir</li>
                    <li className="text-green-800">✓ Combinar <strong>marketplace + software colaborativo</strong> = doble barrera de salida</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🚀 Próximos Pasos Recomendados</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h3 className="font-bold mb-2">1. Valida la idea más prometedora</h3>
              <p className="text-sm">Entrevista a 20-30 PYMEs/autónomos sobre sus problemas con gestorías actuales</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h3 className="font-bold mb-2">2. Construye MVP simple</h3>
              <p className="text-sm">Landing + formulario de matching básico. Prueba manualmente primero</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h3 className="font-bold mb-2">3. Recluta primeros proveedores</h3>
              <p className="text-sm">Empieza con 5-10 gestorías de calidad dispuestas a probar nueva fuente de clientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h3 className="font-bold mb-2">4. Aprovecha coyuntura 2025</h3>
              <p className="text-sm">Enfócate en factura electrónica + Kit Digital como gancho inicial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}