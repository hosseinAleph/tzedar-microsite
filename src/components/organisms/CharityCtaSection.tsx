import { PrimaryButton } from "@/components/atoms/PrimaryButton";

const ctaImage = "https://www.figma.com/api/mcp/asset/2854d660-3f99-470f-b7c9-759218e4092c";

export function CharityCtaSection() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(242,247,244,0.95) 0%, rgba(242,247,244,0.7) 60%, rgba(242,247,244,0.1) 100%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-6 sm:gap-8 max-w-xs sm:max-w-md lg:max-w-xl">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-darkest leading-snug">
            bring your cause into the circle.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-snug">
            Tzedar is open to charities of every size. List your cause and let generous sellers find you — no ads, no friction.
          </p>
          <div>
            <PrimaryButton size="md" showArrow>Join as charity</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
