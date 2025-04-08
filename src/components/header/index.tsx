import Link from "next/link";

export function Header() {
  return (
    <header className="px-2 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <a className="font-bold object-left py-2"> João Pedro</a>

        <nav className="">
          <ul className="flex items-center justify-center ml-auto gap-2 h-full">
            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/skills">Skills</Link>
            </li>

            <li>
              <Link href="/projects">Portfólio</Link>
            </li>

            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
