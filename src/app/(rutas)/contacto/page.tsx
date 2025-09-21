import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Alictiva para colaboraciones, distribución o dudas generales.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral/70">Colaboremos</span>
        <h1 className="text-3xl font-bold text-foreground">Contacto</h1>
        <p className="text-sm text-foreground/75">
          Cuéntanos sobre tu proyecto gastronómico, tu restaurante o la experiencia que quieres crear con nuestras
          salsas. Te responderemos en menos de 48 horas hábiles.
        </p>
      </header>

      <ContactForm />
    </div>
  );
}
