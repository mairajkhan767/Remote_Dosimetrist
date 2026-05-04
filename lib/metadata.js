export function canonicalFor(path) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const cleanBase = base.replace(/\/$/, '');
  if (!path) return cleanBase + '/';
  if (path === '/') return cleanBase + '/';
  return cleanBase + (path.startsWith('/') ? path : `/${path}`);
}

export default canonicalFor;
