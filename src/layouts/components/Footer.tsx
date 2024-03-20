function Footer() {
  return (
    <footer className={"bg-tertiary p-4 min-h-[60px]"}>
      <p className={"text-center text-white"}>
        Matías Bubello {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
