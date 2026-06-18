export default function Pricing() {
  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
          Pricing details coming soon.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We are currently accepting design partners for the IntegrateWise pilot program.
        </p>
        <a
          href="mailto:hello@integratewise.ai"
          className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
        >
          Apply for Pilot
        </a>
        <p className="mt-6 text-sm text-muted-foreground">
          <a href="/" className="underline hover:text-foreground transition-colors">← Back to home</a>
        </p>
      </div>
    </div>
  );
}
