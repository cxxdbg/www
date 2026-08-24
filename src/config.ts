// Current CxxDbg release.
//
// Update `version` when a new release is published — every download link and
// release URL on the site is derived from it.
export const release = {
  version: '0.2.1',
  repo: 'cxxdbg/cxxdbg',
};

/** Git tag for the current release, e.g. "v0.1.0". */
export const releaseTag = `v${release.version}`;

export const repoUrl = `https://github.com/${release.repo}`;

/** Release page for the current version (release notes, full asset list). */
export const releaseUrl = `${repoUrl}/releases/tag/${releaseTag}`;

/** Index of all releases. */
export const releasesUrl = `${repoUrl}/releases`;

/**
 * File name of a release asset, e.g. assetName('linux', 'deb') is
 * cxxdbg-0.1.0-linux.deb.
 */
export function assetName(platform: string, extension: string): string {
  return `cxxdbg-${release.version}-${platform}.${extension}`;
}

/** Direct download URL for a release asset. */
export function downloadUrl(platform: string, extension: string): string {
  return `${repoUrl}/releases/download/${releaseTag}/${assetName(platform, extension)}`;
}
