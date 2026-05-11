const pillars = [
  {
    n: '01',
    title: 'Doctor-led, always.',
    body: 'Every protocol is prescribed by a registered medical practitioner following an individual clinical assessment.',
  },
  {
    n: '02',
    title: 'TGA-compliant prescribing.',
    body: 'We operate strictly within the Australian regulatory framework. No grey-market products, no offshore workarounds.',
  },
  {
    n: '03',
    title: 'Evidence-based protocols.',
    body: 'Treatments grounded in clinical research. We are clear about what the evidence shows — and what it doesn&rsquo;t.',
  },
  {
    n: '04',
    title: 'Pathology that actually answers the question.',
    body: 'Comprehensive panels that look at hormone, metabolic, and inflammation markers most GPs do not test.',
  },
  {
    n: '05',
    title: 'Telehealth, Australia-wide.',
    body: 'You don&rsquo;t need to live near a capital city to access specialist men&rsquo;s health care.',
  },
  {
    n: '06',
    title: 'Transparent at every step.',
    body: 'No hidden upsells, no supplement push, no theatre. The medicine is the product.',
  },
]

export default function TrustPillars() {
  return (
    <section className="bg-white py-section">
      <div className="container-site">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            How we work
          </p>
          <h2 className="font-display text-display-md font-semibold text-navy">
            Trust signals, not trust language.
          </h2>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="group">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-display text-2xl font-light text-steel-dark">{p.n}</span>
                <span className="h-px flex-1 bg-grey-200 group-hover:bg-steel transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy" dangerouslySetInnerHTML={{ __html: p.title }} />
              <p className="mt-3 text-sm leading-relaxed text-grey-700" dangerouslySetInnerHTML={{ __html: p.body }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
