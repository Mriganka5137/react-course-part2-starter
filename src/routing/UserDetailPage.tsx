import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // alert(searchParams);
  const name = searchParams.get("name");
  const location = useLocation();
  return (
    <p>
      User: {id} {name} {location.pathname}
    </p>
  );
};

export default UserDetailPage;
