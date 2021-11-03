export const useRentalRating = (rating: number) => {
  const starsFilled = Math.ceil(rating);
  const starsRemaining = 5 - starsFilled;

  const arrayStarsFilled = Array(starsFilled)
    .fill(0)
    .map((_, i) => i + 1);

  const arrayRemainingFilled = Array(starsRemaining)
    .fill(0)
    .map((_, i) => i + 1);

  return { arrayStarsFilled, arrayRemainingFilled };
};
