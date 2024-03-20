type Props = {
  text: string;
};

function H2({ text }: Props) {
  return (
    <h2
      className={
        "mb-5 text-3xl text-center bg-gradient-to-r from-primary to-tertiary text-transparent bg-clip-text uppercase"
      }>
      {text}
    </h2>
  );
}

export default H2;
