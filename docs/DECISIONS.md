# Key Design Decisions

## 1. IPFS Cluster vs Single Node
**Why**:
- Ensures high availability
- Automatic pinning/replication management
- Built-in load balancing

**Trade-off**:
- Increased operational complexity
- Higher resource costs

## 2. Metadata Database
**Choice**: PostgreSQL + TimescaleDB
**Advantages**:
- Transaction support for versioning
- TimescaleDB for metrics collection
- JSONB columns for flexible metadata

## 3. Cache Strategy
**Implementation**:
- 2-layer caching:
  - L1: In-memory (LRU, 5min TTL)
  - L2: Redis (30min TTL)
- Write-through caching for metadata
- Cache-aside for object content

## 4. Object Versioning Approach
**Solution**:
- Each version = new IPFS CID
- Metadata DB maintains history chain
- Delete markers handled at application layer