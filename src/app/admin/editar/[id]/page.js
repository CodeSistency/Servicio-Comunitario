"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Estudiante = ({params}) => {

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

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/user?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("admin/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const apellido = e.target[1].value;
    const cedula = e.target[2].value;
    const email = e.target[3].value;
    router?.push("admin");

    try {
        await fetch(`/api/user/${id}`, {
          method: "PUT",
          body: JSON.stringify({
              cedula,
              email,
              name, 
              apellido
            }),
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
  };

  
  
  
 

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Nombre" className={styles.input} />
          <input type="text" placeholder="Apellido" className={styles.input} />
          <input type="number" placeholder="Cedula" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Estudiante;