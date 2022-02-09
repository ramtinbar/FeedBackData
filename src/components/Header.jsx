import PropTypes from 'prop-types';


function Header({text,bgcolor,textcolor}) {
    const headerstyle= {
        backgroundColor:bgcolor ,
         color:textcolor
    }

  return (
  <header style={headerstyle}>
      <div className="container">
      <h2>{text}</h2>
      </div>
  </header>
  )
}

Header.defaultProps = {
    text : 'نظرتو بهم بگو !',
    bgcolor: 'rgba(0,0,0,0.4)',
    textcolor: '#ff6a95'
}
Header.prototype ={
    text: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string
}

export default Header;
 