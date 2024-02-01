import Balloon from "../../components/Balloon";
import Picket from "../../components/Picket";
import Dog from "../../components/Dog";
import Garden from "../../components/Garden";

export default function UserInputFormPage() {
    return(
  <>
  <div className='main-content'>
  <Balloon />
  <Dog />
  <Picket />
  </div>
  <footer>
  <Garden />
  </footer>
  </>
    );
  }