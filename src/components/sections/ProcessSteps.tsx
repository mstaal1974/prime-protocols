interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-px bg-grey-200 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="relative bg-white p-7 md:p-8">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-display text-3xl font-light text-steel-dark">{step.number}</span>
            <span className="h-px flex-1 bg-grey-200" />
          </div>
          <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-grey-700">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
