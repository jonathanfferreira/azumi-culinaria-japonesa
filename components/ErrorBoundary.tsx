import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-azumi-dark flex items-center justify-center text-white px-6">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Ops, algo deu errado.</h1>
            <p className="text-gray-400 mb-8">Tente recarregar a página.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-azumi-red px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
