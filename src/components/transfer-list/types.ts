type ItemsType = Array<
  Record<'id', number> &
    Record<'name', string> &
    Partial<Record<'checked', boolean | undefined>>
>;

type ItemType = ItemsType[number];

type TransferListProps = {
  items: ItemsType;
  leftLabel?: string;
  rightLabel?: string;
  onChange: (items: ItemsType) => void;
};
