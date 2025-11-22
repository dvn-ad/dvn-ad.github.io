export function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Devin Adams. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground text-center md:text-right">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
