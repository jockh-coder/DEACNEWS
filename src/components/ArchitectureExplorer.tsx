import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS, ArchitectureLayer } from '../data/articleData';
import { Layers, Server, Cloud, Database, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>(ARCHITECTURE_LAYERS[0].id);

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'edge':
        return <Server className="w-4 h-4 text-emerald-700" />;
      case 'event':
        return <ArrowRight className="w-4 h-4 text-amber-700" />;
      case 'compute':
        return <Cloud className="w-4 h-4 text-[#0082C3]" />;
      case 'data':
        return <Database className="w-4 h-4 text-purple-700" />;
      case 'green':
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      default:
        return <Layers className="w-4 h-4 text-stone-600" />;
    }
  };

  const getProviderBadge = (provider: ArchitectureLayer['provider']) => {
    switch (provider) {
      case 'AWS':
        return <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">AWS Retail Core</span>;
      case 'GCP':
        return <span className="text-xs font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">Google Cloud Data</span>;
      case 'Edge':
        return <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">Edge On-Store</span>;
      case 'Hybride':
        return <span className="text-xs font-medium text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">Multi-Cloud Hybride</span>;
    }
  };

  return (
    <div id="architecture-explorer" className="my-12 border border-stone-200 bg-white rounded-xl shadow-xs overflow-hidden">
      {/* Visual header */}
      <div className="p-6 md:p-8 bg-stone-50/70 border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
              Schéma Vivant d'Architecture
            </div>
            <h3 className="text-2xl font-bold text-stone-900 tracking-tight font-editorial">
              L'Écosystème Multi-Cloud de Decathlon
            </h3>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              Cliquez sur les différents étages de la pile technologique pour examiner les briques logicielles, les choix de cloud providers et les métriques de résilience.
            </p>
          </div>
          <div className="text-xs text-stone-500 font-mono self-start md:self-auto bg-white px-3 py-1.5 rounded border border-stone-200">
            5 Piliers Stratégiques
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
        {/* Layer list navigation */}
        <div className="lg:col-span-5 p-4 sm:p-6 space-y-2.5 bg-[#FAF9F6]">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all text-sm ${
                  isSelected
                    ? 'bg-white border-[#001090] shadow-sm text-stone-900'
                    : 'bg-white/60 border-stone-200/80 text-stone-600 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2 font-semibold">
                    {getLayerIcon(layer.id)}
                    <span>{layer.title}</span>
                  </div>
                  {getProviderBadge(layer.provider)}
                </div>
                <div className="text-xs text-stone-500 line-clamp-1 pl-6">
                  {layer.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                {selectedLayer.category}
              </span>
              {getProviderBadge(selectedLayer.provider)}
            </div>

            <h4 className="text-xl font-bold text-stone-900 mb-2">
              {selectedLayer.title}
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              {selectedLayer.description}
            </p>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-lg bg-stone-50 border border-stone-200/80">
              {selectedLayer.metrics.map((metric, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xs text-stone-500 leading-tight mb-1">
                    {metric.label}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-[#001090] font-mono tabular-nums">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies list */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Composants & Technologies Clés
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedLayer.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded border border-stone-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key highlight insight */}
          <div className="pt-4 border-t border-stone-200/80 bg-stone-50/50 p-3.5 rounded-lg border border-stone-200 text-xs text-stone-700">
            <span className="font-semibold text-stone-900">Point clé d'architecture : </span>
            {selectedLayer.keyHighlight}
          </div>
        </div>
      </div>
    </div>
  );
};
