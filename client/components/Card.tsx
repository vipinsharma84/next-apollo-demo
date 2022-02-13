import Classes from './Card.module.css';

export default function CardComponent({ users }) {
  return (
    users.map((item, index) => (
      <div className={Classes.card} key={index}>
        <div>
         <strong>Name: {item.name}</strong>
        </div>
        <br />
        <div>
          <strong>Email: { item.email }</strong>          
        </div>
        <br />
        <div>
          <strong>Address: { item.address } </strong>          
        </div>
        <br />
        <div>
          <strong>Telephone: { item.phone }</strong>          
        </div>
      </div>
    ))
  )
}