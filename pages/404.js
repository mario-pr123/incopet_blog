import { Layout } from "../components";

export default function PageNotFound() {
    return (
        <Layout title="404 | Página no encontrada | INCOPET S.A." description="INCOPET S.A cuenta con herramientas de completacion y herramientas de pesca. Alta confiabilidad en equipos y herramientas.">
            <div className="errorPage">
                <div data-aos="zoom-in" className="errorPageWrap">
                    <h1 data-aos="fade-up">404</h1>
                    <span data-aos="fade-up">
                        Oops! <br />
                        Página no encontrada
                    </span>
                </div>
            </div>
        </Layout>
    );
}
