import { Client, Databases, Storage } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

const client = new Client();

if (typeof window !== "undefined" && endpoint && projectId) {
  client.setEndpoint(endpoint).setProject(projectId);
}

export const appwrite = {
  client,
  databases: new Databases(client),
  storage: new Storage(client),
};

export const appwriteConfig = {
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "",
  collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID ?? "",
  storageBucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID ?? "",
  resumeFileId: process.env.NEXT_PUBLIC_APPWRITE_RESUME_FILE_ID ?? "",
};

export function getResumeDownloadUrl(): string | null {
  if (!appwriteConfig.storageBucketId || !appwriteConfig.resumeFileId) {
    return null;
  }

  try {
    return appwrite.storage.getFileDownload(
      appwriteConfig.storageBucketId,
      appwriteConfig.resumeFileId
    );
  } catch (error) {
    console.warn("[Appwrite] Failed to build resume download URL", error);
    return null;
  }
}


