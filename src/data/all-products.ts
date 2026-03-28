import { Product } from "./products";
import { BATCH_POWER_HAND } from "./batch-power-hand";
import { BATCH_HEAVY_AUTO } from "./batch-heavy-auto";
import { BATCH_WOOD_WELD } from "./batch-wood-weld";
import { BATCH_ELEC_PLUMB_SAFETY } from "./batch-elec-plumb-safety";
import { BATCH_STORAGE_OUTDOOR_MEASURE_COOL } from "./batch-storage-outdoor-measure-cool";

// All products — ~1500 across all categories
export const ALL_PRODUCTS: Product[] = [
  ...BATCH_POWER_HAND,
  ...BATCH_HEAVY_AUTO,
  ...BATCH_WOOD_WELD,
  ...BATCH_ELEC_PLUMB_SAFETY,
  ...BATCH_STORAGE_OUTDOOR_MEASURE_COOL,
];
