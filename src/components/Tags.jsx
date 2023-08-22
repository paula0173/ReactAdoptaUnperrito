import Badge from 'react-bootstrap/Badge';


const Tags = ({ raza, color }) => {
  return (
        <Badge className="w-100 rounded-pill" bg={color}>{raza}</Badge>
   ) 
}

export default Tags