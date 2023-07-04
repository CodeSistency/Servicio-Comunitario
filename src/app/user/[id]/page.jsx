import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const user = await getData(params.id)
  return {
    name: user.name
    
  };
}

const User = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default User;