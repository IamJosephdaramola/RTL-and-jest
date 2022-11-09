import { GreetProps } from "./greet.types";

export default function Greet({ name }: GreetProps) {
  return <div>hello {name}</div>;
}
