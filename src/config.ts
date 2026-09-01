// Current CxxDbg release.
//
// Update `version` when a new release is published — every download link and
// release URL on the site is derived from it.
export const release = {
  version: '0.2.1',
  repo: 'cxxdbg/cxxdbg',
};

/** Git tag for the current release, e.g. "v0.2.1". */
export const releaseTag = `v${release.version}`;

export const repoUrl = `https://github.com/${release.repo}`;

/** Release page for the current version (release notes, full asset list). */
export const releaseUrl = `${repoUrl}/releases/tag/${releaseTag}`;

/**
 * VS Code extension listing on the Visual Studio Marketplace.
 * Item id is <publisher>.<name> from the extension's package.json.
 */
export const marketplaceUrl =
  'https://marketplace.visualstudio.com/items?itemName=cxxdbg.cxxdbg-vscode';

/** Index of all releases. */
export const releasesUrl = `${repoUrl}/releases`;

/** Direct download URL for a file attached to the current release. */
export function releaseFileUrl(fileName: string): string {
  return `${repoUrl}/releases/download/${releaseTag}/${fileName}`;
}

/**
 * File name of a platform build, e.g. assetName('linux', 'deb') is
 * cxxdbg-0.2.1-linux.deb.
 */
export function assetName(platform: string, extension: string): string {
  return `cxxdbg-${release.version}-${platform}.${extension}`;
}

/** Direct download URL for a platform build. */
export function downloadUrl(platform: string, extension: string): string {
  return releaseFileUrl(assetName(platform, extension));
}

/**
 * File name of the VS Code extension package. It does not follow the platform
 * naming scheme: cxxdbg-vscode-0.2.1.vsix.
 */
export function vscodeAssetName(): string {
  return `cxxdbg-vscode-${release.version}.vsix`;
}
