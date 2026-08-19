export type Phase = {
  id: number
  title: string
  blurb: string
  from: number
  to: number
}

export type ChallengeMeta = {
  /** 1-500, matches the ticket number in the title and the folder prefix */
  id: number
  /** folder name suffix, e.g. "the-cascade-in-practice" */
  slug: string
  title: string
  phase: number
  difficulty: 'intro' | 'easy' | 'medium' | 'hard' | 'capstone'
  /** GitHub issue number, filled in by scripts/sync-curriculum.mjs after seeding */
  issue: number | null
}

/** "42" -> "042" */
export const pad = (id: number) => String(id).padStart(3, '0')

/** folder name for a challenge, e.g. 42 -> "042-the-slug" */
export const folderOf = (c: ChallengeMeta) => `${pad(c.id)}-${c.slug}`
