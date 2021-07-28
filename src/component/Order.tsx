import React, { useState } from "react";
import { Tab, Tabs } from "rtc-design-prototype";
import AllOrdersComponent from "./allOrders";
import AllTradesComponent from "./allTrades";

const Order = () => {
  const [stateStart, setStateStart] = useState(false);
  const handleStart = () => setStateStart(!stateStart);
  const ReactPanel: React.FunctionComponent = () => (
    <div>
      <AllOrdersComponent />
    </div>
  );
  const AngularPanel: React.FunctionComponent = () => (
    <div>
      <AllTradesComponent />
    </div>
  );
  return (
    <div className="mt-20">
      <Tabs id="TabsExample" key={"vertical"} minimal>
        <Tab id="1" title="All Orders" panel={<ReactPanel />} />
        <Tab id="2" title="All Trades" panel={<AngularPanel />} />
      </Tabs>
    </div>
  );
};

export default Order;
