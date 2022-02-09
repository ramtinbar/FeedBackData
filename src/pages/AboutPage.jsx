import {FaHome} from "react-icons/fa"
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
  <Card>
      <div className="about">
          <p>سحر جان بابت اینکه من خارج از تمرین شما کاری رو شروع کردم عذر خواهی میکنم . صرفا برای یادگیری بیشتر احتیاج بود که بتونم چیزی رو از صفر بزنم و کمی با محیط و کدها آشنا بشم...اگه خواستی برگردی صفحه اول دکمه پایین کمکت میکنه</p>
          <Link to='/'>
    <FaHome size={30} style={{color:"black"}}></FaHome>
      </Link>
      </div>
  </Card>
  )
}

export default AboutPage;
