export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-navy-dark">
      <div className="container-site py-12 md:py-16">
        {subtitle && (
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}
