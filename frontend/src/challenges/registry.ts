import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

/**
 * Challenge folders are discovered at build time — there is no registration
 * step. Create src/challenges/042-my-slug/index.tsx with a default export and
 * it shows up in the sidebar.
 */
const modules = import.meta.glob('./*/index.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType }>
>

const entries = Object.entries(modules).map(([path, load]) => {
  // "./042-my-slug/index.tsx" -> "042-my-slug"
  const folder = path.split('/')[1]
  return [folder, lazy(load)] as const
})

export const builtChallenges = new Map<string, LazyExoticComponent<ComponentType>>(
  entries,
)

/** folder names that exist on disk, e.g. ["000-example", "001-..."] */
export const builtFolders = entries.map(([folder]) => folder)

/** numeric ids that exist on disk, ignoring the non-ticket 000-example */
export const builtIds = new Set(
  builtFolders
    .map((folder) => Number(folder.slice(0, 3)))
    .filter((id) => Number.isFinite(id) && id > 0),
)
