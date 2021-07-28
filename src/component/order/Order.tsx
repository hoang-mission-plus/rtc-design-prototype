import React, { useEffect } from "react";
import {
  Button,
  Classes,
  FormGroup,
  Icon,
  Tab,
  Tabs,
} from "rtc-design-prototype";
import TableOrder from "./TableOder";
import NewOrder from "./NewOrder";
import SelectComponent from "./Select";
import { data } from "../../data/dataTableOrders";
import { useState } from "react";
export interface IpropsOrder {
  key: number;
  order: number;
  date: string;
  contract: string;
  tenor: string;
  book: string;
  bidOffer: string;
  price: string;
  qty: string;
  vWrap: string;
  status: string;
  charterer: string;
  description: string;
}
const Price = (props: any) => {
  const valueContacts = [
    { value: 1, title: "Cape5TC" },
    { value: 2, title: "C5" },
    { value: 3, title: "PMX 4TC" },
    { value: 4, title: "PMX 5TC" },
    { value: 5, title: "Supra 10TC" },
    { value: 6, title: "VLSFO" },
    { value: 7, title: "Rott" },
  ];
  const [dataTable, setDataTable] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    try {
      const dataT: any = [];
      data.filter((x: any) => dataT.push(x));
      setDataTable(dataT);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleClickSearch = () => {
    if (title) {
      const dataT: any = [];
      data.filter((x: any) => dataT.push(x));
      const data1 = dataT.filter((x: any) => x.contract === title);
      return setDataTable(data1);
    }
  };

  const handleChange = (e: any) => {
    console.log(e);
    if (e) {
      setTitle(e.title);
    }
  };
  const OrderPanel: React.FunctionComponent = () => (
    <div>
      <div className="order_content">
        <ul className="order_left">
          <li>
            <h1>Orders</h1>
          </li>
          <li>
            <NewOrder />
          </li>
        </ul>
        <ul className="order_right">
          <li>
            <FormGroup>
              <SelectComponent
                items={valueContacts}
                onItemSelect={handleChange}
              />
            </FormGroup>
          </li>
          <li>
            <FormGroup>
              <SelectComponent items={valueContacts} />
            </FormGroup>
          </li>
          <li>
            <Button text="Apply" outlined onClick={handleClickSearch} />
          </li>
          <li>
            <Icon icon="download" intent="primary" />
          </li>
        </ul>
      </div>
      <div>
        <TableOrder dataSource={dataTable} />
      </div>
    </div>
  );
  const TradesPanel: React.FunctionComponent = () => (
    <div>
      <h3>Example panel: Angular</h3>
      <p className={Classes.RUNNING_TEXT}>
        HTML is great for declaring static documents, but it falters when we try
        to use it for declaring dynamic views in web-applications. AngularJS
        lets you extend HTML vocabulary for your application. The resulting
        environment is extraordinarily expressive, readable, and quick to
        develop.
      </p>
    </div>
  );
  return (
    <div>
      <Tabs id="TabsExample" key={"vertical"}>
        <Tab id="1" title="All orders" panel={<OrderPanel />} />
        <Tab id="2" title="All trades" panel={<TradesPanel />} />
      </Tabs>
    </div>
  );
};

export default Price;
