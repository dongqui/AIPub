export function getApiUrl(
  path: string,
  params?: Record<string, string | undefined>
) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://ai-pub-mu.vercel.app/api"
      : "http://localhost:3000/api";
  const searchParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
  }

  const query = searchParams.toString();
  return `${baseUrl}${path}${query ? `?${query}` : ""}`;
}
