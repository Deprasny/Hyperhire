'use client';

import { memo } from 'react';

interface InfoColumnProps {
  label: string;
  value: string;
  additionalValue?: string;
}

const InfoColumn = memo(({ label, value, additionalValue }: InfoColumnProps): JSX.Element => {
  return (
    <div className="space-y-2">
      <div className="text-text-secondary">{label}</div>
      <div className="text-text-tertiary">{value}</div>
      {additionalValue && <div className="text-text-tertiary mt-4">{additionalValue}</div>}
    </div>
  );
});

InfoColumn.displayName = 'InfoColumn';

export default InfoColumn;
