import React, { Fragment, useState } from "react";
import {
  AnchorButton,
  Button,
  Classes,
  Dialog,
  FormGroup,
  InputGroup,
  Intent,
  NumericInput,
  Radio,
  RadioGroup,
} from "rtc-design-prototype";
import SelectComponent from "./Select";
const NewOrder = () => {
  const [value, setValue] = useState("");
  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);
  const valueContacts = [
    { value: 1, title: "Cape5TC" },
    { value: 2, title: "C5" },
    { value: 3, title: "PMX 4TC" },
    { value: 4, title: "PMX 5TC" },
    { value: 5, title: "Supra 10TC" },
    { value: 6, title: "VLSFO" },
    { value: 7, title: "Rott" },
  ];
  return (
    <Fragment>
      <Button text="New order" intent="primary" onClick={handleOpen} />
      <Dialog
        onClose={handleClose}
        isOpen={isOpen}
        title="New Order"
        className="dialog_newOrder"
      >
        <div className={Classes.DIALOG_BODY}>
          <div className="dialog_body-top">
            <FormGroup label="Contact">
              <RadioGroup
                name="group"
                onChange={(e) => handleRadioChange(e)}
                selectedValue={value}
              >
                {valueContacts.map((x: any) => {
                  return (
                    <Radio key={x.value} label={x.title} value={x.title} />
                  );
                })}
              </RadioGroup>
            </FormGroup>
          </div>
          <div className="dialog_body-bottom">
            <div className="dialog_body-bottom_left">
              <FormGroup label="Tenorr">
                <SelectComponent items={["search"]} />
              </FormGroup>
              <FormGroup label="Order">
                <SelectComponent items={["search"]} />
              </FormGroup>
              <FormGroup label="Bid/Offer">
                <RadioGroup
                  inline
                  name="group"
                  onChange={(e) => handleRadioChange(e)}
                  selectedValue={value}
                >
                  <Radio label="Bid" value="one" />
                  <Radio label="Offer" value="two" />
                </RadioGroup>
              </FormGroup>
            </div>
            <div className="dialog_body-bottom_right">
              <FormGroup label="Book">
                <SelectComponent items={["search"]} />
              </FormGroup>
              <FormGroup label="Price">
                <NumericInput placeholder="Enter price" min={0} />
              </FormGroup>
              <FormGroup label="Quantity">
                <InputGroup
                  placeholder="Enter amount"
                  rightElement={<span>dpm</span>}
                />{" "}
              </FormGroup>
            </div>
          </div>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button text="Cancel" onClick={handleClose} />
            <AnchorButton
              type="submit"
              text="Add order"
              intent={Intent.PRIMARY}
            />
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default NewOrder;
