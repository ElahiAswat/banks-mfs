import { Bank, Mfs } from "./types";

export function formatBank(row: any, requestUrl: string): Bank {
  const origin = new URL(requestUrl).origin;
  
  let services = row.services;
  if (typeof services === "string") {
    try {
      services = JSON.parse(services);
    } catch {
      // keep as string if parse fails
    }
  }

  let service_hours = row.service_hours;
  if (typeof service_hours === "string") {
    try {
      service_hours = JSON.parse(service_hours);
    } catch {
      // keep as string if parse fails
    }
  }

  return {
    ...row,
    services,
    service_hours,
    logo_url: `${origin}/logos/banks/${row.slug}.webp`,
    logo_webp: `${origin}/logos/banks/${row.slug}.webp`,
    logo_png: `${origin}/logos/banks/${row.slug}.png`,
  };
}

export function formatMfs(row: any, requestUrl: string): Mfs {
  const origin = new URL(requestUrl).origin;
  return {
    ...row,
    logo_url: `${origin}/logos/mfs/${row.slug}.webp`,
    logo_webp: `${origin}/logos/mfs/${row.slug}.webp`,
    logo_png: `${origin}/logos/mfs/${row.slug}.png`,
  };
}
