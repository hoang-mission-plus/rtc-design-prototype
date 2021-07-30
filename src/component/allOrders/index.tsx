import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AnchorButton,
  Button,
  Classes,
  DATA,
  Dialog,
  FormGroup,
  Icon,
  InputGroup,
  Intent,
  ISelect,
  MenuItem,
  NumericInput,
  Radio,
  RadioGroup,
  Select,
  Table,
  Card,
} from "rtc-design-prototype";
import { dataQuizz } from "./data";

const AllOrdersComponent = (args: any, propsUnit: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(0);

  const { valueUnit, ...res } = propsUnit;
  const [inputValue, setValueUnit] = useState(value);
  const handleChange = () => setValueUnit(inputValue);
  const unit = <span style={{ color: "#706f6f" }}>dpm</span>;

  const [valueNumeric, setValueNumeric] = useState(args.value);
  const handleValueChange = (_v: number, value: string) =>
    setValueNumeric(value);
  const props: any = {
    disabled: args.disabled || false,
    fill: args.fill || false,
    large: args.large || false,
    max: args.max || 10,
    min: args.min || 0,

    value: valueNumeric,
  };
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  const handleAnswerOptionClick = (isCorrect: any) => {
    setValue(isCorrect);
    dataQuizz[currentQuestion].answerOptions.forEach((x) => {
      if (x.isCorrect === true && isCorrect === x.value) {
        setScore(score + 1);
      }
    });
  };
  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };
  const myStyle = {
    container: {
      display: "flex",
    },
    dialog: {
      minWidth: "400px",
    },
  };
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

  const renderInputValue = (film: ISelect) => film.title;
  const arenaFilterItemSelected = (it: any) => {
    console.log(it); // not a value but a Proxy with Target, Handler and IsRevoked members
  };
  const data: any = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      title1: `Edward King ${i}`,
      title2: `Edward King ${i}`,
      title3: i + 1,
      title4: `London, Park Lane no. ${i}`,
      title5: 32,
    });
  }

  const renderItem = (
    _page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: any
  ) => {
    if (type === "prev") {
      return <Button icon="arrow-left" intent="primary" />;
    } else if (type === "next") {
      return <Button icon="arrow-right" intent="primary" />;
    } else {
      return originalElement;
    }
  };

  const getMyHTML = (text: string) => <a>{text}</a>;
  const columns: any = [
    {
      title: "Order",
      dataIndex: "title1",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.title1.length - b.title1.length,
    },
    {
      title: "Date",
      dataIndex: "title2",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.title2.length - b.title2.length,
    },
    {
      title: "Contract",
      dataIndex: "title3",
    },
    {
      title: "Tenor",
      dataIndex: "title4",
    },
    {
      title: "Book",
      dataIndex: "title5",
    },
    {
      title: "Bid/Offer",
      dataIndex: "title1",
    },
    {
      title: "Price",
      dataIndex: "title2",
    },
    {
      title: "Qty",
      dataIndex: "title3",
    },
    {
      title: "VWAP",
      dataIndex: "title4",
    },
    {
      title: "Status",
      dataIndex: "title5",
    },
    {
      title: "Charterer",
      dataIndex: "title1",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Fragment>
          <Icon icon="eye-open" />
          <Icon icon="duplicate" />
          <Icon icon="add" />
          <Icon icon="cross" />
        </Fragment>
      ),
    },
  ];
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div style={{ display: "flex" }}>
            <h1 style={{ fontWeight: "bold" }}>
              Orders{" "}
              <Button
                intent="primary"
                text="New order"
                className="btn-ml-15 btn-mb-5"
                onClick={() => setisOpenDialog(true)}
              />
              <div style={myStyle.container}>
                <Dialog
                  style={myStyle.dialog}
                  onClose={() => setisOpenDialog(false)}
                  isOpen={isOpenDialog}
                  title="New order"
                >
                  <div className={Classes.DIALOG_BODY}>
                    <p style={{ color: "#706F6F", fontSize: "12px" }}>
                      Contract
                    </p>
                    <div
                      className="answer-section"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {dataQuizz[currentQuestion].answerOptions.map(
                        (answerOption: any) => (
                          <RadioGroup
                            key={answerOption.value}
                            onChange={() =>
                              handleAnswerOptionClick(answerOption.value)
                            }
                            selectedValue={value}
                          >
                            <Radio
                              value={answerOption.value}
                              className="choose_answer"
                            >
                              <span
                                className="title_answer"
                                style={{
                                  marginRight: "24px",
                                  color: "#3389DB",
                                  fontSize: "12px",
                                }}
                              >
                                {answerOption.title}
                              </span>
                              <span className="text_answer"></span>
                            </Radio>
                          </RadioGroup>
                        )
                      )}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <FormGroup style={{ width: "200px" }} label={"Tenor"}>
                        <Select
                          key="select"
                          itemRenderer={renderFilm}
                          items={DATA}
                          popoverProps={{
                            minimal: true,
                          }}
                          inputValueRenderer={renderInputValue}
                          onItemSelect={arenaFilterItemSelected}
                        />
                      </FormGroup>
                      <FormGroup
                        style={{ width: "200px", marginLeft: "30px" }}
                        label={"Book"}
                      >
                        <Select
                          key="select"
                          itemRenderer={renderFilm}
                          items={DATA}
                          popoverProps={{
                            minimal: true,
                          }}
                          inputValueRenderer={renderInputValue}
                          onItemSelect={arenaFilterItemSelected}
                        />
                      </FormGroup>
                      <FormGroup style={{ width: "200px" }} label={"Order"}>
                        <Select
                          key="select"
                          itemRenderer={renderFilm}
                          items={DATA}
                          popoverProps={{
                            minimal: true,
                          }}
                          inputValueRenderer={renderInputValue}
                          onItemSelect={arenaFilterItemSelected}
                        />
                      </FormGroup>
                      <FormGroup
                        style={{ width: "200px", marginLeft: "30px" }}
                        label={"Price"}
                      >
                        <div className="bp3-customise-numeric">
                          <NumericInput
                            {...props}
                            placeholder="Enter a number"
                            onValueChange={handleValueChange}
                          />
                        </div>
                      </FormGroup>
                      <FormGroup style={{ width: "200px" }} label={"Bid/Offer"}>
                        <div style={{ display: "flex" }}>
                          <RadioGroup
                            inline
                            onChange={(e) => handleRadioChange(e)}
                            selectedValue={value}
                          >
                            <Radio
                              value="mot"
                              className="choose_answer"
                              label="Bid"
                              style={{ color: "#3389DB", fontSize: "12px" }}
                            />
                            <Radio
                              value="hai"
                              className="choose_answer"
                              label="Offer"
                              style={{ color: "#3389DB", fontSize: "12px" }}
                            />
                          </RadioGroup>
                        </div>
                      </FormGroup>
                      <FormGroup
                        style={{ width: "200px", marginLeft: "30px" }}
                        label={"Quantity"}
                      >
                        <div className="bp3-customise">
                          <InputGroup
                            {...res}
                            rightElement={unit}
                            onChange={handleChange}
                            placeholder="Enter amount"
                          />
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                  <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                      <Button
                        text="Cancel"
                        onClick={() => setisOpenDialog(false)}
                      />
                      <AnchorButton text="Add order" intent={Intent.PRIMARY} />
                    </div>
                  </div>
                </Dialog>
              </div>
            </h1>
            <div style={{ display: "flex", marginLeft: "620px" }}>
              <div style={{ width: "170px", marginRight: "12px" }}>
                <Select
                  key="select"
                  itemRenderer={renderFilm}
                  items={DATA}
                  popoverProps={{
                    minimal: true,
                  }}
                  inputValueRenderer={renderInputValue}
                  onItemSelect={arenaFilterItemSelected}
                />
              </div>
              <div style={{ width: "170px" }}>
                <Select
                  key="select"
                  itemRenderer={renderFilm}
                  items={DATA}
                  popoverProps={{
                    minimal: true,
                  }}
                  inputValueRenderer={renderInputValue}
                  onItemSelect={arenaFilterItemSelected}
                />
              </div>
              <div>
                <Button
                  intent="none"
                  text="Apply"
                  className="btn-ml-15 btn-mb btn-bd mb-15"
                />
                <Icon
                  icon="download"
                  intent="primary"
                  className="icon-ml svg"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Card elevation={3}>
            <Table
              dataSource={data}
              columns={columns}
              pagination={{
                defaultCurrent: 1,
                total: 100,
                pageSize: 4,
                showSizeChanger: false,
                itemRender: renderItem,
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AllOrdersComponent;
