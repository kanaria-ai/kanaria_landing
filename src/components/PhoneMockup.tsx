import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 320px, 70vw",
}: Props) {
  return (
    <div
      className={`relative aspect-[1179/2556] rounded-[2.75rem] bg-ink p-[7px] shadow-phone ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-[14px] h-[24px] w-[96px] -translate-x-1/2 rounded-full bg-ink"
      />
    </div>
  );
}
