// CONTENT_AGENT: Replace placeholder testimonials with real patient
// stories — anonymised, with written consent, reviewed by Dr Kai and
// regulatory lawyer before publication. Strategy §11 implies they're
// expected; strategy compliance rules forbid specific outcome claims.
// Until then: hold as placeholders / consider removing pre-launch if no
// approved testimonials are available.

const placeholders = [
  {
    quote:
      'PLACEHOLDER — replace with a real, approved patient testimonial. Must not contain specific outcome claims.',
    name: 'Initials, age',
    detail: 'State',
  },
  {
    quote: 'PLACEHOLDER — replace with a real, approved patient testimonial.',
    name: 'Initials, age',
    detail: 'State',
  },
  {
    quote: 'PLACEHOLDER — replace with a real, approved patient testimonial.',
    name: 'Initials, age',
    detail: 'State',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-grey-50 py-section">
      <div className="container-site">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            In their words
          </p>
          <h2 className="font-display text-display-md font-semibold text-navy">
            How patients describe the experience.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-md border border-grey-200 bg-white p-7"
            >
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="currentColor"
                aria-hidden
                className="mb-5 text-steel-dark"
              >
                <path d="M0 22 V12 C0 5.4 5.4 0 12 0 V4 C7.6 4 4 7.6 4 12 H8 V22 H0 Z M16 22 V12 C16 5.4 21.4 0 28 0 V4 C23.6 4 20 7.6 20 12 H24 V22 H16 Z" />
              </svg>
              <blockquote className="flex-1 text-grey-800 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-grey-200 pt-4 text-xs">
                <div className="font-medium text-navy">{t.name}</div>
                <div className="text-grey-500">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
