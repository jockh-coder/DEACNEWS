export interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  provider: 'Edge' | 'AWS' | 'GCP' | 'Hybride';
  category: string;
  description: string;
  techs: string[];
  metrics: { label: string; value: string }[];
  keyHighlight: string;
}

export interface SimulationStep {
  id: number;
  stage: string;
  location: string;
  action: string;
  cloudService: string;
  detail: string;
  latency: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'edge',
    title: '1. Magasins & Edge Computing',
    subtitle: '1 700 points de vente connectés et résilients',
    provider: 'Edge',
    category: 'Edge & IoT',
    description: 'Chaque magasin Decathlon héberge des passerelles Edge capables de traiter localement les flux RFID, les bornes de caisse en libre-service et les étiquettes électroniques, même en cas de coupure Internet.',
    techs: ['RFID UHF Class 1 Gen 2', 'K3s (Lightweight Kubernetes)', 'MQTT Gateways', 'Local Cache SQLite/Redis'],
    metrics: [
      { label: 'Magasins équipés', value: '1 700+' },
      { label: 'Résilience hors-ligne', value: '100% autonome' },
      { label: 'Temps d\'encaissement bac', value: '< 2,4 sec' }
    ],
    keyHighlight: 'Le bac de caisse RFID identifie l\'ensemble des articles simultanément sans pointer aucun code-barres.'
  },
  {
    id: 'event',
    title: '2. Ingestion & Événements en Temps Réel',
    subtitle: 'Le système nerveux événementiel mondial',
    provider: 'Hybride',
    category: 'Streaming & Event-Driven',
    description: 'Les flux d\'inventaire, les mouvements de stock et les commandes e-commerce sont transformés en événements immuables diffusés instantanément aux services abonnés.',
    techs: ['Apache Kafka', 'AWS EventBridge', 'Amazon Kinesis', 'Cloud Pub/Sub'],
    metrics: [
      { label: 'Événements par seconde (pic)', value: '65 000 /s' },
      { label: 'Scans RFID annuels', value: '4 Mds' },
      { label: 'Latence de propagation', value: '< 180 ms' }
    ],
    keyHighlight: 'Chaque article scanné en magasin ou en entrepôt met à jour le stock mondial en moins d\'une seconde.'
  },
  {
    id: 'compute',
    title: '3. Microservices & Calcul Cloud-Native',
    subtitle: 'Industrialisation Kubernetes et Serverless',
    provider: 'AWS',
    category: 'Microservices & Core Retail',
    description: 'Plus d\'un millier de microservices spécialisés (panier, catalogue, pricing, fidélité) orchestrés sur AWS avec une forte composante Serverless pour absorber les pics de consommation sans surcoût.',
    techs: ['AWS EKS (Kubernetes)', 'AWS Lambda', 'DynamoDB', 'Kong API Gateway', 'ArgoCD (GitOps)'],
    metrics: [
      { label: 'Microservices découplés', value: '1 200+' },
      { label: 'Déploiements quotidiens', value: '450+' },
      { label: 'Disponibilité globale', value: '99,98%' }
    ],
    keyHighlight: 'L\'architecture Serverless scale automatiquement de zéro à des dizaines de milliers de requêtes/seconde lors du Black Friday.'
  },
  {
    id: 'data',
    title: '4. Data Lakehouse & IA Prédictive',
    subtitle: 'Intelligence sportive et réapprovisionnement',
    provider: 'GCP',
    category: 'Data & Machine Learning',
    description: 'Centralisation de l\'ensemble des données de vente, d\'usage sportif et de traçabilité sur Google Cloud Platform pour alimenter des algorithmes de prédiction de la demande et de tarification éco-responsable.',
    techs: ['Google BigQuery', 'Vertex AI', 'dbt', 'Dataproc', 'Apache Airflow'],
    metrics: [
      { label: 'Volume de données analysées', value: '12+ Pétaoctets' },
      { label: 'Fiabilité des prévisions', value: '+24%' },
      { label: 'Ruptures de stock évitées', value: '-31%' }
    ],
    keyHighlight: 'Les modèles d\'IA ajustent les réapprovisionnements en fonction de la météo, des tendances de pratique locale et des saisons sportives.'
  },
  {
    id: 'green',
    title: '5. FinOps & Éco-Conception Numérique',
    subtitle: 'Optimisation continue et bilan carbone',
    provider: 'Hybride',
    category: 'Gouvernance & Green Cloud',
    description: 'Mesure systématique de l\'empreinte carbone de chaque composant logiciel et responsabilisation directe des équipes de développement par la transparence des coûts et des émissions.',
    techs: ['Cloud Carbon Footprint', 'Infracost', 'Kubecost', 'AWS Graviton (ARM)', 'Automated Scale-Down'],
    metrics: [
      { label: 'Réduction carbone serveurs', value: '-35%' },
      { label: 'Extinction dev la nuit', value: '100% automatisé' },
      { label: 'Serveurs ARM éco-efficients', value: '60% du parc' }
    ],
    keyHighlight: 'Chaque pull-request affiche l\'impact financier et CO₂e estimé avant son déploiement en production.'
  }
];

