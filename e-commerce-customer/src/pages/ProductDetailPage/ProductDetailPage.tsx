import { useParams } from "react-router-dom";
import { mockData } from "../../layouts/HomePageLayout/data";

const ProductDetailPage = () => {
    const params = useParams();
    const data = mockData[params.id ? +params.id : 1];

    return <div className="pb-52">Detail</div>
}

export default ProductDetailPage;