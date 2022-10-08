import { Card } from "react-bootstrap"
import styled from "styled-components"

type bill = {
  id: string
  billNumber
  title: string
  approval: string
}
//props:bills, callback, bill_id
export const PriorityBillsCard = (props: { bills: bill[] }) => {
  const normal = {
    color: "white",
    backgroundColor: "navy",
    borderTop: "solid black 2px",
    borderRadius: "0px",
    width: "600px",
    padding: "0px 0px 5px 0px",
    margin: "0px"
  }
  const header = {
    color: "white",
    backgroundColor: "navy",
    borderRadius: "15px 15px 0px 0px",
    width: "600px",
    padding: "0px 0px 5px 0px",
    margin: "0px"
  }
  const tail = {
    borderRadius: "0px 0px 15px 15px"
  }
  const selected = {
    color: "black",
    backgroundColor: "white"
  }
  const handleClick = () => console.log("click")

  return (
    <>
      <Card style={header}>
        <Card.Body>
          <Card.Title>header</Card.Title>
        </Card.Body>
      </Card>
      {props.bills.map((bill, index) => {
        const style = { ...normal }
        if (index === props.bills.length - 1) {
          style.borderRadius = tail.borderRadius
        }
        return (
          <Card style={style} onClick={handleClick}>
            <Card.Body>
              <Card.Title>
                {bill.billNumber} {bill.approval}
              </Card.Title>
              <Card.Text>{bill.title}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}
