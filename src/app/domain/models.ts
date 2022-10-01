export interface CdnHost {
  address: string;
  description: string;
}

export interface Category {
  slug?: string;
  canonical_name: string;
}

export interface Image {
  id: string;
  directory: string;
  filename: string;
}

export interface ImageActress {
  image: Image;
}

export interface Actress {
  uuid: string;
  name: string;
  slug: string;
  images: ImageActress[];
  created_at: string;
}

export interface ImageVrVideo {
  image: Image;
}

export interface HardDrive {
  description: string;
  code: string;
}

export interface VrVideo {
  uuid: string;
  viewed_times: number;
  favourite: boolean;
  description: string|null;
  reported: boolean;
  filesize: number;
  width: number;
  height: number;
  rating: number;
  duration_seconds: number;
  actresses: Actress[];
  categories: Category[];
  hosted_on: CdnHost;
  backup_on: HardDrive|null;
  created_at: string;
  images: ImageVrVideo[];
}
