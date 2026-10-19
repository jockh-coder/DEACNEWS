import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export const AudioBrief: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const duration = 184; // 3 min 04s
  const timerRef = useRef<number | null>(null);

  const digestText = "Bienvenue dans ce dossier consacré à la transformation cloud de Decathlon. De ses 1700 magasins mondiaux à la traçabilité de 4 milliards de puces RFID chaque année, découvrez comment l'enseigne de sport a démantelé ses monolithes pour adopter une architecture multi-cloud résiliente mariant AWS, Google Cloud, Edge Computing et sobriété numérique.";

  useEffect(() => {
    if (isPlaying) {
      // Try Web Speech API if supported in French
      if ('speechSynthesis' in window && !isMuted) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(digestText);
        utterance.lang = 'fr-FR';
        utterance.rate = 1.0;
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(duration);
        };
        window.speechSynthesis.speak(utterance);
      }

      timerRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-stone-100/80 border border-stone-200/90 rounded-xl p-4 sm:p-5 my-8 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Mettre en pause l'audio" : "Écouter le résumé audio"}
            className="w-11 h-11 rounded-full bg-[#001090] text-white flex items-center justify-center hover:bg-[#000d70] active:scale-95 transition-transform shrink-0 shadow-sm"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
          </button>
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Écoute Audio · Synthèse Exécutive
            </div>
            <div className="text-sm font-semibold text-stone-900">
              L'Essentiel de la Bascule Cloud Decathlon (3 min)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <button
            onClick={handleReset}
            title="Recommencer"
            aria-label="Recommencer l'écoute"
            className="p-2 text-stone-500 hover:text-stone-800 transition-colors rounded-lg hover:bg-stone-200/60"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Activer le son" : "Couper le son"}
            aria-label={isMuted ? "Activer la voix de synthèse" : "Couper la voix de synthèse"}
            className="p-2 text-stone-500 hover:text-stone-800 transition-colors rounded-lg hover:bg-stone-200/60"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="text-xs font-mono tabular-nums text-stone-600 bg-white/70 px-2.5 py-1 rounded border border-stone-200">
            {formatTime(progress)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      {/* Progress track */}
      <div className="mt-3.5 pt-3 border-t border-stone-200/60">
        <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden cursor-pointer"
             onClick={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const clickX = e.clientX - rect.left;
               const newRatio = clickX / rect.width;
               setProgress(Math.floor(newRatio * duration));
             }}
        >
          <div
            className="bg-[#0082C3] h-full transition-all duration-300 rounded-full"
            style={{ width: `${(progress / duration) * 100}%` }}
          />
        </div>
        <p className="text-xs text-stone-500 mt-2 italic">
          Synthèse vocale disponible sur les navigateurs compatibles. Résumé condensé du dossier technique.
        </p>
      </div>
    </div>
  );
};
