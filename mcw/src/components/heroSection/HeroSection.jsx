function HeroSection() {
  return (
    <section className="flex w-full h-full items-center justify-between">
      <div>
        <div className="font-lastica text-7xl">
          <h1>Um click, </h1>
          <h1>Uma oportunidade,</h1>
          <h1>uma solução!</h1>
        </div>
        <div>
          <p>Contrate serviços de um jeito rápido, seguro e confiavel</p>
        </div>
        <div>
          <button>Fazer Orçamento</button>
        </div>
      </div>
      <div>
        <img
          src="../src/components/header/logo.png"
          alt="texte"
          className="w-100"
        />
      </div>
    </section>
  );
}

export default HeroSection;
