import Link from "next/link";

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconTiktok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 4v6.2c-1.1-.9-2.5-1.3-4-1.1a4 4 0 1 0 4 3.9V8.3c1 .9 2.3 1.6 3.8 1.7V7.3c-1.5-.2-2.8-1.1-3.8-2.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H6v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3Z" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-2 text-sm text-foreground/75">
          <span className="text-lg font-semibold text-foreground">ALICTIVA</span>
          <span>Sabores intensos creados en México con ingredientes de origen responsable.</span>
          <span>© {year} Alictiva. Todos los derechos reservados.</span>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <nav className="flex items-center gap-4" aria-label="Redes sociales">
            <Link
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition hover:bg-muted/20"
              href="https://instagram.com"
              aria-label="Instagram de Alictiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition hover:bg-muted/20"
              href="https://www.tiktok.com/"
              aria-label="TikTok de Alictiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTiktok className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition hover:bg-muted/20"
              href="https://facebook.com"
              aria-label="Facebook de Alictiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </nav>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Enlaces legales">
            <Link className="transition hover:text-primary" href="/aviso-de-privacidad">
              Aviso de privacidad
            </Link>
            <Link className="transition hover:text-primary" href="/terminos">
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
