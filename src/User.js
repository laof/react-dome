import { useSelector, useDispatch } from "react-redux";
import { userSlice, getUser } from "./store/user/userSlice";
import { useState } from "react";
import "./user.css";

export function User() {
  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => {
    return state.laok.users;
  });

  const getData = () => {
    setLoading(true);
    dispath(getUser()).then(() => {
      setLoading(false);
    });
  };

  const dispath = useDispatch();

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {index} - {item.name}
            </li>
          ))}
        </ul>
      )}
      <button onClick={getData}>get</button>
      <button
        onClick={() => dispath(userSlice.actions.add({ name: "add", id: 123 }))}
      >
        add
      </button>
      <button onClick={() => dispath(userSlice.actions.delete())}>
        delete
      </button>
    </>
  );
}
