import DreamForm from "../components/form/dreamForm";
import Layout from "./layout";
import "../assets/css/dreamPage.css";

function DreamPage() {
  return (
    <Layout>
      <div className="bloc_page">
        <h1>Welcome on Morpheai</h1>
        <DreamForm />
      </div>
    </Layout>
  );
}

export default DreamPage;
