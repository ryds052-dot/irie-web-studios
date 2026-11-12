export const SLOTS_LEFT = 3;
export const AVAIL_MONTH = new Date().toLocaleString("en-US", { month: "long" });
export const SLOTS_LABEL =
  SLOTS_LEFT > 0 ? `${SLOTS_LEFT} slots left for ${AVAIL_MONTH}` : "Waitlist for next month";