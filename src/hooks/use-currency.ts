import { useState, useEffect } from "react";

type Currency = {
  gold: number;
  silver: number;
};

export function useCurrency(cr: number) {
  const [currency, setCurrency] = useState<Currency>({ gold: 0, silver: 0 });

  useEffect(() => {
    const convertChallengeRatingToCurrency = (cr: number): Currency => {
      const goldWorth = cr * 300 ? cr * 300 : 0.5;
      const gold = Math.floor(goldWorth);
      const silverChange = (goldWorth % 1) * 100;
      const silver = Math.floor(silverChange);

      return { gold, silver };
    };

    setCurrency(convertChallengeRatingToCurrency(cr));
  }, [cr]);

  return currency;
}
