import React from "react";
import { MenuItem, Select } from "rtc-design-prototype";

const SelectComponent = (props: any) => {
  const renderFilm: any = (
    film: any,
    { handleClick, modifiers }: { handleClick: any; modifiers: any; query: any }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = film.title;
    return <MenuItem key={film.rank} onClick={handleClick} text={text} />;
  };

  const renderInputValue = (film: any) => film.title;

  return (
    <Select
      key="select"
      itemRenderer={renderFilm}
      items={props.items}
      popoverProps={{
        minimal: true,
      }}
      inputValueRenderer={renderInputValue}
      onItemSelect={props.onItemSelectItem}
    />
  );
};

export default SelectComponent;
