export async function fetchImageAsBase64(
  url: string,
): Promise<{ base64: string; mimeType: string } | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.statusText}`);
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    const mimeType = response.headers.get("content-type") || "image/png";

    return { base64, mimeType };
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
