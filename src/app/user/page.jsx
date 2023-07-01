"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Calendar from "../calendar/page";

const User = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();
  console.log(session?.data?.user)
 

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/user/login");
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const title = e.target[0].value;
//     const desc = e.target[1].value;
//     const img = e.target[2].value;
//     const content = e.target[3].value;

//     try {
//       await fetch("/api/posts", {
//         method: "POST",
//         body: JSON.stringify({
//           title,
//           desc,
//           img,
//           content,
//           username: session.data.user.name,
//         }),
//       });
//       mutate();
//       e.target.reset()
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/api/posts/${id}`, {
//         method: "DELETE",
//       });
//       mutate();
//     } catch (err) {
//       console.log(err);
//     }
//   };
  // const arr = ["foo", "bar", "baz"];
//const newArr = arr.map((item) => <li>{item}</li>);

console.log(session?.data?.user?.notas)

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <p>Welcome {session.data.user.name}</p>
        
        <Calendar/>
      </div>
    );
  }
};

export default User;
