import Head from "next/head";
import { Footer, Topbar } from ".";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Topbar />
      <main>{children}</main>
      <Footer/  >
    </div>
  );
}
Layout.defaultProps = {
  title: "INCOPET S.A. | Blog de Servicios Petroleros y Productos Químicos",
  description:
    "Incopet del Ecuador - Somos tu mejor elección al momento de seleccionar una Compañía de Servicios Petroleros y Productos Químicos en el Ecuador",
};
