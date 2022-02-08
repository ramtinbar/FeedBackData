import {FaTasks} from "react-icons/fa"
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
  <Card>
      <div className="about">
          <p>lets go</p>
          <Link to='/'>
    <FaTasks size={30} style={{color:"black"}}></FaTasks>
      </Link>
      </div>
  </Card>
  )
}

export default AboutPage;
