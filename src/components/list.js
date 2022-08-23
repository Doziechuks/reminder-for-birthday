function List ({persons}){
  let nameList = persons.map((person)=>{
    const {id, name, image, age} = person;

    return (
      <article key={id}>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{age}</p>
        </div>
      </article>
    );
  });
 
  return (
    <section className="box">
      <h1 className="heading">{persons.length} birthdays today</h1>
      {nameList}
      
    </section>
  );
}
export default List