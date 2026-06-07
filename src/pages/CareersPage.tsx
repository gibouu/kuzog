import { useMemo, useState } from 'react';
import { Briefcase, MapPin, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { ExpandableCard } from '../components/ExpandableCard';
import { ExpandableList } from '../components/ExpandableList';
import { ContactCTA } from '../components/ContactCTA';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';

export default function CareersPage() {
  const { content } = useLanguage();
  const c = content.careers;
  const [search, setSearch] = useState('');
  const [company, setCompany] = useState<'all' | 'hydrobio' | 'microplantes'>('all');
  const [department, setDepartment] = useState<string>('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string>('careers');
  const [toastOpen, setToastOpen] = useState(false);

  const departments = useMemo(() => {
    const all = c.jobs
      .filter((j) => company === 'all' || j.company === company)
      .map((j) => j.department);
    return Array.from(new Set(all));
  }, [c.jobs, company]);

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return c.jobs.filter((job) => {
      if (company !== 'all' && job.company !== company) return false;
      if (department !== 'all' && job.department !== department) return false;
      if (!q) return true;
      const haystack = [job.title, job.mission, ...job.responsibilities, ...job.profile]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [c.jobs, search, company, department]);

  const openApply = (jobId: string) => {
    setContactTopic(`careers-${jobId}`);
    setIsContactOpen(true);
  };

  return (
    <>
      <Toast
        open={toastOpen}
        onDismiss={() => setToastOpen(false)}
        message={content.contactModal.successMessage}
      />
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={() => setToastOpen(true)}
        topic={contactTopic}
      />
      <ProductPageShell accent="group">
        <StoryBeat id="careers-hero" eyebrow={c.hero.eyebrow} title={c.hero.title} accent="group">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{c.hero.body}</p>
        </StoryBeat>

        <StoryBeat id="careers-list" accent="group">
          {/* Filter bar */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto]">
            <label className="relative flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-muted-ink" aria-hidden />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={c.filters.searchPlaceholder}
                className="h-12 w-full rounded-full border border-hairline bg-surface pl-11 pr-4 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
              />
            </label>
            <select
              value={company}
              onChange={(e) => {
                setCompany(e.target.value as typeof company);
                setDepartment('all');
              }}
              className="h-12 rounded-full border border-hairline bg-surface px-5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
            >
              <option value="all">{c.filters.allCompanies}</option>
              <option value="hydrobio">Hydrobio</option>
              <option value="microplantes">Microplantes</option>
            </select>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="h-12 rounded-full border border-hairline bg-surface px-5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
            >
              <option value="all">{c.filters.allDepartments}</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-ink">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'opening' : 'openings'}
          </p>

          {/* Job list */}
          {filteredJobs.length === 0 ? (
            <p className="rounded-card border border-hairline bg-surface-elevated p-8 text-center text-base text-muted-ink">
              {c.empty}
            </p>
          ) : (
            <ExpandableList>
              {filteredJobs.map((job) => (
                <ExpandableCard
                  key={job.id}
                  title={job.title}
                  teaser={`${job.company === 'hydrobio' ? 'Hydrobio' : 'Microplantes'} · ${job.department} · ${job.location}`}
                  accent={job.company === 'hydrobio' ? 'hydrobio' : 'microplantes'}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink">
                        <Briefcase className="h-3 w-3" aria-hidden />
                        {job.contract}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink">
                        <MapPin className="h-3 w-3" aria-hidden />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-sm text-ink md:text-base">{job.mission}</p>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-ink">
                        Responsibilities
                      </h4>
                      <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-ink md:text-base">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-muted-ink">·</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-ink">
                        Profile
                      </h4>
                      <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-ink md:text-base">
                        {job.profile.map((p, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-muted-ink">·</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => openApply(job.id)}
                      className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink shadow-card transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
                    >
                      {c.applyCta}
                    </button>
                  </div>
                </ExpandableCard>
              ))}
            </ExpandableList>
          )}
        </StoryBeat>

        <StoryBeat id="careers-spontaneous" accent="group">
          <ContactCTA
            title={c.spontaneousHeading}
            description={c.spontaneousBody}
            ctaLabel={c.spontaneousCta}
            onContactClick={() => {
              setContactTopic('careers-spontaneous');
              setIsContactOpen(true);
            }}
          />
        </StoryBeat>
      </ProductPageShell>
    </>
  );
}
