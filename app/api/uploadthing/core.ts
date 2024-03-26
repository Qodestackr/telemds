import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = () => ({ id: "WbWAzeOrxESd1g6TPOx7ihOXGiClG24QuVU1WVzVqwk=" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "32MB", maxFileCount: 3 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({}) => {
      // This code runs on your server before upload
      const user = await auth();

      /**
       ** If you throw, the user will not be able to upload **
          TODO: Implement state management solution to manage application state, including error handling, 
          file upload status, user authentication, etc.
      
      ** Implement Error Codes
        TODO: Define a set of error codes for different types of errors that may occur during file upload or other operations.
        Example: Create an enum or constants file with error code mappings, such as ERROR_UNAUTHORIZED, ERROR_FILE_TOO_LARGE, etc.

      ** TODO: Implement a retry mechanism for handling failed file upload attempts.

      ** If All Fails Update Error and Hence the UI
      TODO: Update UI components to display appropriate error messages based on error codes or error descriptions received from the backend.

      ** Log to Sentry
      TODO: Integrate Sentry or another error monitoring and logging service to capture and log errors occurring in the application.
      Example: Configure Sentry SDK with appropriate error reporting settings and error level thresholds.
      */

      if (!user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async () => {
      // This code RUNS ON YOUR SERVER after upload
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
