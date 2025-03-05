import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";


export default function ListItem({
  data = {},
  addToCart = () => {},
  disabled = false,
}) {
  return (
    <Card className="d-flex flex-row gap-4 mb-2">
      <img
        style={{
          width: 150,
          height:200,
          justifyContent:"center",
          alignItems:"center",
          display:"flex"
        }}
        alt={data.name || "NO NAME"}
        src={data.image || "https://via.placeholder.com/150"}
      />
      <CardBody>
        <CardTitle className="mb-3" tag="h5">{data.title || "NO TITLE"}</CardTitle>
        <CardText className="mb-2" tag="p" style={{fontSize:12,
        textTransform: "lowercase"
        }}>{data.description || "NO DESCRIPTION"}</CardText>
        <CardText className="mb-2">
         PRICE: {data.price ? `${data.price} INR` : "0 INR"}
        </CardText>
        <Button
          style={{ background: "#1e3932" }}
          onClick={(e) => addToCart(e, data)}
          disabled={disabled}
        >
          ADD TO CART
        </Button>
      </CardBody>
    </Card>
  );
}

ListItem.propTypes = {
  data: Object,
  addToCart: Function,
  disabled: Boolean,
};