export const SIMULATION_STEPS: SimulationStep[] = [
  {
    id: 1,
    stage: 'Fabrication & Encodage',
    location: 'Usine de confection de Lille / Asie',
    action: 'Génération et écriture d\'un identifiant unique mondial dans la puce RFID cousue dans la chaussure de running.',
    cloudService: 'API Catalog & Identity Service (AWS Lambda)',
    detail: 'L\'article reçoit une identité cryptographique immuable référencée dans la base de données centrale.',
    latency: '35 ms'
  },
  {
    id: 2,
    stage: 'Entrepôt & Tri Automatisé',
    location: 'Hub logistique continental de Rouvignies',
    action: 'Le carton passe sous un portique RFID lisant 250 articles simultanément à 30 km/h sur convoyeur.',
    cloudService: 'Stream Processing Kafka & EventBridge',
    detail: 'Le statut passe de "En transit fabricant" à "Réceptionné en hub". Aucun opérateur n\'a déballé le carton.',
    latency: '85 ms'
  },
  {
    id: 3,
    stage: 'Allocation Intelligente',
    location: 'Moteur d\'optimisation central GCP',
    action: 'L\'IA analyse la météo locale, les inscriptions aux marathons régionaux et calcule le magasin qui vendra le produit le plus vite.',
    cloudService: 'Google BigQuery ML & Vertex AI',
    detail: 'L\'article est affecté au magasin de Bordeaux-Mérignac pour livraison nocturne.',
    latency: '120 ms'
  },
  {
    id: 4,
    stage: 'Mise en Rayon & Inventaire Magasin',
    location: 'Magasin Decathlon Bordeaux-Mérignac',
    action: 'Le conseiller effectue le tour du rayon avec une raquette RFID connectée. 15 000 articles inventoriés en 30 minutes.',
    cloudService: 'Edge Gateway Local & Sync WebSocket',
    detail: 'Le stock disponible pour le "Click & Collect" en 1h est immédiatement actualisé sur decathlon.fr.',
    latency: '45 ms'
  },
  {
    id: 5,
    stage: 'Achat Client & Déstockage Éclair',
    location: 'Borne de caisse autonome en magasin',
    action: 'Le client dépose son panier dans le bac. La borne détecte instantanément les puces sans manipulation.',
    cloudService: 'Serverless Checkout & Unified Payment API',
    detail: 'Paiement sans contact validé, le stock est décrémenté, la puce est désactivée et le ticket dématérialisé envoyé.',
    latency: '210 ms'
  }
];

export interface GitHubRepo {
  name: string;
  repo: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  category: 'Design System' | 'DevOps & Actions' | 'Cloud & Infra' | 'Data & IoT';
  url: string;
  tags: string[];
}

export interface GitHubActionStep {
  name: string;
  tool: string;
  description: string;
  duration: string;
  status: 'passed';
}

export const GITHUB_DECATHLON_METRICS = {
  totalRepos: '2 600+',
  totalEngineers: '1 500',
  innerSourceUsers: '1 000+',
  terraformDeployTime: '< 30 min',
  previousDeployTime: '7+ jours',
  monthlyActionRuns: '180 000+'
};

