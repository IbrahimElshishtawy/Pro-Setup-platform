import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[PRO SETUP] Application Error caught by boundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05080D] text-slate-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-dark-800/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">Something went wrong</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                The application encountered an unexpected error. Please refresh the page or restart the development server.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-dark-950/80 border border-white/5 text-[11px] font-mono text-rose-300 text-left overflow-x-auto max-h-32">
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
