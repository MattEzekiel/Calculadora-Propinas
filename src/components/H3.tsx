type Props = {
  text: string;
};

function H3({ text }: Props) {
  return (
    <h3
      className={
        "mb-5 text-2xl text-center bg-gradient-to-r from-primary to-tertiary text-transparent bg-clip-text uppercase"
      }>
      {text}
    </h3>
  );
}

export default H3;
