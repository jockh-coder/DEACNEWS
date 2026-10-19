import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AudioBrief } from './components/AudioBrief';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { RfidSimulator } from './components/RfidSimulator';
import { GitHubEcosystem } from './components/GitHubEcosystem';
import { Quiz } from './components/Quiz';
import { Footer } from './components/Footer';
import { 
  Server, 
  Cloud, 
  Cpu, 
  Leaf, 
  Layers, 
  ArrowUpRight, 
  Bookmark, 
  Share2, 
  Sparkles,
  ChevronRight,
  ZoomIn
} from 'lucide-react';

// Image assets bundled and hashed by Vite for production
import HERO_IMAGE from './assets/images/hero_decathlon_cloud_1792405928455.jpg';
import RFID_LOGISTICS_IMAGE from './assets/images/decathlon_rfid_logistics_1792405929324.jpg';
import STORE_TECH_IMAGE from './assets/images/decathlon_store_tech_1792405929396.jpg';
import GREEN_CLOUD_IMAGE from './assets/images/decathlon_green_cloud_1792405930105.jpg';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [bookmarked, setBookmarked] = useState(false);
  const [imageModal, setImageModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-stone-900 flex flex-col font-sans-ui">
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#0082C3] z-50 transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Top Bar Contract (3 zones) */}
      <Header onQuickRead={() => scrollToSection('architecture')} />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Article Breadcrumb & Metadata (Zero-pill discipline) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 mb-6 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#001090] uppercase tracking-wider">Grand Angle Tech</span>
            <span aria-hidden="true">·</span>
            <span>Architecture & Systèmes Répartis</span>
            <span aria-hidden="true">·</span>
            <span>8 min de lecture</span>
            <span aria-hidden="true">·</span>
            <span>Octobre 2026</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font size control */}
            <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-white text-xs">
              <button 
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 ${fontSize === 'normal' ? 'bg-stone-100 font-bold text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
                title="Taille de texte standard"
              >
                A
              </button>
              <button 
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 text-sm ${fontSize === 'large' ? 'bg-stone-100 font-bold text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
                title="Agrandir le texte"
              >
                A+
              </button>
            </div>

            <button 
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded border transition-colors ${bookmarked ? 'bg-amber-50 text-amber-600 border-amber-200' : 'text-stone-400 hover:text-stone-700 border-stone-200 bg-white'}`}
              title="Sauvegarder pour plus tard"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article Title & Hero Kicker */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-stone-900 leading-[1.15] tracking-tight mb-4 text-balance">
            Comment Decathlon a Métamorphosé son Empire Sportif Grâce au Cloud Computing
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 font-editorial leading-relaxed text-balance">
            De la gestion de 1 700 magasins mondiaux à la traçabilité de 4 milliards de puces RFID chaque année, immersion dans les entrailles d’une architecture multi-cloud résiliente mariant AWS, Google Cloud, Edge Computing et sobriété numérique.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-stone-500">
            <span>Par <strong className="text-stone-800">Jérôme Lefebvre</strong>, Architecte Cloud & Correspondant Tech</span>
            <span aria-hidden="true">·</span>
            <span>Revu par l'Équipe Ingénierie Decathlon Digital</span>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="mb-10 group relative">
          <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-16/9 relative">
            <img 
              src={HERO_IMAGE} 
              alt="Hub d'innovation et d'ingénierie cloud de Decathlon Digital" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => {
                // Fallback styled container
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <button 
              onClick={() => setImageModal(HERO_IMAGE)}
              className="absolute bottom-3 right-3 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              title="Agrandir l'image"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          <figcaption className="text-xs text-stone-500 italic mt-2 text-center">
            Fig. 1 — Le campus Decathlon Digital : ingénieurs et architectes cloud unifient le matériel sportif et les flux de données mondiaux en continu.
          </figcaption>
        </div>

        {/* Executive Key Metrics Strip (Claim-to-proof adjacency) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 rounded-xl bg-white border border-stone-200 mb-10 shadow-xs">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#001090]">
              1 700+
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Magasins connectés
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#0082C3]">
              4 Mds
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Scans RFID / an
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-800">
              2 600+
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Dépôts GitHub managés
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-purple-700">
              1 200+
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Microservices cloud
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-700">
              -35%
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Émissions CO₂e FinOps
            </div>
          </div>
        </div>

        {/* Audio Brief Player */}
        <AudioBrief />

        {/* Article Body Content */}
        <div className={`prose-stone leading-relaxed space-y-6 ${fontSize === 'large' ? 'text-lg sm:text-xl leading-[1.8]' : 'text-base sm:text-lg leading-[1.75]'}`}>
          
          {/* Chapter 1 */}
          <section id="genese" className="pt-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 1
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              L'Adieu au Monolithe : De l'AS/400 au Cloud-Native
            </h2>

            <p className="text-stone-700 first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#001090]">
              Pendant des décennies, le géant français des articles de sport a opéré son système d’information sur un socle robuste mais rigide : des serveurs centraux sur site, des bases de données relationnelles massives et des flux par lots (batch) nocturnes. Si ce modèle garantissait la stabilité des points de vente physiques des années 1990, il est rapidement devenu un frein critique à l’aube de l’explosion du e-commerce omnicanal, du « Click & Collect » en une heure et de la vente internationale dans plus de 60 pays.
            </p>

            <p className="text-stone-700">
              Chaque grande fête commerciale — du Black Friday aux semaines de soldes estivales ou aux grands événements sportifs — se transformait en épreuve du feu pour les serveurs on-premise. Face à des pics d'affluence multipliés par dix, le surdimensionnement des serveurs coûtait des millions d’euros à l’année pour ne tourner qu’à 15% de leur capacité le reste du temps.
            </p>

            <p className="text-stone-700">
              En 2019, la direction générale et la direction technique prennent un virage historique sous l'étendard <strong>Decathlon Digital</strong> : passer d’un statut d'enseigne de distribution classique exploitant de l'informatique à celui d'une <em>entreprise tech de référence dans le sport</em>. Le mot d'ordre était clair : <strong>Cloud-First, API-First et Event-Driven</strong>.
            </p>
          </section>

          {/* Interactive Cloud Explorer Component */}
          <section id="architecture" className="pt-4">
            <ArchitectureExplorer />
          </section>

          {/* Chapter 2 */}
          <section className="pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 2
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              Le Pari Stratégique du Multi-Cloud Hybride (AWS & Google Cloud)
            </h2>

            <p className="text-stone-700">
              Contrairement à de nombreuses entreprises qui choisissent un hyperscaler unique par souci de simplicité apparente, Decathlon a fait le choix délibéré d'une <strong>stratégie Multi-Cloud raisonnée</strong>. L'objectif n'était pas de dupliquer inutilement chaque microservice sur deux fournisseurs, mais d'exploiter les forces distinctes de chacun :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
              <div className="p-5 rounded-lg bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-2 font-bold text-amber-950 mb-2">
                  <Cloud className="w-5 h-5 text-amber-700" />
                  <span>Amazon Web Services (AWS) · Le Moteur Retail</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Hébergement du cœur e-commerce international, du catalogue produit mondial, des transactions d’encaissement et des paniers d'achat. Utilisation massive d'AWS Lambda pour le Serverless à haute élasticité et d'Amazon EKS (Kubernetes) pour les services conteneurisés persistants.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-sky-50/60 border border-sky-200">
                <div className="flex items-center gap-2 font-bold text-sky-950 mb-2">
                  <Cpu className="w-5 h-5 text-sky-700" />
                  <span>Google Cloud Platform (GCP) · Le Cerveau Data & IA</span>
                </div>
                <p className="text-xs text-sky-900 leading-relaxed">
                  Centralisation des téraoctets de données issues des ventes mondiales, de la logistique et de l'IoT au sein de Google BigQuery. Alimentation des modèles de machine learning sur Vertex AI pour prédire la demande sportive locale et optimiser le stock en entrepôt.
                </p>
              </div>
            </div>

            <p className="text-stone-700">
              Pour éviter l'enfermement technologique, l'outillage transversal est harmonisé grâce à des standards ouverts : conteneurisation Docker, orchestration Kubernetes, automatisation de l'infrastructure via Terraform, et déploiements continus gérés par GitOps avec ArgoCD. Une même équipe de développement déploie son service avec les mêmes manifestes déclaratifs, quel que soit le cloud cible.
            </p>
          </section>

          {/* Pull Quote (Refined top/bottom hairline borders, anti-slop) */}
          <div className="my-10 py-6 border-y border-stone-200 text-center not-prose">
            <blockquote className="text-xl sm:text-2xl font-editorial italic text-stone-800 max-w-2xl mx-auto leading-relaxed">
              « Le Cloud n'est plus une simple facture d'hébergement : c'est le système nerveux qui relie la sueur de l'athlète à la fabrication industrielle et aux rayons de nos magasins en quelques millisecondes. »
            </blockquote>
            <div className="text-xs uppercase font-mono tracking-wider text-stone-500 mt-3">
              Direction Technique Plateforme & Infrastructure · Decathlon Digital
            </div>
          </div>

          {/* Chapter 3 */}
          <section id="rfid" className="pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 3
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              L'Arme Fatale : 4 Milliards d'Articles Sportifs Suivis par RFID et Edge Computing
            </h2>

            <p className="text-stone-700">
              Si le cloud computing constitue le cerveau de Decathlon, la technologie RFID (Radio Frequency Identification) en est les yeux et les mains. Decathlon a été le premier distributeur mondial à équiper <strong>100% de ses produits</strong> d'une puce RFID dès l'usine de confection, du t-shirt technique de trail à la paire de chaussures de football ou au paddle gonflable.
            </p>

            {/* Logistics Image */}
            <div className="my-8 not-prose">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3 relative group">
                <img 
                  src={RFID_LOGISTICS_IMAGE} 
                  alt="Centre logistique automatisé Decathlon avec portiques RFID et robots de tri" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <button 
                  onClick={() => setImageModal(RFID_LOGISTICS_IMAGE)}
                  className="absolute bottom-3 right-3 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  title="Agrandir l'image"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <figcaption className="text-xs text-stone-500 italic mt-2 text-center">
                Fig. 2 — Centre logistique automatisé européen : portiques RFID haute cadence lisant 250 articles simultanément à 30 km/h sur convoyeur.
              </figcaption>
            </div>

            <p className="text-stone-700">
              Mais comment ingérer 4 milliards d'événements de lecture RFID par an sans saturer le réseau ni faire exploser la latence ? La réponse réside dans le mariage intime entre le <strong>Cloud et l'Edge Computing</strong>.
            </p>

            <p className="text-stone-700">
              Dans chaque entrepôt logistique et dans chacun des 1 700 magasins, des micro-serveurs Edge (exécutant des distributions Kubernetes légères comme K3s) filtrent et agrègent les signaux radio bruts. Seuls les différentiels d'état (ex: <em>"L'article #8594921 est passé du stock réserve à la surface de vente"</em>) sont streamés vers le cloud via des brokers d'événements Apache Kafka et AWS EventBridge.
            </p>

            {/* Store Tech Image */}
            <div className="my-8 not-prose">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3 relative group">
                <img 
                  src={STORE_TECH_IMAGE} 
                  alt="Borne de caisse autonome RFID en magasin Decathlon" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <button 
                  onClick={() => setImageModal(STORE_TECH_IMAGE)}
                  className="absolute bottom-3 right-3 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  title="Agrandir l'image"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <figcaption className="text-xs text-stone-500 italic mt-2 text-center">
                Fig. 3 — Borne d'encaissement autonome : le bac RFID détecte l'intégralité du panier sans manipulation de code-barres et synchronise l'inventaire en millisecondes.
              </figcaption>
            </div>

            <h3 className="text-xl font-bold font-editorial text-stone-900 mt-6 mb-3">
              La Magie du Bac de Caisse : Zéro Scan, Zéro Attente
            </h3>

            <p className="text-stone-700">
              Pour le client en magasin, cette architecture invisible change tout. En arrivant en caisse, plus besoin de chercher le code-barres de chaque article ou de vider minutieusement son sac : il suffit de déposer l'ensemble de ses articles dans un bac équipé d'antennes RFID. En moins de 2,5 secondes, l'écran tactile affiche la liste exacte des articles et le montant total.
            </p>

            <p className="text-stone-700">
              Si la fibre optique du magasin venait à être coupée accidentellement, la passerelle Edge locale prend le relais sans la moindre interruption de service. Les encaissements se poursuivent normalement et les données se resynchronisent avec le cloud central dès le rétablissement de la liaison.
            </p>
          </section>

          {/* Interactive Simulation Stepper */}
          <section className="not-prose">
            <RfidSimulator />
          </section>

          {/* Chapter 4: GitHub & GitOps */}
          <section id="github-ecosystem" className="pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 4
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              L'Usine Logicielle GitHub & GitOps : Le Code Comme Unique Source de Vérité
            </h2>

            <p className="text-stone-700">
              Pour orchestrer plus de 1 200 microservices déployés quotidiennement sans créer de goulet d'étranglement, Decathlon Digital a unifié l'ensemble de ses <strong>1 500 ingénieurs sur GitHub Enterprise</strong>. Ce choix a marqué l'abandon définitif des outils dispersés au profit d'un écosystème centralisé comptant désormais plus de <strong>2 600 dépôts de code</strong> et favorisant une culture d'<em>InnerSource</em> active.
            </p>

            <p className="text-stone-700">
              Au cœur de cette mécanique, le modèle <strong>GitOps</strong> et l'Infrastructure as Code (IaC) avec <em>HashiCorp Terraform</em> ont révolutionné le rythme de livraison. Là où la mise à disposition manuelle d'une infrastructure cloud pouvait nécessiter plus d'une semaine d'échanges de tickets et d'approbations, elle est désormais provisionnée en <strong>moins de 30 minutes</strong> via des modules Terraform réutilisables, versionnés et audités sur GitHub.
            </p>

            <p className="text-stone-700">
              Les <strong>GitHub Actions</strong> constituent le système circulatoire de cette usine logicielle. Chaque commit déclenche automatiquement les audits de vulnérabilités (Dependabot, Trivy), la simulation budgétaire et écologique (Infracost, Cloud Carbon Footprint), avant que des opérateurs déclaratifs comme <em>ArgoCD</em> ne synchronisent l'état désiré sur les clusters Kubernetes d'AWS et de GCP.
            </p>

            {/* GitHub Ecosystem Interactive Visualizer */}
            <div className="not-prose">
              <GitHubEcosystem />
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="green-it" className="pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 5
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              FinOps et Green IT : Réconcilier Hyper-Croissance et Sobriété Numérique
            </h2>

            <p className="text-stone-700">
              Decathlon étant historiquement une entreprise profondément engagée dans la préservation des terrains de jeu sportifs (montagnes, océans, forêts), sa direction technologique a refusé de considérer le cloud comme une ressource infinie et gratuite. Une culture exigeante de <strong>FinOps</strong> (Financial Operations) et de <strong>GreenOps</strong> a été instaurée dès 2021.
            </p>

            {/* Green Cloud Image */}
            <div className="my-8 not-prose">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-16/9 relative group">
                <img 
                  src={GREEN_CLOUD_IMAGE} 
                  alt="Data center éco-conçu et serveurs basse consommation pour le cloud Decathlon" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <button 
                  onClick={() => setImageModal(GREEN_CLOUD_IMAGE)}
                  className="absolute bottom-3 right-3 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  title="Agrandir l'image"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <figcaption className="text-xs text-stone-500 italic mt-2 text-center">
                Fig. 4 — Sobriété numérique : Decathlon privilégie les datacenters alimentés aux énergies renouvelables et mesure l'empreinte carbone de chaque microservice.
              </figcaption>
            </div>

            <div className="space-y-4 my-6 not-prose">
              <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-950">
                  <strong className="block text-emerald-900 font-semibold mb-1">Extinction Automatique des Environnements Hors-Prod</strong>
                  Les clusters de développement et de recette sont programmés pour s'éteindre automatiquement la nuit et les week-ends via des scripts GitOps. Cette seule mesure a généré une économie de plus de 40% sur la facture de développement.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-950">
                  <strong className="block text-emerald-900 font-semibold mb-1">Migration vers les Puces ARM Graviton</strong>
                  Plus de 60% des conteneurs applicatifs tournent désormais sur des processeurs ARM (AWS Graviton) offrant un ratio performance énergétique jusqu'à 60% plus efficient que les architectures x86 traditionnelles.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <Layers className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-950">
                  <strong className="block text-emerald-900 font-semibold mb-1">Métrique CO₂e dans les Pull Requests</strong>
                  Grâce à l'outil open-source <em>Cloud Carbon Footprint</em>, les développeurs peuvent évaluer l'empreinte carbone prévisionnelle de leur code avant même de valider une mise en production.
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 6 */}
          <section className="pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#001090] font-semibold mb-2">
              Chapitre 6
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-900 tracking-tight mb-4">
              La Révolution Humaine : L'Organisation en "Feature Teams" Autonomes
            </h2>

            <p className="text-stone-700">
              L'un des enseignements majeurs partagés par les leaders de Decathlon Digital est que la transformation cloud n'est pas qu'un défi d'infrastructure : c'est avant tout une <strong>transformation culturelle et humaine</strong>.
            </p>

            <p className="text-stone-700">
              Auparavant, les développeurs écrivaient du code avant de le transmettre à des équipes d'exploitation séparées (« les Ops »), engendrant des délais de déploiement de plusieurs semaines. Aujourd'hui, Decathlon fonctionne selon le paradigme <em>« You build it, you run it »</em>. Plus de 350 équipes pluridisciplinaires (regroupant Product Managers, Développeurs Full-Stack, Data Scientists et Designers) sont propriétaires de leurs microservices de bout en bout.
            </p>

            <p className="text-stone-700">
              Une guilde d'architectes et une équipe "Platform Engineering" fournissent des briques prêtes à l'emploi (sécurité, observabilité, pipelines CI/CD sécurisés), permettant aux équipes métier de se concentrer sur l'expérience sportive de leurs utilisateurs : louer un vélo électrique en trois clics, acheter un équipement de seconde main reconditionné en magasin, ou obtenir des plans d'entraînement personnalisés dans l'application Decathlon Coach.
            </p>
          </section>

          {/* Conclusion */}
          <section className="pt-6 border-t border-stone-200">
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-stone-900 mb-3">
              Conclusion : Le Cloud, Socle de la Durabilité et du Sport Circulaire
            </h3>
            <p className="text-stone-700">
              Au terme de cinq années d'accélération numérique intense, Decathlon a réussi sa métamorphose : conjuguer la puissance d'un géant mondial du retail avec l'agilité logicielle d'une pure-player technologique. 
            </p>
            <p className="text-stone-700">
              L'avenir du cloud chez Decathlon s'oriente désormais vers l'<strong>économie circulaire</strong> : traçabilité du matériel d'occasion (trocathlon), services de location d'équipements sportifs par abonnement et passeports numériques de produits basés sur le cloud pour encourager la réparabilité et le recyclage des matières techniques.
            </p>
          </section>

        </div>

        {/* Interactive Quiz to test comprehension */}
        <Quiz />

      </main>

      {/* Lightbox Modal for viewing images in high resolution */}
      {imageModal && (
        <div 
          onClick={() => setImageModal(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl">
            <img 
              src={imageModal} 
              alt="Agrandissement de l'image" 
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center text-xs text-stone-300 mt-2">
              Cliquez n'importe où pour refermer
            </div>
          </div>
        </div>
      )}

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
