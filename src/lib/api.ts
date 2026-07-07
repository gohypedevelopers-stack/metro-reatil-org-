// src/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(
  query = '',
  { variables }: Record<string, any> = {}
) {
  const headers = { 'Content-Type': 'application/json' };

  if (!API_URL) {
    console.warn("NEXT_PUBLIC_WORDPRESS_API_URL is not defined in environment variables.");
    return { data: null };
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      // Revalidate cache every hour, or adjust as needed
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    return null;
  }
}
