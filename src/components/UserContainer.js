import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>loading...</p>;
    if (!loading && error) return <p>{error}</p>;

    if (!loading && !error && userData && users.length)
      return (
        <div>
          <h2>users list</h2>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      );
  };

  return <div>{renderUsers()}</div>;
};

export default UserContainer;
