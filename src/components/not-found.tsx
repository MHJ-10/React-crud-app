import notFound from "../../public/images/not-found.png"
import { Image } from "react-bootstrap";

const NotFound = () => {
    return (
        <div className="text-center my-5 py-5">
        <Image thumbnail src={notFound} alt="not-found" />
        <h3 className="mt-3">صفحه مورد نظر یافت نشد.</h3>
        </div>
    )
}

export default NotFound;