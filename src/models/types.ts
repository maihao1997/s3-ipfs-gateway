export type BasicResponse = {
  status: string;
  message?: string;
  error?: Error;
};

export type BucketItem = {
  name: string;
  createdAt: Date;
};

export type ObjectMetadata = {
  bucket: string;
  key: string;
  cid: string;
};
