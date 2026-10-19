import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-100/70 text-stone-600 text-xs py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-sm font-bold text-stone-900 tracking-tight">
              Decathlon Digital · Grand Format Technique
            </div>
            <p className="text-stone-500 mt-1 max-w-md text-xs">
              Une analyse détaillée des choix d'ingénierie, du multi-cloud résilient et de la convergence IoT-RFID à l'échelle planétaire.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors text-stone-700 font-medium"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
              <span>{copied ? 'Lien copié !' : 'Copier le lien'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div>
            <div className="font-semibold text-stone-800 mb-2 uppercase tracking-wider text-[11px] font-mono">
              Sources & Références Officielles
            </div>
            <ul className="space-y-1.5 text-stone-500">
              <li>· GitHub Customer Stories : Decathlon IT unites 1,500 developers on GitHub Enterprise</li>
              <li>· HashiCorp Case Study : Decathlon accelerates multi-cloud infrastructure with Terraform</li>
              <li>· Decathlon Open Source Organization (github.com/decathlon)</li>
              <li>· AWS Retail Case Studies : Decathlon Global Omnichannel Scaling</li>
              <li>· Google Cloud Customer Stories : BigQuery & Inventory Prediction</li>
              <li>· Decathlon Digital Engineering Blog (medium.com/decathlon-digital)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-stone-800 mb-2 uppercase tracking-wider text-[11px] font-mono">
              Note de Rédaction
            </div>
            <p className="text-stone-500 leading-relaxed">
              Article documenté et rédigé pour les ingénieurs, architectes logiciels et passionnés de tech retail. Les chiffres et architectures reflètent les déploiements réels de Decathlon Digital à l'échelle internationale.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200/80 text-center text-stone-400">
          © 2026 Tech Review · Dossier Dédié au Cloud Computing chez Decathlon
        </div>
      </div>
    </footer>
  );
};
