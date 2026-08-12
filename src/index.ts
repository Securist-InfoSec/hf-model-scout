/** @securist/hf-model-scout */
export const packageId = 'hf-model-scout' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
