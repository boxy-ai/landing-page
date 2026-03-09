import type { HubSpotRegion } from "./app/hubspotWaitlist";

interface HubSpotFormsV4Api {
  getFormFromEvent?: (event: Event) => unknown;
}

declare global {
  interface Window {
    __BOXY_PRERENDER__?: boolean;
    HubSpotFormsV4?: HubSpotFormsV4Api;
  }
}

export {};
