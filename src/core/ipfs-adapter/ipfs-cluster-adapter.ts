import {IIPFSAdapter} from "../../models/interfaces"

export class IPFSClusterAdapter implements IIPFSAdapter {
  private mockStorage: Record<string, Buffer> = {};

  async addContent(data: Buffer): Promise<string> {
    const mockCid = `mock-cid-${Math.random().toString(36).substring(2, 9)}`;
    this.mockStorage[mockCid] = data;
    return mockCid;
  }

  async getContent(cid: string): Promise<Buffer> {
    const data = this.mockStorage[cid];
    if (!data) throw new Error("Content not found");
    return data;
  }
}
