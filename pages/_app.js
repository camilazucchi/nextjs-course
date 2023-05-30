import GlobalStyle from "../src/theme/GlobalStyle";

// estilos, configurações gerais, providers...

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
