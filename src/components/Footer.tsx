import Link from "next/link";

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
          <nav className="flex flex-col gap-2 text-sm" aria-label="Redes sociales">
            <Link className="transition hover:text-primary" href="https://instagram.com" aria-label="Instagram de Alictiva">
              Instagram
            </Link>
            <Link className="transition hover:text-primary" href="https://tiktok.com" aria-label="TikTok de Alictiva">
              TikTok
            </Link>
            <Link className="transition hover:text-primary" href="https://youtube.com" aria-label="YouTube de Alictiva">
              YouTube
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
