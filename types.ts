export interface CreatorMetrics {
  totalReach: string;
  platforms: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    engagementRate?: string;
  };
  audience: {
    female: number;
    male: number;
    ageGroups: { label: string; value: number }[];
  };
  topTraffic: { country: string; value: string }[];
}

export interface Creator {
  name: string;
  handle?: string;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    tiktok?: string;
  };
  metrics?: CreatorMetrics;
}
