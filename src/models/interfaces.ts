export interface IS3Gateway {
  createBucket(bucketName: string): Promise<{status: string}>;
  putObject(
    bucketName: string,
    key: string,
    data: Buffer
  ): Promise<{etag: string}>;
  getObject(bucketName: string, key: string): Promise<Buffer>;
}

export interface IIPFSAdapter {
  addContent(data: Buffer): Promise<string>;
  getContent(cid: string): Promise<Buffer>;
}

export interface IMetadataStore {
  createBucket(bucketName: string): Promise<void>;
  recordObject(bucket: string, key: string, cid: string): Promise<void>;
}
