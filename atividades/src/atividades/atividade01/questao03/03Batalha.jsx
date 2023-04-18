const Hero = (props) => (
    <div>
      <h1>Nome: {props.nome}</h1>
      <img src={props.img} />
    </div>
  );
  
  const Enemy = (props) => (
    <div>
      <h1>Nome: {props.nome}</h1>
      <img src={props.img} />
    </div>
  );
  
  const Arena = (props) => (
    <div>
      <Hero nome={props.nameHero} img={props.imgHero} />
      <h1> VS </h1>
      <Enemy nome={props.nameEnemy} img={props.imgEnemy} />
    </div>
  );
  
  export default Arena;
  