const LOCALE = 'en-GB';

export function getId(url: string) {
  const matches = url.match(/(\d+)(?:\/)(?:\?.*)?$/);
  return matches ? matches[1] : null;
}

export function formatDate(dateIso: string) {
  const d = new Date(dateIso);
  return d.toLocaleString(LOCALE, { timeZone: 'UTC' });
}

export function formatNumber(number: any) {
  return new Intl.NumberFormat(LOCALE).format(number);
}
