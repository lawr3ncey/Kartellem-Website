import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Marquee */}
      <div className="overflow-hidden py-4 border-b border-white/5">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl text-white/[0.03] tracking-wider"
            >
              KARTELLEM &bull; TELL&apos;EM &bull; MANILA UNDERGROUND &bull;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/tellem-logo.png"
              alt="KARTELLEM"
              width={200}
              height={80}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-mid text-xs leading-relaxed max-w-sm font-[family-name:var(--font-mono)]">
              Born from the concrete of Manila. KARTELLEM is more than a brand — it&apos;s a movement.
              A collective of voices from the underground.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-white mb-4 font-[family-name:var(--font-mono)]">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              {["HOME", "DROPS", "ROSTER", "CYPHER", "ABOUT"].map((link) => (
                <Link
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="text-xs text-gray-mid hover:text-white transition-colors font-[family-name:var(--font-mono)]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-white mb-4 font-[family-name:var(--font-mono)]">CONNECT</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "INSTAGRAM", href: "https://www.instagram.com/kartellem" },
                { name: "SPOTIFY", href: "https://open.spotify.com/artist/4e4flHlMWdF3KOADVBTMXo" },
                { name: "YOUTUBE", href: "https://www.youtube.com/channel/UCZoTMDETUDjDSNIpZeRdv_A" },
                { name: "FACEBOOK", href: "https://www.facebook.com/KARTELLEM" },
                { name: "TIKTOK", href: "https://www.tiktok.com/@kartellem.official" },
                { name: "X / TWITTER", href: "https://x.com/kartellem" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-mid hover:text-white transition-colors font-[family-name:var(--font-mono)]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-mid tracking-widest font-[family-name:var(--font-mono)]">
            &copy; 2026 KARTELLEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-gray-mid tracking-widest font-[family-name:var(--font-mono)]">PRIVACY POLICY</span>
            <span className="text-[10px] text-gray-mid tracking-widest font-[family-name:var(--font-mono)]">TERMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
