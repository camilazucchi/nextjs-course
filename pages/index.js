import Link from "../src/components/Link";



function Title({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
        <Title>Alura Cases - Home</Title>
        <Link href="/faq">Ir para a página do FAQ</Link>
    </div>
  );
}
