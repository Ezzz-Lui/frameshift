import Link from "next/link";

export default function FooterApp() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center gap-4 text-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              © 2025 Frameshift. Real challenges for real developers.
            </p>
            <p className="text-sm text-muted-foreground">By Luis Ramos.</p>
          </div>
          {/* <div className="flex items-center gap-6">
            <Link
              href="/challenges"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Challenges
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
