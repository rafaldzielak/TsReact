import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "rafa", age: 25 },
  { name: "icek", age: 97 },
  { name: "jan", age: 30 },
];

type userType = { name: string; age: number } | undefined;

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<userType>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((u) => u.name === name);
    if (foundUser) setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClick}>Search Guest</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
