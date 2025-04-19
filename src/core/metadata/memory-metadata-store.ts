import {IMetadataStore} from "../../models/interfaces";
import {ObjectMetadata} from "../../models/types";

export class MemoryMetadataStore implements IMetadataStore {
  private buckets: Set<string> = new Set();
  private objects: ObjectMetadata[] = [];

  async createBucket(bucketName: string): Promise<void> {
    this.buckets.add(bucketName);
  }

  async recordObject(bucket: string, key: string, cid: string): Promise<void> {
    this.objects.push({bucket, key, cid});
  }
}
