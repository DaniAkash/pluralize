export interface SuffixConfig {
  pluralSuffix: string;
}

export interface TermConfig {
  pluralTerm: string;
}

export const suffixTypeGuard = (
  s: SuffixConfig | TermConfig
): s is SuffixConfig => {
  // @ts-ignore
  if (s?.pluralSuffix) return true;
  return false;
};

export const termTypeGuard = (
  s: SuffixConfig | TermConfig
): s is TermConfig => {
  // @ts-ignore
  if (s?.pluralTerm) return true;
  return false;
};

export function pluralize(
  singular: string,
  count: number,
  config?: SuffixConfig | TermConfig
): string {
  if (typeof count !== "number") {
    return singular;
  }

  count = Math.abs(count);

  if (count === 1 || count === 0) return singular;

  if (!config && count > 1) {
    return singular + "s";
  }

  if (config && count > 1) {
    if (suffixTypeGuard(config)) {
      return singular + config.pluralSuffix;
    }
    if (termTypeGuard(config)) {
      return config.pluralTerm;
    }
    return singular + "s";
  }

  return singular;
}
