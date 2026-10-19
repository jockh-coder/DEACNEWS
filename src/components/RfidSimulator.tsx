import React, { useState } from 'react';
import { SIMULATION_STEPS } from '../data/articleData';
import { Play, Check, ChevronRight, RotateCcw, Clock, Sparkles } from 'lucide-react';

export const RfidSimulator: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [productType, setProductType] = useState<'running' | 'tent' | 'bike'>('running');

  const step = SIMULATION_STEPS[currentStepIndex];

  const productNames = {
    running: 'Chaussures Kiprun KD900X',
    tent: 'Tente Quechua 2 Seconds Easy',
    bike: 'Vélo Gravel Triban RC520'
  };

  const handleNext = () => {
    if (currentStepIndex < SIMULATION_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="my-12 border border-stone-200 bg-stone-900 text-stone-100 rounded-xl overflow-hidden shadow-sm">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 border-b border-stone-800 bg-stone-950/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#0082C3] font-semibold mb-1">
              Simulation Interactive · Traçabilité Cloud
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white">
              Le Cycle de Vie d'un Article : Du Fabricant au Bac RFID
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
              Suivez le parcours d'un article Decathlon en temps réel et observez comment chaque scan met à jour le Cloud mondial.
            </p>
          </div>

          {/* Product selector */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 rounded-lg border border-stone-800 text-xs">
            <button
              onClick={() => { setProductType('running'); setCurrentStepIndex(0); }}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                productType === 'running' ? 'bg-[#001090] text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              Kiprun KD900
            </button>
            <button
              onClick={() => { setProductType('tent'); setCurrentStepIndex(0); }}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                productType === 'tent' ? 'bg-[#001090] text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              Tente Quechua
            </button>
            <button
              onClick={() => { setProductType('bike'); setCurrentStepIndex(0); }}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                productType === 'bike' ? 'bg-[#001090] text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              Vélo Triban
            </button>
          </div>
        </div>
      </div>

      {/* Progress stepper */}
      <div className="grid grid-cols-5 border-b border-stone-800 bg-stone-950/40 text-xs">
        {SIMULATION_STEPS.map((s, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`py-3 px-2 sm:px-4 text-center border-r last:border-r-0 border-stone-800 transition-colors flex flex-col items-center gap-1 ${
                isCurrent
                  ? 'bg-stone-800/80 text-white font-semibold'
                  : isDone
                  ? 'text-stone-400 hover:bg-stone-800/40'
                  : 'text-stone-600 hover:text-stone-400'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isCurrent
                    ? 'bg-[#0082C3] text-white'
                    : isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-800 text-stone-500'
                }`}
              >
                {isDone ? <Check className="w-3 h-3" /> : s.id}
              </div>
              <span className="hidden sm:inline line-clamp-1">{s.stage}</span>
            </button>
          );
        })}
      </div>

      {/* Step details content */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
          <div className="flex items-center gap-2 text-stone-400">
            <span className="text-stone-500 font-mono">Article suivi :</span>
            <span className="text-white font-medium">{productNames[productType]}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Latence cloud : {step.latency}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-wider text-[#0082C3] font-semibold mb-1">
            Étape {step.id} sur {SIMULATION_STEPS.length} · {step.location}
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {step.stage}
          </h4>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
            {step.action}
          </p>
        </div>

        {/* Cloud tech detail card */}
        <div className="bg-stone-950 border border-stone-800 rounded-lg p-4 mb-6">
          <div className="text-xs uppercase font-mono tracking-wider text-stone-500 mb-1">
            Service Cloud Activé
          </div>
          <div className="text-sm font-semibold text-[#66B8FF] mb-1 font-mono">
            {step.cloudService}
          </div>
          <div className="text-xs text-stone-400 leading-normal">
            {step.detail}
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-800">
          <button
            onClick={handleReset}
            disabled={currentStepIndex === 0}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white disabled:opacity-40 disabled:hover:text-stone-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="px-4 py-2 text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded-lg transition-colors"
            >
              Précédent
            </button>
            <button
              onClick={handleNext}
              disabled={currentStepIndex === SIMULATION_STEPS.length - 1}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0082C3] hover:bg-[#0070a8] disabled:opacity-40 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Étape suivante</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
