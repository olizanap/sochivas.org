import Link from "next/link";
import Image from "next/image";

export default function Logo({ compact = false, white = false }: { compact?: boolean; white?: boolean }) {
  if (white) {
    return (
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <Image
          src="/images/sochivas-icon-512.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-sm font-bold text-white tracking-[0.12em]">
          SOCHIVAS
        </span>
      </Link>
    );
  }

  const iconSize = compact ? 32 : 40;

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Image
        src="/images/sochivas-icon-512.png"
        alt=""
        width={iconSize}
        height={iconSize}
        className="rounded-full shrink-0"
        priority
      />
      <div className="hidden sm:flex flex-col leading-none min-w-0">
        <span className={`${compact ? "text-[8px]" : "text-[9px]"} text-navy/50 font-medium tracking-wider uppercase`}>
          Sociedad Chilena de Cirugía Vascular y Endovascular
        </span>
        <span className={`${compact ? "text-sm" : "text-[15px]"} font-bold text-navy tracking-[0.14em] leading-snug`}>
          SOCHIVAS
        </span>
      </div>
      <span className="sm:hidden text-sm font-bold text-navy tracking-[0.12em]">
        SOCHIVAS
      </span>
    </Link>
  );
}
