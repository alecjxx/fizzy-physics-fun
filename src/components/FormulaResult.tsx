import { Atom, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface FormulaResultProps {
  result: string | null;
  isLoading: boolean;
}

const FormulaResult = ({ result, isLoading }: FormulaResultProps) => {
  if (isLoading) {
    return (
      <div className="glass-card p-8 fizzy-glow-blue">
        <div className="flex items-center justify-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-lg text-muted-foreground">Fizzy is calculating...</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="glass-card p-8 fizzy-glow-blue">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Atom className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-display font-semibold text-foreground">Fizzy Says:</h3>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-display font-bold text-foreground mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-display font-semibold text-primary mt-6 mb-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-secondary mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="text-foreground font-semibold">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-muted-foreground">{children}</li>
            ),
            code: ({ children }) => (
              <code className="px-2 py-1 rounded bg-muted/50 text-primary font-mono text-sm">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="p-4 rounded-lg bg-muted/30 border border-primary/20 overflow-x-auto mb-4">{children}</pre>
            ),
          }}
        >
          {result}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default FormulaResult;
