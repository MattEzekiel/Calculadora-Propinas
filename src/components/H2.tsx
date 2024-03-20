type Props = {
  text: string;
};

function H2({ text }: Props) {
  return <h2 className={"mb-5 text-3xl text-center"}>{text}</h2>;
}

export default H2;
