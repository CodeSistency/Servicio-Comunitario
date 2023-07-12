"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {

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
    // const desc = e.target[1].value;
    // const img = e.target[2].value;
    // const content = e.target[3].value;

    try {
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          name,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/user/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated" && session?.data?.user?.email === "valero.jozee@gmail.com") {
    return (
      <div >
        <div className={styles.add}>
            <h2>Lista de usuarios</h2>
            <Link href="/admin/add">Añadir</Link>
        </div>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((user) => (
                <div className={styles.post} key={user._id}>
                
                  <div className={styles.postGroup}>
                    <p className={styles.postTitle}>{user.nombre}</p>
                    <p className={styles.postTitle}>{user.email}</p>
                    <p className={styles.postTitle}>{user.cedula}</p>
                  </div>

                  <div className={styles.postGroup}>
                    <Link href={`/admin/editar/${user._id}`}>editar</Link>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(user._id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              ))}
        </div>
        
      </div>
    );
  }
};

export default Admin;