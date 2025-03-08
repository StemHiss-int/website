import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          Built by{" "}
          <Link
            href="https://linktr.ee/adilm.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Adil Mukhi
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/StemHiss-int/website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}