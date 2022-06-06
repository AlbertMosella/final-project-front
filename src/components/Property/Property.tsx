import { IProperty } from "../../types/types";
import Button from "../Button/Button";
import PropertyContainer from "./PropertySyles";

interface Props {
  property: IProperty;
}

const Property = (props: Props): JSX.Element => {
  const token = localStorage.getItem("token");

  return (
    <PropertyContainer>
      <img src={props.property.image} alt="una puta casa" />
      <div className="property-title">
        <h4>{props.property.name}</h4>
        {token ? <Button id={props.property.id} /> : ""}

        <span>450.000€</span>
      </div>
      <ul className="property-icons">
        <li>
          <span>3</span>
          <img src="images/dormitorio.png" alt="" />
        </li>
        <li>
          <span>2</span>
          <img src="images/baño.png" alt="" />
        </li>
        <li>
          <span>150</span>
          <img src="images/superficie.png" alt="" />
        </li>
      </ul>
    </PropertyContainer>
  );
};

export default Property;
