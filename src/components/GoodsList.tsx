import React from 'react';

type Props = {
  isReversed: boolean;
  sortBy: string,
  goods: string[];
  minLength: number;
};

export const GoodsList: React.FC<Props> = ({
  isReversed,
  sortBy,
  goods,
  minLength,
}) => {
  const visibleGoods = goods.filter(
    good => good.length >= minLength,
  );

  switch (sortBy) {
    case 'alphabet':
      visibleGoods.sort();
      break;

    case 'length':
      visibleGoods.sort((a, b) => {
        const firstLength = a.length;
        const secondLength = b.length;

        return firstLength - secondLength;
      });
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <ul>
      {visibleGoods.map((good) => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};