"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {

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
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const apellido = e.target[1].value;
    const cedula = e.target[2].value;
    const email = e.target[3].value;
    const edad = e.target[4].value;
    const password = e.target[5].value;
    const añoActual = e.target[6].value;
    const seccion = e.target[7].value;

    const primerAnoMatematica_1 = e.target[8].value;
    const primerAnoDeporte_1 = e.target[9].value;
    const primerAnoBiologia_1 = e.target[10].value;
    const primerAnoFisica_1 = e.target[11].value;

    const primerAnoMatematica_2 = e.target[12].value;
    const primerAnoDeporte_2 = e.target[13].value;
    const primerAnoBiologia_2 = e.target[14].value;
    const primerAnoFisica_2 = e.target[15].value;

    const primerAnoMatematica_3 = e.target[16].value;
    const primerAnoDeporte_3 = e.target[17].value;
    const primerAnoBiologia_3 = e.target[18].value;
    const primerAnoFisica_3 = e.target[19].value;

    const segundoAnoMatematica_1 = e.target[20].value;
    const segundoAnoDeporte_1 = e.target[21].value;
    const segundoAnoBiologia_1 = e.target[22].value;
    const segundoAnoFisica_1 = e.target[23].value;

    const segundoAnoMatematica_2 = e.target[24].value;
    const segundoAnoDeporte_2 = e.target[25].value;
    const segundoAnoBiologia_2 = e.target[26].value;
    const segundoAnoFisica_2 = e.target[27].value;

    const segundoAnoMatematica_3 = e.target[28].value;
    const segundoAnoDeporte_3 = e.target[29].value;
    const segundoAnoBiologia_3 = e.target[30].value;
    const segundoAnoFisica_3 = e.target[31].value;

    const tercerAnoMatematica_1 = e.target[32].value;
    const tercerAnoDeporte_1 = e.target[33].value;
    const tercerAnoBiologia_1 = e.target[34].value;
    const tercerAnoFisica_1 = e.target[35].value;

    const tercerAnoMatematica_2 = e.target[36].value;
    const tercerAnoDeporte_2 = e.target[37].value;
    const tercerAnoBiologia_2 = e.target[38].value;
    const tercerAnoFisica_2 = e.target[39].value;

    const tercerAnoMatematica_3 = e.target[40].value;
    const tercerAnoDeporte_3 = e.target[41].value;
    const tercerAnoBiologia_3 = e.target[42].value;
    const tercerAnoFisica_3 = e.target[43].value;

    const cuartoAnoMatematica_1 = e.target[44].value;
    const cuartoAnoDeporte_1 = e.target[45].value;
    const cuartoAnoBiologia_1 = e.target[46].value;
    const cuartoAnoFisica_1 = e.target[47].value;

    const cuartoAnoMatematica_2 = e.target[48].value;
    const cuartoAnoDeporte_2 = e.target[49].value;
    const cuartoAnoBiologia_2 = e.target[50].value;
    const cuartoAnoFisica_2 = e.target[51].value;

    const cuartoAnoMatematica_3 = e.target[52].value;
    const cuartoAnoDeporte_3 = e.target[53].value;
    const cuartoAnoBiologia_3 = e.target[54].value;
    const cuartoAnoFisica_3 = e.target[55].value;

    const quintoAnoMatematica_1 = e.target[56].value;
    const quintoAnoDeporte_1 = e.target[57].value;
    const quintoAnoBiologia_1 = e.target[58].value;
    const quintoAnoFisica_1 = e.target[59].value;

    const quintoAnoMatematica_2 = e.target[60].value;
    const quintoAnoDeporte_2 = e.target[61].value;
    const quintoAnoBiologia_2 = e.target[62].value;
    const quintoAnoFisica_2 = e.target[63].value;

    const quintoAnoMatematica_3 = e.target[64].value;
    const quintoAnoDeporte_3 = e.target[65].value;
    const quintoAnoBiologia_3 = e.target[66].value;
    const quintoAnoFisica_3 = e.target[67].value;

    const notas = [{
        primero: [{
            lapso_1:{
                matematica : primerAnoMatematica_1,
                biologia : primerAnoBiologia_1,
                fisica: primerAnoFisica_1
            },
        }]
    }]

    try {
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          apellido,
          cedula,
          email,
          password,
          edad,
          añoActual,
          seccion
        
          
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Añade nuevo usuario</h1>
          <div className={styles.periodo}>
            <input type="text" placeholder="Nombre" className={styles.input} />
            <input type="text" placeholder="Apellido" className={styles.input} />
            <input type="number" placeholder="Cedula" className={styles.input} />


          </div>
          <div className={styles.periodo}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="number" placeholder="Edad" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            
          </div>
          <div className={styles.periodo}>
            
            <input type="number" placeholder="Año cursando" className={styles.input} />
            <input type="number" placeholder="Sección" className={styles.input} />
            
            
          </div>
          <h2>Notas</h2>
          <h3>1er Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p >1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div>
            <p className={styles.periodo}>3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>

          <h3>2do Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p >1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <h3>3er Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div>
            <p className={styles.periodo}>3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <h3 className={styles.periodo}>4to Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <h3>5to Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biología" className={styles.input} />
            <input type="number" placeholder="Física" className={styles.input} />
          </div>
          
          
          
          
          
          
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;