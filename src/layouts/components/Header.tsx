function Header() {
  return (
    <header className="relative py-5 border-b border-secondary">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-primary to-tertiary text-transparent bg-clip-text uppercase">
        Calculadoras de propinas y consumos
      </h1>
    </header>
  );
}

export default Header;
