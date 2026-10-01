import { capabilityColumns, capabilityRows } from '../../data/skills'
import { Reveal } from '../ui/Reveal'

export const CapabilityMatrix = () => (
  <Reveal className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
    <div className="border-b border-[var(--border)] px-5 py-5 sm:px-7">
      <p className="spec-label">Capability connection matrix</p>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
        Indicators show where a documented project uses a capability. They are not proficiency scores.
      </p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="px-5 py-4 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--text-tertiary)] sm:px-7">Project system</th>
            {capabilityColumns.map((column) => (
              <th key={column} className="px-3 py-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[var(--text-tertiary)]">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {capabilityRows.map((row) => (
            <tr key={row.name} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface-secondary)]">
              <th className="px-5 py-4 text-sm font-medium text-[var(--text-primary)] sm:px-7">{row.name}</th>
              {capabilityColumns.map((column) => {
                const active = row.capabilities.includes(column)
                return (
                  <td key={column} className="px-3 py-4 text-center">
                    <span className={`mx-auto block size-2.5 rounded-full border ${active ? 'border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_55%,transparent)]' : 'border-[var(--border-strong)] bg-transparent'}`}>
                      <span className="sr-only">{active ? 'Used' : 'Not indicated'}</span>
                    </span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Reveal>
)
