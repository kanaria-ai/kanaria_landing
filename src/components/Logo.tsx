import Image from "next/image";

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={light ? "/brand/logo-white.svg" : "/brand/logo.svg"}
        alt=""
        width={22}
        height={25}
        priority
      />
      <span className={`text-[17px] font-extrabold tracking-[0.08em] ${light ? "text-white" : "text-ink"}`}>
        KANARIA
      </span>
    </span>
  );
}
