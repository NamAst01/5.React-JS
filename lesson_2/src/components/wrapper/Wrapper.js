import CustomInput from "../custominput/Custominput";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div className="Wrapper">
      <h1>Wrapper Component </h1>
      <h3>
        Welcome VTI Group: {props.name} {props.age}
      </h3>
      <form>
        <CustomInput type="text" placeholder="Email" />
        <CustomInput type="password" placeholder="password" />
      </form>
    </div>
  );
}

export default Wrapper;
// const Wrapper = () => {

// }
