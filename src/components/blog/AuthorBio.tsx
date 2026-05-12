import { AUTHORS, type AuthorId } from '@/lib/constants'

interface AuthorBioProps {
  authorId: AuthorId
  reviewedById?: AuthorId
}

/**
 * EEAT (strategy §7.5): named author, credentials, clinical reviewer.
 * Strategy §13.5: communications-persona disclosure for staff authors.
 */
export default function AuthorBio({ authorId, reviewedById }: AuthorBioProps) {
  const author = AUTHORS[authorId]
  if (!author) return null
  const reviewer = reviewedById ? AUTHORS[reviewedById] : undefined

  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <aside className="rounded-md border border-grey-200 bg-white p-7" aria-label="About the author">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-steel-50 font-display text-xl font-semibold text-steel-dark">
            {initials}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-navy">{author.name}</h3>
            {author.title && <span className="text-xs text-grey-500">{author.title}</span>}
          </div>
          {author.credentials && (
            <p className="mb-3 text-xs text-grey-600">{author.credentials}</p>
          )}
          <p className="text-sm leading-relaxed text-grey-700">{author.bio}</p>

          {author.type === 'staff' && 'disclosure' in author && author.disclosure && (
            <p className="mt-4 border-t border-grey-200 pt-3 text-xs italic text-grey-500">
              {author.disclosure}
            </p>
          )}

          {author.type === 'guest' && 'website' in author && author.website && (
            <p className="mt-3">
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 decoration-steel text-navy hover:decoration-2"
              >
                {new URL(author.website).hostname}
              </a>
            </p>
          )}

          {reviewer && (
            <p className="mt-4 border-t border-grey-200 pt-3 text-xs text-grey-600">
              Clinically reviewed and approved by{' '}
              <strong className="text-navy">{reviewer.name}</strong>
              {reviewer.credentials ? `, ${reviewer.credentials}` : ''} prior to publication.
            </p>
          )}
        </div>
      </div>
    </aside>
  )
}
