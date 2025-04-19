import {IS3Gateway} from "../models/interfaces";
import {IIPFSAdapter, IMetadataStore} from "../models/interfaces";

export class S3IPFSGateway implements IS3Gateway {
  constructor(
    private ipfs: IIPFSAdapter,
    private metadata: IMetadataStore
  ) {}

  async createBucket(bucketName: string): Promise<{status: string}> {
    await this.metadata.createBucket(bucketName);
    return {status: "success"};
  }

  async putObject(
    bucketName: string,
    key: string,
    data: Buffer
  ): Promise<{etag: string}> {
    const cid = await this.ipfs.addContent(data);
    await this.metadata.recordObject(bucketName, key, cid);
    return {etag: `"${cid}"`};
  }

  async getObject(bucketName: string, key: string): Promise<Buffer> {
    // Simplified - in real implementation would query metadata first
    throw new Error("Not implemented in this minimal version");
  }
}
