const verifiedStar = "https://www.figma.com/api/mcp/asset/ed98512b-6123-4451-b826-66d3e1627617";
const verifiedCheck = "https://www.figma.com/api/mcp/asset/da1d30df-2d95-4b89-b41e-3d346c26b8b2";

type CharityCardProps = {
  image: string;
  name: string;
  description: string;
};

export function CharityCard({ image, name, description }: CharityCardProps) {
  return (
    <div className="relative w-[260px] sm:w-[280px] h-[420px] sm:h-[479px] shrink-0 rounded-[24px] overflow-hidden border border-[#eee] shadow-[0px_16px_35px_rgba(21,32,30,0.04),0px_63px_63px_rgba(0,0,0,0.04)]"
      style={{ background: "linear-gradient(to bottom, rgba(242,247,244,0.7), rgba(208,230,218,0.7))", backdropFilter: "blur(16px)" }}
    >
      <div className="absolute inset-[7px] rounded-2xl overflow-hidden border border-[rgba(124,139,137,0.27)]">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "blur(11px)" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.88) 100%)" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-semibold text-lg text-[#fafafa] leading-snug">{name}</p>
          <div className="relative shrink-0 w-6 h-6">
            <img src={verifiedStar} alt="" className="absolute inset-0 w-full h-full" />
            <img src={verifiedCheck} alt="" className="absolute inset-[20%] w-[60%] h-[60%]" />
          </div>
        </div>
        <p className="text-sm text-[#fafafa] leading-snug opacity-90">{description}</p>
      </div>
    </div>
  );
}
