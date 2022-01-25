import { createWearableStore } from "./store/index";

createWearableStore(new Transform({ position: new Vector3(9, 0, 1), rotation: Quaternion.Euler(0, 180, 0) }), [
  "urn:decentraland:matic:collections-v2:0x6cc419f307d2bdb787dfb7633ec792002a72a4c1",
  "urn:decentraland:matic:collections-v2:0x0f05d6899686a0bb927b93739ae124ea25e6224c",
]);

createWearableStore(new Transform({ position: new Vector3(3, 0, 1), rotation: Quaternion.Euler(0, 180, 0) }), [
  "urn:decentraland:matic:collections-v2:0x8b93ea506cd088ce0f99cf9b51562e2ce5154b9b",
  "urn:decentraland:matic:collections-v2:0xc905273727ee81e3730b255b263d85275c2555a9",
  "urn:decentraland:matic:collections-v2:0x664551cbe7de4ff5263e83ec2a1b1adc547b1add",
]);


createWearableStore(new Transform({ position: new Vector3(0, 0, 15), rotation: Quaternion.Euler(0, 0, 0) }));