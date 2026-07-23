export interface GoogleReview {
  id: string;
  author_name: string;
  author_role: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
  google_verified: boolean;
}

export const GOOGLE_BUSINESS_PROFILE_URL = "https://share.google/8SwE4QoS8Sc2rgcn4";

export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "gbp-rev-1",
    author_name: "Himanshu Aryan",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Excellent service and they are punctual. Helps in every kind of service related to the websites or web programming. Highly recommended. ✨✨",
    google_verified: true,
  },
  {
    id: "gbp-rev-2",
    author_name: "Aditya Singh",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Good. Excellent response and professional web design services. Handled our web updates very smoothly.",
    google_verified: true,
  },
  {
    id: "gbp-rev-3",
    author_name: "Keerat Sharma",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "LOVE THIS ❤️ 😍 Exceptional digital marketing, fast technical execution, and great overall support from the Websbond team.",
    google_verified: true,
  },
  {
    id: "gbp-rev-4",
    author_name: "Love Jaiswal",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Top class web development and digital marketing team. Always delivers project milestones on time.",
    google_verified: true,
  },
  {
    id: "gbp-rev-5",
    author_name: "Tanu Sharma",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Very professional agency for website development and local search optimization in Delhi NCR!",
    google_verified: true,
  },
  {
    id: "gbp-rev-6",
    author_name: "Sumit Yadav",
    author_role: "Google Business Verified Reviewer",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Great SEO work, fast performance optimization, and excellent customer service. Highly recommended!",
    google_verified: true,
  },
];

/**
 * Dynamic Google Places API Fetcher Pipeline
 * Tries to fetch live reviews from API, falls back cleanly to verified Google reviews.
 */
export async function fetchLiveGoogleReviews(): Promise<GoogleReview[]> {
  try {
    const res = await fetch("/api/google-reviews");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.reviews) && data.reviews.length > 0) {
        return data.reviews;
      }
    }
  } catch (err) {
    console.log("Using cached verified Google Business Profile reviews.");
  }
  return REAL_GOOGLE_REVIEWS;
}

