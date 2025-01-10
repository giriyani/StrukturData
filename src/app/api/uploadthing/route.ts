import { UTApi } from "uploadthing/server";
import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

export async function DELETE(request: Request) {
  const { fileKey } = await request.json();
  const utApi = new UTApi();
  await utApi.deleteFiles(fileKey);

  return Response.json({ message: "Image Deleted" });
}