export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
          Page Not Found
        </p>
        <h1
          className="mobile-heading-balance mb-8 text-4xl font-serif uppercase leading-tight text-brand-dark md:text-6xl"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          This Page Is Not Available
        </h1>
        <p className="mx-auto mb-6 md:mb-10 max-w-xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">
          The page you are looking for may have moved or no longer exists.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-brand-dark px-8 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-brand-gold"
        >
          Back To Home
        </a>
      </div>
    </main>
  );
}
