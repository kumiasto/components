import { useState } from 'react';
import Checkbox from './checkbox';
import Icon from './icon';

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

function TransferList({
  leftLabel,
  rightLabel,
  items,
  onChange,
}: TransferListProps) {
  const [leftColumnsItems, setLeftColumnsItems] = useState(items);
  const [rightColumnsItems, setRightColumnsItems] = useState<ItemsType | []>(
    []
  );

  const updateItem = (
    item: ItemType,
    { checked, id }: { checked: boolean; id: string }
  ) => {
    return {
      ...item,
      checked: item.id === Number(id) ? checked : item.checked,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;

    setLeftColumnsItems(
      leftColumnsItems.map((item) => updateItem(item, { checked, id }))
    );
    setRightColumnsItems(
      rightColumnsItems.map((item) => updateItem(item, { checked, id }))
    );
  };

  const getVluesByID = (id: number): ItemType => {
    const allItems = [...leftColumnsItems, ...rightColumnsItems];
    return allItems.find((item) => item.id === id) as ItemType;
  };

  const setCheckedValues = (arr: ItemsType) =>
    arr?.filter((item) => getVluesByID(item.id)?.checked);

  const setUncheckedValues = (arr: ItemsType) =>
    arr?.filter((item) => !getVluesByID(item.id)?.checked);

  const checkIfAnyChecked = (arr: ItemsType) =>
    arr?.some((item) => getVluesByID(item.id)?.checked);

  const handleTransferToRightColumn = () => {
    const items = [...rightColumnsItems, ...leftColumnsItems];
    setRightColumnsItems(items.map((item) => ({ ...item, checked: true })));
    onChange(items);
    setLeftColumnsItems([]);
  };

  const handleTransferToLeftColumn = () => {
    const items = [...leftColumnsItems, ...rightColumnsItems];
    setLeftColumnsItems(items.map((item) => ({ ...item, checked: false })));
    setRightColumnsItems([]);
    onChange([]);
  };

  const handlePartialToRightColumn = () => {
    const checkedValue = setCheckedValues(leftColumnsItems);

    const uncheckedValue = setUncheckedValues(leftColumnsItems);
    setLeftColumnsItems([...uncheckedValue]);
    setRightColumnsItems([...rightColumnsItems, ...checkedValue]);
    onChange([...rightColumnsItems, ...checkedValue]);
  };

  const handlePartialToLeftColumn = () => {
    const checkedValue = setCheckedValues(rightColumnsItems);

    const uncheckedValue = setUncheckedValues(rightColumnsItems);
    setLeftColumnsItems([...leftColumnsItems, ...checkedValue]);
    setRightColumnsItems([...uncheckedValue]);
    onChange([...uncheckedValue]);
  };

  const anyCheckedInRightColumn = checkIfAnyChecked(rightColumnsItems);
  const anyCheckedInLeftColumn = checkIfAnyChecked(leftColumnsItems);

  return (
    <div className='flex h-[300px] min-w-fit m-6'>
      <div className='flex flex-col rounded-sm h-full  min-w-[250px] shadow-lg overflow-y-auto '>
        <label className='p-3'>{leftLabel}</label>
        <div className='flex flex-col ml-auto mr-auto gap-y-3 mb-2'>
          {leftColumnsItems?.map((item) => {
            const { id, name, checked } = getVluesByID(item.id);
            return (
              <Checkbox
                name={name}
                label={name}
                checked={Boolean(checked)}
                onChange={handleChange}
                id={id}
                key={id}
                className='flex items-center gap-3'
              />
            );
          })}
        </div>
      </div>
      <div className='flex flex-col justify-center px-2'>
        <button
          onClick={handleTransferToRightColumn}
          disabled={!leftColumnsItems?.length}
          className={leftColumnsItems?.length ? '' : 'opacity-10'}
        >
          <Icon name='doubleArrowRight' />
        </button>
        <button
          onClick={handlePartialToRightColumn}
          disabled={!anyCheckedInLeftColumn}
          className={anyCheckedInLeftColumn ? '' : 'opacity-10'}
        >
          <Icon name='arrowLeft' />
        </button>
        <button
          onClick={handlePartialToLeftColumn}
          disabled={!anyCheckedInRightColumn}
          className={anyCheckedInRightColumn ? '' : 'opacity-10'}
        >
          <Icon name='arrowRight' />
        </button>
        <button
          onClick={handleTransferToLeftColumn}
          disabled={!rightColumnsItems?.length}
          className={rightColumnsItems?.length ? '' : 'opacity-10'}
        >
          <Icon name='doubleArrowLeft' />
        </button>
      </div>
      <div className='flex flex-col rounded-sm h-full min-w-[250px] shadow-lg overflow-y-auto'>
        <label className='p-3'>{rightLabel}</label>
        <div className='flex flex-col ml-auto mr-auto gap-y-3 mb-2 h-full'>
          {rightColumnsItems.map((item) => {
            const { id, name, checked } = getVluesByID(item.id);
            return (
              <Checkbox
                name={name}
                label={name}
                checked={Boolean(checked)}
                onChange={handleChange}
                id={id}
                key={id}
                className='flex items-center gap-3'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TransferList;
