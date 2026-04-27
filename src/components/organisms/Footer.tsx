const imgLogoWhite = "https://www.figma.com/api/mcp/asset/3b25be71-85b3-4abf-a766-bdc97ab86520";
const imgFacebook = "https://www.figma.com/api/mcp/asset/087b5ec0-650d-480c-95f2-9cbccc9cb655";
const imgInstagram = "https://www.figma.com/api/mcp/asset/8a340ad3-7a5a-4444-b7c6-b80aae6222ac";

export function Footer() {
  return (
    <footer className="bg-brand py-12 sm:py-16 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-10">
              <img src={imgLogoWhite} alt="Tzedar" className="h-full w-auto object-contain brightness-0 invert" />
            </div>
            <p className="font-semibold text-lg text-white leading-snug">Good things, going further.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgFacebook} alt="Facebook" className="h-5 w-auto brightness-0 invert" />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={imgInstagram} alt="Instagram" className="h-5 w-auto brightness-0 invert" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Notice</a>
            <span className="text-white/30 hidden sm:block">|</span>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms and Conditions</a>
            <span className="text-white/30 hidden sm:block">|</span>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Disclaimer</a>
          </div>
          <p className="text-sm text-white/70 sm:text-right">© 2026 Tzedar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
