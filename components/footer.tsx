export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <p className="text-sm text-text-muted">
          Melaku Alehegn · {currentYear}
        </p>
      </div>
    </footer>
  );
}
