/// <reference types="vite-plugin-svgr/client" />
import DoubleArrowLeftIcon from '../../assets/double-arrow-left.svg?react';
import DoubleArrowRightIcon from '../../assets/double-arrow-right.svg?react';
import ArrowRightIcon from '../../assets/arrow-left.svg?react';
import ArrowLeftIcon from '../../assets/arrow-right.svg?react';

import { IconTypeProps } from './types';

const Icons = {
  doubleArrowLeftIcon: <DoubleArrowLeftIcon />,
  doubleArrowRightIcon: <DoubleArrowRightIcon />,
  arrowRightIcon: <ArrowRightIcon />,
  arrowLeftIcon: <ArrowLeftIcon />,
};

const Icon = ({ name }: IconTypeProps<keyof typeof Icons>) => {
  return Icons[name];
};

export default Icon;