export const DECATHLON_GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'Vitamin Web',
    repo: 'decathlon/vitamin-web',
    description: 'Composants Web officiels du Decathlon Design System (WCAG AA, multi-plateformes et éco-conçus).',
    language: 'TypeScript',
    stars: 340,
    forks: 62,
    category: 'Design System',
    url: 'https://github.com/decathlon/vitamin-web',
    tags: ['Web Components', 'Design System', 'Accessibility']
  },
  {
    name: 'Vitamin Android',
    repo: 'decathlon/vitamin-android',
    description: 'Bibliothèque UI native Android pour toutes les applications mobiles Decathlon (Store, Coach, Shopping).',
    language: 'Kotlin',
    stars: 285,
    forks: 48,
    category: 'Design System',
    url: 'https://github.com/decathlon/vitamin-android',
    tags: ['Android', 'Material Design', 'Mobile UI']
  },
  {
    name: 'Release Notes Generator Action',
    repo: 'decathlon/release-notes-generator-action',
    description: 'GitHub Action sur-mesure pour générer automatiquement des release notes sémantiques depuis les PRs.',
    language: 'JavaScript',
    stars: 195,
    forks: 34,
    category: 'DevOps & Actions',
    url: 'https://github.com/decathlon/release-notes-generator-action',
    tags: ['GitHub Actions', 'CI/CD', 'Automation']
  },
  {
    name: 'Wiki Page Creator Action',
    repo: 'decathlon/wiki-page-creator-action',
    description: 'Automatisation de la documentation technique générée en CI directement vers le GitHub Wiki du projet.',
    language: 'JavaScript',
    stars: 120,
    forks: 22,
    category: 'DevOps & Actions',
    url: 'https://github.com/decathlon/wiki-page-creator-action',
    tags: ['Documentation', 'Wiki', 'GitHub Actions']
  },
  {
    name: 'Terraform AWS Microservices Modules',
    repo: 'decathlon/terraform-aws-architecture',
    description: 'Modules Terraform standards pour déployer des clusters EKS, lambdas et EventBridge sécurisés en 30 minutes.',
    language: 'HCL',
    stars: 410,
    forks: 85,
    category: 'Cloud & Infra',
    url: 'https://github.com/decathlon',
    tags: ['Terraform', 'AWS', 'EKS', 'GitOps']
  },
  {
    name: 'RFID Edge Ingestion Gateway',
    repo: 'decathlon/rfid-edge-stream',
    description: 'Connecteur léger IoT pour filtrer et acheminer les flux RFID des magasins vers Apache Kafka et AWS.',
    language: 'Go',
    stars: 230,
    forks: 41,
    category: 'Data & IoT',
    url: 'https://github.com/decathlon',
    tags: ['Go', 'RFID', 'Edge Computing', 'Kafka']
  }
];

export const GITHUB_WORKFLOW_STEPS: GitHubActionStep[] = [
  {
    name: '1. Validation & Analyse Statique',
    tool: 'ESLint, TypeScript & DBLinter',
    description: 'Vérification syntaxique, typage strict et lint des schémas SQL pour PostgreSQL / DynamoDB.',
    duration: '42s',
    status: 'passed'
  },
  {
    name: '2. Sécurité & Détection de Failles',
    tool: 'GitHub Dependabot & Trivy',
    description: 'Scan automatisé des CVEs dans les conteneurs Docker et vérification des dépendances NPM / Maven.',
    duration: '1m 15s',
    status: 'passed'
  },
  {
    name: '3. Simulation d\'Infrastructure & Bilan CO₂e',
    tool: 'Terraform Plan, Infracost & Cloud Carbon',
    description: 'Estimation instantanée du delta budgétaire et de l\'empreinte carbone injectée dans les commentaires de la PR.',
    duration: '58s',
    status: 'passed'
  },
  {
    name: '4. Déploiement GitOps Automatisé',
    tool: 'ArgoCD Sync vers AWS EKS & GCP GKE',
    description: 'Mise à jour déclarative des manifestes Kubernetes avec bascule progressive (Canary release 10% -> 100%).',
    duration: '1m 45s',
    status: 'passed'
  }
];

