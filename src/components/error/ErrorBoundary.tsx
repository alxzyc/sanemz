import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';
import { Button } from '../ui/button';

type State = {
  error?: Error;
};

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Sanemz Models render error', error, info);
  }

  render(): ReactNode {
    if (!this.state.error) return this.props.children;

    return (
      <main className="grid min-h-screen place-items-center bg-[#0F0F1A] px-4 text-white">
        <section className="neon-card max-w-2xl rounded-[2rem] p-8 text-center">
          <p className="font-heading text-sm uppercase tracking-[0.35em] text-pink-300">Falha de renderização</p>
          <h1 className="gradient-text mt-4 text-6xl">Sanemz Models</h1>
          <p className="mt-5 text-slate-300">
            A interface encontrou um erro em tempo de execução. Recarregue a página ou confira o console do navegador.
          </p>
          <pre className="mt-6 max-h-44 overflow-auto rounded-2xl bg-black/40 p-4 text-left text-xs text-cyan-100">
            {this.state.error.message}
          </pre>
          <Button className="mt-6" onClick={() => window.location.reload()}>
            Recarregar site
          </Button>
        </section>
      </main>
    );
  }
}
