import Sidebar from "./components/sidebar/Sidebar";
import Wrapper from "./components/wrapper/Wrapper";

//https://coreui.io/product/free-react-admin-template/
function App() {
  const username = 'Nam lh'

  return (
    <div className="App">
      <Sidebar />
      <Wrapper 
        name={username} 
        age={25} 
        isMale/>
      
    </div>
  );
}
export default App;