export const SAMPLE_WORKFLOW_YML = `name: Decathlon Multi-Cloud GitOps Deploy
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate-and-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js & Go
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Static Security Scan (Trivy & Dependabot)
        run: npx trivy fs . --severity HIGH,CRITICAL
      - name: Cloud Carbon Footprint Estimate
        uses: decathlon/cloud-carbon-footprint-action@v2
        with:
          target-cloud: multi-cloud-aws-gcp

  terraform-gitops:
    needs: validate-and-scan
    runs-on: ubuntu-latest
    steps:
      - uses: hashicorp/setup-terraform@v3
      - name: Terraform Plan & Cost Check
        run: |
          terraform init
          terraform plan -out=tfplan
          infracost breakdown --path tfplan
      - name: ArgoCD GitOps Sync (AWS EKS & GCP GKE)
        if: github.ref == 'refs/heads/main'
        run: argocd app sync retail-microservices --prune`;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Pourquoi Decathlon a-t-il privilégié une stratégie Multi-Cloud plutôt qu\'un fournisseur unique ?',
    options: [
      'Pour éviter tout enfermement propriétaire (vendor lock-in) et exploiter le meilleur d\'AWS (Retail/Serverless) et de GCP (Data/IA)',
      'Parce qu\'aucun fournisseur cloud ne disposait d\'assez de serveurs pour leurs magasins',
      'Uniquement pour obtenir des réductions tarifaires sans changer d\'architecture',
      'Pour faire tourner les mêmes serveurs physiques d\'anciennes générations'
    ],
    correctIndex: 0,
    explanation: 'Decathlon tire parti de la complémentarité : AWS excelle sur les microservices e-commerce et le serverless haut débit, tandis que Google Cloud (BigQuery, Vertex AI) pilote le lac de données et les algorithmes prédictifs.'
  },
  {
    id: 2,
    question: 'Quel rôle crucial joue l\'Edge Computing dans les 1 700 magasins de l\'enseigne ?',
    options: [
      'Il sert uniquement à diffuser la musique d\'ambiance dans les allées',
      'Il assure la résilience locale des caisses RFID et du stock même en cas de coupure de la connexion Internet',
      'Il remplace entièrement les serveurs centraux sans jamais communiquer avec le cloud',
      'Il sert de passerelle Wi-Fi réservée aux clients membres du club'
    ],
    correctIndex: 1,
    explanation: 'Grâce à des nœuds Edge locaux (comme K3s), les caisses automatiques à bac RFID continuent d\'encaisser les clients sans aucune interruption réseau, puis synchronisent les différentiels dès le rétablissement.'
  },
  {
    id: 3,
    question: 'Dans le cadre de leur démarche FinOps & Green IT, quelle mesure Decathlon applique-t-il ?',
    options: [
      'Laisser tous les environnements de test allumés 24h/24 par précaution',
      'Interdire tout usage de conteneurs pour revenir aux machines virtuelles dédiées',
      'L\'extinction nocturne automatisée des environnements de dev et le suivi du CO₂e dans chaque pull-request',
      'L\'achat systématique de matériel d\'occasion sans supervision logicielle'
    ],
    correctIndex: 2,
    explanation: 'Grâce à des outils comme Cloud Carbon Footprint et l\'automatisation GitOps, les serveurs hors production sont coupés automatiquement la nuit et le week-end, générant plus de 35% d\'économies carbone et financières.'
  },
  {
    id: 4,
    question: 'Comment GitHub Enterprise et Terraform ont-ils transformé le déploiement d\'infrastructure chez Decathlon ?',
    options: [
      'Ils ont réduit le temps de mise à disposition d\'une infrastructure cloud de plus d\'une semaine à moins de 30 minutes',
      'Ils ont obligé chaque développeur à configurer manuellement les serveurs en salle machine',
      'Ils ont remplacé tous les serveurs cloud par des ordinateurs portables de bureau',
      'Ils n\'ont rien changé car Decathlon n\'utilise pas de contrôle de version'
    ],
    correctIndex: 0,
    explanation: 'D\'après le retour d\'expérience officiel de Decathlon et HashiCorp, la standardisation des modules Terraform hébergés sur GitHub et déployés par GitOps a fait chuter le temps de provisionnement d\'une semaine à moins d\'une demi-heure pour leurs 1 500 ingénieurs.'
  }
];

