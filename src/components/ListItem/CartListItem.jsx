import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CartListItem({ data = {}, quantityChange = () => {},handleDelete = () => {} }) {
  return (
    <Card className="d-flex flex-row mb-2">
      <img
        style={{
          width: 150,
        }}
        alt={data.name || "NO NAME"}
        src={data.image || "https://via.placeholder.com/150"}
      />
      <CardBody>
        <CardTitle tag="h5">{data.title || "NO TITLE"}</CardTitle>
        <CardText className="mb-3">
          Price: {data.price ? `${data.price} INR` : "0 INR"}
        </CardText>
        <div className="d-flex gap-2 justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <Button
            outline
            color="success"
            onClick={(e) => quantityChange(e, "dec", data.id)}
          >
            -
          </Button>
          <h3>{data.quantity || 0}</h3>
          <Button
            color="success"
            onClick={(e) => quantityChange(e, "inc", data.id)}
          >
            +
          </Button>
        </div>
        <div>
        <Button
            color="success"
            onClick={(e) => handleDelete(e, data.id)}
          >
            Remove from cart
          </Button>
        </div>
        </div>
      </CardBody>
    </Card>
  );
}

CartListItem.propTypes = {
  data: Object,
  addToCart: Function,
  disabled: Boolean,
  quantityChange: Function,
  handleDelete: Function,
};
