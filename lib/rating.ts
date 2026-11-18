import { ratingValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type RatingCountsType = {
  r2: number;
  r4: number;
  r6: number;
  r8: number;
  r10: number;
};

export type RatingResult = {
  average: number;
  average10: number;
  total: number;
  percentages: Record<keyof RatingCountsType, number>;
};

export function calculateRating(rating: RatingCountsType): RatingResult {
  const entries = [
    { score: 2, count: rating.r2 },
    { score: 4, count: rating.r4 },
    { score: 6, count: rating.r6 },
    { score: 8, count: rating.r8 },
    { score: 10, count: rating.r10 },
  ];

  const total = entries.reduce((sum, { count }) => sum + count, 0);
  const weightedSum = entries.reduce(
    (sum, { score, count }) => sum + score * count,
    0,
  );

  const average10 = total > 0 ? weightedSum / total : 0;
  const average = total > 0 ? average10 / 2 : 0;

  const percentages = entries.reduce(
    (acc, { score, count }) => {
      acc[`r${score}` as keyof RatingCountsType] =
        total > 0 ? (count / total) * 100 : 0;
      return acc;
    },
    {} as Record<keyof RatingCountsType, number>,
  );

  return {
    average: Number(average.toFixed(1)),
    average10: Number(average10.toFixed(1)),
    total,
    percentages,
  };
}
