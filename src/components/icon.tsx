/// <reference types="vite-plugin-svgr/client" />
import DoubleArrowLeftIcon from '../assets/icons/double-arrow-left.svg?react';
import DoubleArrowRightIcon from '../assets/icons/double-arrow-right.svg?react';
import ArrowRightIcon from '../assets/icons/arrow-left.svg?react';
import ArrowLeftIcon from '../assets/icons/arrow-right.svg?react';
import AscendingIcon from '../assets/icons/ascending.svg?react';
import DescendingIcon from '../assets/icons/descending.svg?react';

export type IconTypeProps<T> = {
  name: T;
};

const Icons = {
  doubleArrowLeft: <DoubleArrowLeftIcon />,
  doubleArrowRight: <DoubleArrowRightIcon />,
  arrowRight: <ArrowRightIcon />,
  arrowLeft: <ArrowLeftIcon />,
  ascending: <AscendingIcon />,
  descending: <DescendingIcon />,
};

const Icon = ({ name }: IconTypeProps<keyof typeof Icons>) => {
  return Icons[name];
};

export default Icon;
