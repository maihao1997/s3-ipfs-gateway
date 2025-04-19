import {S3IPFSGateway} from "./core/gateway";
import {IPFSClusterAdapter} from "./core/ipfs-adapter/ipfs-cluster-adapter";
import {MemoryMetadataStore} from "./core/metadata/memory-metadata-store";
import {Buffer} from "buffer";

async function main() {
  // Initialize components
  const ipfsAdapter = new IPFSClusterAdapter();
  const metadataStore = new MemoryMetadataStore();
  const gateway = new S3IPFSGateway(ipfsAdapter, metadataStore);

  // Test workflow
  try {
    // Create bucket
    const bucketResult = await gateway.createBucket("test-bucket");
    console.log("Bucket created:", bucketResult);

    // Put object
    const putResult = await gateway.putObject(
      "test-bucket",
      "test.txt",
      Buffer.from("Hello IPFS!")
    );
    console.log("Object stored:", putResult);

    console.log("✅ Basic operations working!");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();
