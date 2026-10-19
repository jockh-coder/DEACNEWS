import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-6 text-stone-800 font-sans">
          <div className="max-w-md w-full bg-white border border-stone-200 rounded-xl p-8 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
              !
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2 font-serif">
              Chargement de l'article en cours
            </h2>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              Une interruption temporaire a été détectée lors de l'initialisation. Cliquez ci-dessous pour recharger l'article.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#001090] text-white text-xs font-semibold rounded-lg hover:bg-[#000d70] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Actualiser la page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
