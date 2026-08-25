// src/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(
  query = '',
  { variables }: Record<string, any> = {}
) {
  if (!API_URL) {
    return null;
  }

  const headers = { 'Content-Type': 'application/json' };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout

    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      return null;
    }
    return json.data;
  } catch {
    // Graceful fallback to static data when external WordPress CMS is offline or unreachable
    return null;
  }
}
