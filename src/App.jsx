import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const App = () => {
  const [taskDetail, setTaskDetail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [saveTaskDetail, setSaveTaskDetail] = useState([]);

  console.log("chack", saveTaskDetail);

  const handleSubmit = (e) => {
    e.preventDefault();

    // one object first create
    const newDetail = {
      taskDetail: taskDetail,
      date: date,
      time: time,
    };

    // one veriable save previas data and curent data
    const updateProduct = [...saveTaskDetail, newDetail];
    setSaveTaskDetail(updateProduct);
    localStorage.setItem("interview_03", JSON.stringify(updateProduct));

    // Clere Input Field
    setTaskDetail("");
    setDate("");
    setTime("");
  };

  useEffect(() => {
    const GetUserDetail =
      JSON.parse(localStorage.getItem("interview_03")) || [];
    setSaveTaskDetail(GetUserDetail);
  }, []);
  return (
    <div className="p-3">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Task Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Detail"
              value={taskDetail}
              onChange={(e) => setTaskDetail(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="2">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Select Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Select Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Select Date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      <div className="py-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Detail</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {saveTaskDetail.map((item,index) => (
              <tr className="" key={index}>
                <td className="">{index += 1}</td>
                <td className="uppercase">{item.taskDetail}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default App;

