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
    `/api/user?email=${session?.data?.user.email}`,
    fetcher
  );

  console.log(data)
  console.log(session?.data?.user)
  
  const datos = data?.find(obj => obj.email === session?.data?.user.email);
  console.log(datos)
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

          <div>
          <h3>Bienvenido {datos?.nombre}</h3>
          
          <h2>Notas</h2>
          <hr />
          <h3>1er Año</h3>
          <h4>1er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_1_1}</p>
              <p>Deporte: {datos?.deporte_1_1}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_1_1}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_1_1}</p>
              <p>GHC: {datos?.ghc_1_1}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_1_1}</p>
              <p>Castellano: {datos?.castellano_1_1}</p>
              <p>Grupo Estable: {datos?.grupo_estable_1_1}</p>
              <p>Orientación: {datos?.orientacion_1_1}</p>
            </div>
          </div>
          <h4>2do Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_1_2}</p>
              <p>Deporte: {datos?.deporte_1_2}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_1_2}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_1_2}</p>
              <p>GHC: {datos?.ghc_1_2}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_1_2}</p>
              <p>Castellano: {datos?.castellano_1_2}</p>
              <p>Grupo Estable: {datos?.grupo_estable_1_2}</p>
              <p>Orientación: {datos?.orientacion_1_2}</p>
            </div>
          </div>
          <h4>3er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_1_3}</p>
              <p>Deporte: {datos?.deporte_1_3}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_1_3}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_1_3}</p>
              <p>GHC: {datos?.ghc_1_3}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_1_3}</p>
              <p>Castellano: {datos?.castellano_1_3}</p>
              <p>Grupo Estable: {datos?.grupo_estable_1_3}</p>
              <p>Orientación: {datos?.orientacion_1_3}</p>
            </div>
          </div>
          <h3>2do Año</h3>
          <h4>1er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_2_1}</p>
              <p>Deporte: {datos?.deporte_2_1}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_2_1}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_2_1}</p>
              <p>GHC: {datos?.ghc_2_1}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_2_1}</p>
              <p>Castellano: {datos?.castellano_2_1}</p>
              <p>Grupo Estable: {datos?.grupo_estable_2_1}</p>
              <p>Orientación: {datos?.orientacion_2_1}</p>
            </div>
          </div>
          <h4>2do Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_2_2}</p>
              <p>Deporte: {datos?.deporte_2_2}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_2_2}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_2_2}</p>
              <p>GHC: {datos?.ghc_2_2}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_2_2}</p>
              <p>Castellano: {datos?.castellano_2_2}</p>
              <p>Grupo Estable: {datos?.grupo_estable_2_2}</p>
              <p>Orientación: {datos?.orientacion_2_2}</p>
            </div>
          </div>
          <h4>3er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_2_3}</p>
              <p>Deporte: {datos?.deporte_2_3}</p>
              <p>Ciencias Naturales: {datos?.ciencias_naturales_2_3}</p>
              <p>Arte y Convivencia: {datos?.arte_convivencia_2_3}</p>
              <p>GHC: {datos?.ghc_2_3}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_2_3}</p>
              <p>Castellano: {datos?.castellano_2_3}</p>
              <p>Grupo Estable: {datos?.grupo_estable_2_3}</p>
              <p>Orientación: {datos?.orientacion_2_3}</p>
            </div>
          </div>
          <h3>3er Año</h3>
          <h4>1er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_3_1}</p>
              <p>Deporte: {datos?.deporte_3_1}</p>
              <p>Biología: {datos?.biologia_3_1}</p>
              <p>Quimica: {datos?.quimica_3_1}</p>
              <p>GHC: {datos?.ghc_3_1}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_3_1}</p>
              <p>Castellano: {datos?.castellano_3_1}</p>
              <p>Física: {datos?.fisica_3_1}</p>
              <p>Grupo Estable: {datos?.grupo_estable_3_1}</p>
              <p>Orientación: {datos?.orientacion_3_1}</p>
            </div>
          </div>
          <h4>2do Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_3_2}</p>
              <p>Deporte: {datos?.deporte_3_2}</p>
              <p>Biología: {datos?.biologia_3_2}</p>
              <p>Quimica: {datos?.quimica_3_2}</p>
              <p>GHC: {datos?.ghc_3_2}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_3_2}</p>
              <p>Castellano: {datos?.castellano_3_2}</p>
              <p>Física: {datos?.fisica_3_2}</p>
              <p>Grupo Estable: {datos?.grupo_estable_3_2}</p>
              <p>Orientación: {datos?.orientacion_3_2}</p>
            </div>
          </div>
          <h4>3er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matemática: {datos?.matematica_3_3}</p>
              <p>Deporte: {datos?.deporte_3_3}</p>
              <p>Biología: {datos?.biologia_3_3}</p>
              <p>Quimica: {datos?.quimica_3_3}</p>
              <p>GHC: {datos?.ghc_3_3}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_3_3}</p>
              <p>Castellano: {datos?.castellano_3_3}</p>
              <p>Física: {datos?.fisica_3_3}</p>
              <p>Grupo Estable: {datos?.grupo_estable_3_3}</p>
              <p>Orientación: {datos?.orientacion_3_3}</p>
            </div>
          </div>
          <h3>3er Año</h3>
          <h4>1er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_4_1}</p>
              <p>Deporte: {datos?.deporte_4_1}</p>
              <p>Biología: {datos?.biologia_4_1}</p>
              <p>Quimica: {datos?.quimica_4_1}</p>
              <p>GHC: {datos?.ghc_4_1}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_4_1}</p>
              <p>Castellano: {datos?.castellano_4_1}</p>
              <p>Física: {datos?.fisica_4_1}</p>
              <p>Grupo Estable: {datos?.grupo_estable_4_1}</p>
              <p>Orientación: {datos?.orientacion_4_1}</p>
              <p>Soberanía: {datos?.soberania_4_1}</p>
            </div>
          </div>
          <h4>2do Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_4_2}</p>
              <p>Deporte: {datos?.deporte_4_2}</p>
              <p>Biología: {datos?.biologia_4_2}</p>
              <p>Quimica: {datos?.quimica_4_2}</p>
              <p>GHC: {datos?.ghc_4_2}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_4_2}</p>
              <p>Castellano: {datos?.castellano_4_2}</p>
              <p>Física: {datos?.fisica_4_2}</p>
              <p>Grupo Estable: {datos?.grupo_estable_4_2}</p>
              <p>Orientación: {datos?.orientacion_4_2}</p>
              <p>Soberanía: {datos?.soberania_4_2}</p>
            </div>
          </div>
          <h4>3er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matemática: {datos?.matematica_4_3}</p>
              <p>Deporte: {datos?.deporte_4_3}</p>
              <p>Biología: {datos?.biologia_4_3}</p>
              <p>Quimica: {datos?.quimica_4_3}</p>
              <p>GHC: {datos?.ghc_4_3}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_4_3}</p>
              <p>Castellano: {datos?.castellano_4_3}</p>
              <p>Física: {datos?.fisica_4_3}</p>
              <p>Grupo Estable: {datos?.grupo_estable_4_3}</p>
              <p>Orientación: {datos?.orientacion_4_3}</p>
              <p>Soberanía: {datos?.soberania_4_3}</p>
            </div>
          </div>
          <h3>5to Año</h3>
          <h4>1er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_5_1}</p>
              <p>Deporte: {datos?.deporte_5_1}</p>
              <p>Biología: {datos?.biologia_5_1}</p>
              <p>Quimica: {datos?.quimica_5_1}</p>
              <p>GHC: {datos?.ghc_5_1}</p>
              <p>Ciencias de la tierra: {datos?.ciencias_tierra_5_1}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_5_1}</p>
              <p>Castellano: {datos?.castellano_5_1}</p>
              <p>Física: {datos?.fisica_5_1}</p>
              <p>Grupo Estable: {datos?.grupo_estable_5_1}</p>
              <p>Orientación: {datos?.orientacion_5_1}</p>
              <p>Soberanía: {datos?.soberania_5_1}</p>
            </div>
          </div>
          <h4>2do Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matematica: {datos?.matematica_5_2}</p>
              <p>Deporte: {datos?.deporte_5_2}</p>
              <p>Biología: {datos?.biologia_5_2}</p>
              <p>Quimica: {datos?.quimica_5_2}</p>
              <p>GHC: {datos?.ghc_5_2}</p>
              <p>Ciencias de la tierra: {datos?.ciencias_tierra_5_2}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_5_2}</p>
              <p>Castellano: {datos?.castellano_5_2}</p>
              <p>Física: {datos?.fisica_5_2}</p>
              <p>Grupo Estable: {datos?.grupo_estable_5_2}</p>
              <p>Orientación: {datos?.orientacion_5_2}</p>
              <p>Soberanía: {datos?.soberania_5_2}</p>
            </div>
          </div>
          <h4>3er Lapso</h4>
          <div className={styles.notas_container}>
            <div className={styles.notas}>
              <p>Matemática: {datos?.matematica_5_3}</p>
              <p>Deporte: {datos?.deporte_5_3}</p>
              <p>Biología: {datos?.biologia_5_3}</p>
              <p>Quimica: {datos?.quimica_5_3}</p>
              <p>GHC: {datos?.ghc_5_3}</p>
              <p>Ciencias de la tierra: {datos?.ciencias_tierra_5_3}</p>
            </div>
            <div className={styles.notas}>
              <p>Ingles: {datos?.ingles_5_3}</p>
              <p>Castellano: {datos?.castellano_5_3}</p>
              <p>Física: {datos?.fisica_5_3}</p>
              <p>Grupo Estable: {datos?.grupo_estable_5_3}</p>
              <p>Orientación: {datos?.orientacion_5_3}</p>
              <p>Soberanía: {datos?.soberania_5_3}</p>
            </div>
          </div>
          
          

          
          
        
        </div>
       
      </div>
    );
  }
};

export default User;
