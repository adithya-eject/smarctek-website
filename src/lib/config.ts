// Central site configuration. Business facts come ONLY from the supplied letterhead and brief.

export const SITE = {
  name: "SMARCTEK LLC",
  shortName: "Smarctek",
  url: (process.env.SITE_URL ?? "https://www.smarctekllc.com").replace(/\/$/, ""),
  tagline: "Engineering Solutions. Connecting Global Opportunities.",
  email: { info: "info@smarctekllc.com", contact: "chakri@smarctekllc.com" },
  phone: "+1 (617) 380-9644",
  phoneHref: "+16173809644",
  address: {
    street: "2389 Main Street",
    city: "Glastonbury",
    region: "Connecticut",
    regionCode: "CT",
    postalCode: "06033",
    country: "USA",
  },
  locale: "en_US",
  /** Cloudflare Turnstile site key (optional). Leave empty to disable the widget. */
  turnstileSiteKey: process.env.TURNSTILE_SITE_KEY ?? "",
  lastUpdated: "25 November 2025",
} as const;

/**
 * Image provenance. The equipment and facility photographs were supplied inside a TGG Group
 * proforma. They are NOT Smarctek assets. Flip `permissionConfirmed` to true only after
 * written permission has been obtained; the build prints a warning while it is false.
 */
export const IMAGE_SOURCE = {
  owner: "TGG Group",
  credit: "Image: TGG Group",
  permissionConfirmed: false,
} as const;

/** When false (default) specifications flagged `review` are withheld from public pages. */
export const PUBLISH_UNREVIEWED_SPECS = process.env.PUBLISH_UNREVIEWED_SPECS === "true";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us/" },
  { label: "Our solutions", href: "/solutions/" },
  { label: "Machinery", href: "/products/" },
  { label: "Our approach", href: "/our-approach/" },
  { label: "Gallery", href: "/gallery/" },
] as const;

/** Pages that stay in the site and footer but are not in the primary navigation. */
export const NAV_MORE = [
  { label: "Projects", href: "/projects/" },
  { label: "Global business", href: "/global-business/" },
  { label: "Contact", href: "/contact/" },
  { label: "Request a quote", href: "/request-a-quote/" },
] as const;

export const FOOTER_LINE = "Engineering possibilities. Powering industries.";

export const SPEC_DISCLAIMER =
  "Equipment configurations and specifications shown are drawn from reference supplier documentation and remain subject to technical confirmation before any quotation or order. Images are representative.";
