const Footer = () => {
  return (
    <div className="bg-zinc-900 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="text-center md:text-end py-3 font-mono">
          <div>Powered by RAWG.io</div>
          All rights reserved to Jeffrey Aroun bin Omar
        </div>
      </div>
    </div>
  );
};

export default Footer;
