import {Navigate, useNavigate, useParams} from 'react-router-dom'

function Post() {
    const params = useParams()
    // const status = 202
    // if(status === 404){
    //     return <Navigate to ='/notfound' />
    // }
    const navigate = useNavigate();
    const HnaldeClick = () => {
        navigate('/about')
    }

  return <div>
      <h1> post :{params.id}</h1>
      <p> Name : {params.name}</p>
      <button onClick={HnaldeClick}>Click</button>
  </div>;
}

export default Post;
