function List ({persons}){
  let nameList = persons.map((person)=>{
    const {id, name, email, username} = person;

    return (
      <article key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </article>
    );
  });
  if(persons.length === 0){
    return <h1 className="heading">no birthdays today</h1>;
  }
 
  return (
    <section className="box">
      <h1 className="heading">{persons.length} birthdays today</h1>
      {nameList}
      
    </section>
  );
}
export default List