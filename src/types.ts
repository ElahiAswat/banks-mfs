export interface Env {
  DB: D1Database;
  BUCKET: R2Bucket;
}

export interface Bank {
  slug: string;
  name: string;
  registered_name?: string | null;
  legal_status?: string | null;
  established?: string | null;
  type?: string | null;
  category?: string | null;
  origin?: string | null;
  services?: string[] | string | null;
  address?: string | null;
  telephone?: string | null;
  fax?: string | null;
  call_center?: string | null;
  email?: string | null;
  website?: string | null;
  swift_code?: string | null;
  bank_code?: string | null;
  stock_code?: string | null;
  service_hours?: Record<string, string> | string | null;
  rating?: number | null;
  rating_votes?: number | null;
  description?: string | null;
  url?: string | null;
  logo_file?: string | null;
  logo_url?: string;
  logo_webp?: string;
  logo_png?: string;
}

export interface Mfs {
  slug: string;
  name: string;
  registered_name?: string | null;
  type: string;
  parent?: string | null;
  established?: string | null;
  website?: string | null;
  call_center?: string | null;
  email?: string | null;
  logo_file?: string | null;
  logo_url?: string;
  logo_webp?: string;
  logo_png?: string;
  description?: string | null;
}
