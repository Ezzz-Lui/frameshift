import Link from "next/link";

export default function FooterApp() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Frameshift. Real challenges for real developers.
            <br />
            <br /> By Luis Ramos.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/challenges"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Challenges
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
