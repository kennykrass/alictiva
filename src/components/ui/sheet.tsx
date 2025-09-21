import * as React from "react";

import { cn } from "@/lib/utils";

type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheetContext() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within <Sheet />");
  }
  return context;
}

interface SheetProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Sheet({ children, defaultOpen = false }: SheetProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    if (!open || typeof document === "undefined") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

type AugmentProps = React.HTMLAttributes<HTMLElement> & React.AriaAttributes & Record<string, unknown>;

interface SheetTriggerProps {
  // Accept any React element (button, a, div...) and allow augmenting its props
  children: React.ReactElement<AugmentProps>;
}

export function SheetTrigger({ children }: SheetTriggerProps) {
  const { open, setOpen } = useSheetContext();

  const mergedProps: AugmentProps = {
    "aria-expanded": open,
    onClick: (event: React.MouseEvent) => {
      const handler = (children.props as AugmentProps).onClick as
        | ((e: React.MouseEvent) => void)
        | undefined;
      handler?.(event);
      if (!event.defaultPrevented) {
        setOpen(true);
      }
    },
  };
  return React.cloneElement(children, mergedProps);
}

interface SheetCloseProps {
  children: React.ReactElement<AugmentProps>;
}

export function SheetClose({ children }: SheetCloseProps) {
  const { setOpen } = useSheetContext();

  const mergedProps: AugmentProps = {
    onClick: (event: React.MouseEvent) => {
      const handler = (children.props as AugmentProps).onClick as
        | ((e: React.MouseEvent) => void)
        | undefined;
      handler?.(event);
      if (!event.defaultPrevented) {
        setOpen(false);
      }
    },
  };
  return React.cloneElement(children, mergedProps);
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
  title?: string;
  ariaLabel?: string;
}

export function SheetContent({
  side = "right",
  className,
  children,
  title,
  ariaLabel,
  ...props
}: SheetContentProps) {
  const { open, setOpen } = useSheetContext();

  if (!open) {
    return null;
  }

  const isLeft = side === "left";

  // Fallback inline styles for width/position so the drawer remains visible
  // even if Tailwind utilities fail to load in a dev environment.
  const panelStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    bottom: 0,
    [isLeft ? "left" : "right"]: 0,
    width: "min(92vw, 360px)",
    height: "100vh",
    padding: "1.5rem",
    borderRadius: 32,
    background: "var(--background)",
    backdropFilter: "blur(6px)",
    boxShadow: "var(--shadow-soft)",
    border: "1px solid var(--border)",
    overflowY: "auto",
  } as React.CSSProperties;

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-black/40"
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel ?? title ?? "Panel"}
        // Tailwind classes (when available) + robust inline fallback
        className={cn(
          "relative z-10 pointer-events-auto", // ensure above overlay
          isLeft ? "sm:pl-8" : "sm:pr-8",
          className
        )}
        style={panelStyle}
        {...props}
      >
        {title ? (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            <SheetClose>
              <button
                type="button"
                className="rounded-full p-2 text-foreground transition hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Cerrar menú"
              >
                X
              </button>
            </SheetClose>
          </div>
        ) : null}
        {children}
      </aside>
    </div>
  );
}
