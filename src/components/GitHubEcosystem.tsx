import React, { useState } from 'react';
import { 
  DECATHLON_GITHUB_REPOS, 
  GITHUB_DECATHLON_METRICS, 
  GITHUB_WORKFLOW_STEPS, 
  SAMPLE_WORKFLOW_YML,
  GitHubRepo 
} from '../data/articleData';
import { 
  GitBranch, 
  Star, 
  GitFork, 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Play,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const GitHubEcosystem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [activeTab, setActiveTab] = useState<'repos' | 'pipeline' | 'yaml'>('repos');
  const [copiedYaml, setCopiedYaml] = useState(false);

  const categories = ['Tous', 'Design System', 'DevOps & Actions', 'Cloud & Infra', 'Data & IoT'];

  const filteredRepos = selectedCategory === 'Tous' 
    ? DECATHLON_GITHUB_REPOS 
    : DECATHLON_GITHUB_REPOS.filter(r => r.category === selectedCategory);

  const handleCopyYaml = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(SAMPLE_WORKFLOW_YML);
        setCopiedYaml(true);
        setTimeout(() => setCopiedYaml(false), 2000);
      }
    } catch (err) {
      console.warn('Clipboard copy failed:', err);
    }
  };

  const getLanguageColor = (lang: string) => {
    switch (lang) {
      case 'TypeScript': return 'bg-blue-500';
      case 'Kotlin': return 'bg-purple-500';
      case 'JavaScript': return 'bg-amber-400';
      case 'HCL': return 'bg-indigo-500';
      case 'Go': return 'bg-teal-500';
      default: return 'bg-stone-400';
    }
  };

  return (
    <div className="my-12 border border-stone-200 bg-white rounded-xl shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-stone-900 text-white border-b border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#66B8FF] font-semibold mb-1 flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5" />
              <span>GitHub Enterprise & Culture InnerSource</span>
            </div>
            <h3 className="text-2xl font-bold font-editorial tracking-tight text-white">
              L'Usine Logicielle GitHub chez Decathlon
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Comment 1 500 ingénieurs collaborent sur 2 600 dépôts GitHub pour automatiser les déploiements multi-cloud, le design system et l'infrastructure déclarative.
            </p>
          </div>

          <a
            href="https://github.com/decathlon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold border border-stone-700 transition-colors shrink-0 self-start sm:self-auto"
          >
            <span>github.com/decathlon</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Real Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-800 text-xs">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              {GITHUB_DECATHLON_METRICS.totalRepos}
            </div>
            <div className="text-stone-400 text-[11px] mt-0.5">Dépôts GitHub gérés</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#66B8FF] tabular-nums">
              {GITHUB_DECATHLON_METRICS.totalEngineers}
            </div>
            <div className="text-stone-400 text-[11px] mt-0.5">Ingénieurs IT sur GitHub</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
              {GITHUB_DECATHLON_METRICS.terraformDeployTime}
            </div>
            <div className="text-stone-400 text-[11px] mt-0.5">Déploiement Infra (vs 7j)</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400 tabular-nums">
              {GITHUB_DECATHLON_METRICS.monthlyActionRuns}
            </div>
            <div className="text-stone-400 text-[11px] mt-0.5">Runs GitHub Actions / mois</div>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex items-center justify-between px-4 sm:px-6 border-b border-stone-200 bg-stone-50">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('repos')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'repos'
                ? 'border-[#001090] text-[#001090] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Dépôts Open Source & Outils</span>
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'pipeline'
                ? 'border-[#001090] text-[#001090] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Pipeline GitHub Actions CI/CD</span>
          </button>
          <button
            onClick={() => setActiveTab('yaml')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'yaml'
                ? 'border-[#001090] text-[#001090] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Manifeste Workflow YAML</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Repositories */}
      {activeTab === 'repos' && (
        <div className="p-6">
          {/* Category filter segmented control */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            <span className="text-xs text-stone-500 mr-2 font-mono">Filtre :</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#001090] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Repositories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg border border-stone-200 hover:border-stone-300 transition-all bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <a 
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm font-semibold text-[#001090] hover:underline flex items-center gap-1.5"
                    >
                      <span>{repo.repo}</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>
                    <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {repo.category}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-stone-500 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs text-stone-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3 tabular-nums">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-stone-400" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Actions Pipeline */}
      {activeTab === 'pipeline' && (
        <div className="p-6">
          <div className="text-xs text-stone-500 mb-4 max-w-xl">
            Chaque pull-request chez Decathlon déclenche un pipeline GitHub Actions strict intégrant l'audit de sécurité, l'Infracost et la synchronisation GitOps vers Kubernetes.
          </div>

          <div className="space-y-3">
            {GITHUB_WORKFLOW_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-stone-900">
                      {step.name}
                    </div>
                    <div className="text-xs font-mono text-[#001090] mb-0.5">
                      Outillage : {step.tool}
                    </div>
                    <div className="text-xs text-stone-600">
                      {step.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    passed
                  </span>
                  <span className="text-xs font-mono text-stone-500 tabular-nums">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
            <span>
              <strong>Bilan de Sécurité & Conformité :</strong> Aucune vulnérabilité critique tolérée. Les pull-requests bloquent le merge en cas d'augmentation non justifiée des émissions CO₂e.
            </span>
          </div>
        </div>
      )}

      {/* Tab 3: YAML Workflow File */}
      {activeTab === 'yaml' && (
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-stone-600">
              .github/workflows/deploy-multi-cloud.yml
            </span>
            <button
              onClick={handleCopyYaml}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
            >
              {copiedYaml ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
              <span>{copiedYaml ? 'Copié !' : 'Copier le YAML'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-lg bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto leading-relaxed">
            <code>{SAMPLE_WORKFLOW_YML}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
