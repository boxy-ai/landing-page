export type HubSpotRegion = "na1" | "na2" | "eu1";

export interface HubSpotWaitlistConfig {
  portalId: string;
  formId: string;
  region: HubSpotRegion;
}

const PLACEHOLDER_PREFIX = "REPLACE_WITH_";

// Replace these placeholders with the live HubSpot embed settings before shipping.
export const HUBSPOT_WAITLIST_FORM: HubSpotWaitlistConfig = {
  portalId: "245478646",
  formId: "71db2b01-5af1-4ef8-bee5-6ce9c57942fd",
  region: "na2",
};

function isPlaceholderValue(value: string) {
  const trimmed = value.trim();
  return trimmed === "" || trimmed.startsWith(PLACEHOLDER_PREFIX);
}

export function isHubSpotWaitlistConfigured(config = HUBSPOT_WAITLIST_FORM) {
  return !isPlaceholderValue(config.portalId) && !isPlaceholderValue(config.formId);
}
