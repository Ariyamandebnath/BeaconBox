import { Background } from '@/app/components/ui/theme/background';
import { Border } from '@/app/components/ui/theme/border';
import { Color } from '@/app/components/ui/theme/colors';
import { Font } from '@/app/components/ui/theme/font';
import { Icon } from '@/app/components/ui/theme/icon';
import { Text } from '@/app/components/ui/theme/text';

export const Theme = {
  color: Color,
  border: Border,
  background: Background,
  text: Text,
  spacingMultiplicator: 4,
  icon: Icon,
  font: Font,
  spacing: (...args: number[]) =>
    args.map((multiplicator) => `${multiplicator * 4}px`).join(' '),
};
