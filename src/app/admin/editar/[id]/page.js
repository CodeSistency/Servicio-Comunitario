"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";




const Estudiante = ({params}) => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/user/${params.id}`,
    fetcher
  );



  const [datos, setDatos] = useState({
    nombre: data?.user?.nombre,
    apellido: data?.user?.apellido,
    cedula: data?.user?.cedula,
    email: data?.user?.edad,
    password: data?.user?.password,
    curso_actual: data?.user?.curso_actual,
    seccion: data?.user?.seccion,

    // matematica_1_1: data?.user?.notas[0].primero[0].lapso_1.matematica,
    // deportes_1_1: data?.user?.notas[0].primero[0].lapso_1?.deportes,
    // ciencias_naturales_1_1: data?.user?.notas[0].primero[0].lapso_1?.ciencias_naturales,
    // arte_convivencia_1_1: data?.user?.notas[0].primero[0].lapso_1?.arte_convivencia,
    // ghc_1_1: data?.user?.notas[0].primero[0].lapso_1?.ghc,
    // ingles_1_1: data?.user?.notas[0].primero[0].lapso_1?.ingles,
    // castellano_1_1: data?.user?.notas[0].primero[0].lapso_1?.castellano,
    // orientacion_1_1: data?.user?.notas[0].primero[0].lapso_1?.orientacion,
    // grupo_estable_1_1: data?.user?.notas[0].primero[0].lapso_1?.grupo_estable,
    // matematica_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
    // deportes_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
    // ciencias_naturales_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ciencias_naturales,
    // arte_convivencia_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.arte_convivencia,
    // ghc_1_2: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
    // ingles_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
    // castellano_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
    // orientacion_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
    // grupo_estable_1_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable,
    // matematica_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
    // deportes_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
    // ciencias_naturales_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ciencias_naturales,
    // arte_convivencia_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.arte_convivencia,
    // ghc_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
    // ingles_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
    // castellano_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
    // orientacion_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // grupo_estable_1_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable,

    matematica_1_1: data?.user?.matematica_1_1,
    deportes_1_1: data?.user?.deportes_1_1,
    ciencias_naturales_1_1: data?.user?.ciencias_naturales_1_1,
    arte_convivencia_1_1: data?.user?.arte_convivencia_1_1,
    ghc_1_1: data?.user?.ghc_1_1,
    ingles_1_1: data?.user?.ingles_1_1,
    castellano_1_1: data?.user?.castellano_1_1,
    orientacion_1_1: data?.user?.orientacion_1_1,
    grupo_estable_1_1: data?.user?.grupo_estable_1_1,
    matematica_1_2: data?.user?.matematica_1_2,
    deportes_1_2: data?.user?.deportes_1_2,
    ciencias_naturales_1_2: data?.user?.ciencias_naturales_1_2,
    arte_convivencia_1_2: data?.user?.arte_convivencia_1_2,
    ghc_1_2: data?.user?.ghc_1_2,
    ingles_1_2: data?.user?.ingles_1_2,
    castellano_1_2: data?.user?.castellano_1_2,
    orientacion_1_2: data?.user?.orientacion_1_2,
    grupo_estable_1_2: data?.user?.grupo_estable_1_2,
    matematica_1_3: data?.user?.matematica_1_3,
    deportes_1_3: data?.user?.deportes_1_3,
    ciencias_naturales_1_3: data?.user?.ciencias_naturales_1_3,
    arte_convivencia_1_3: data?.user?.arte_convivencia_1_3,
    ghc_1_3: data?.user?.ghc_1_3,
    ingles_1_3: data?.user?.ingles_1_3,
    castellano_1_3: data?.user?.castellano_1_3,
    orientacion_1_3: data?.user?.orientacion_1_3,
    grupo_estable_1_3: data?.user?.grupo_estable_1_3,

    // matematica_2_1: data?.user?.notas[0].primero[0].lapso_1.matematica,
    // deportes_2_1: data?.user?.notas[0].primero[0].lapso_1?.deportes,
    // ciencias_naturales_1_1: data?.user?.notas[0].primero[0].lapso_1?.ciencias_naturales,
    // arte_convivencia_2_1: data?.user?.notas[0].primero[0].lapso_1?.arte_convivencia,
    // ghc_2_1: data?.user?.notas[0].primero[0].lapso_1?.ghc,
    // ingles_2_1: data?.user?.notas[0].primero[0].lapso_1?.ingles,
    // castellano_2_1: data?.user?.notas[0].primero[0].lapso_1?.castellano,
    // orientacion_2_1: data?.user?.notas[0].primero[0].lapso_1?.orientacion,
    // grupo_estable_2_1: data?.user?.notas[0].primero[0].lapso_1?.grupo_estable,
    // matematica_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
    // deportes_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
    // ciencias_naturales_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ciencias_naturales,
    // arte_convivencia_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.arte_convivencia,
    // ghc_2_2: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
    // ingles_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
    // castellano_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
    // orientacion_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
    // grupo_estable_2_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable,
    // matematica_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
    // deportes_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
    // ciencias_naturales_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ciencias_naturales,
    // arte_convivencia_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.arte_convivencia,
    // ghc_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
    // ingles_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
    // castellano_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
    // orientacion_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // grupo_estable_2_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable,

    matematica_2_1: data?.user?.matematica_2_1,
    deportes_2_1: data?.user?.deportes_2_1,
    ciencias_naturales_1_1: data?.user?.ciencias_naturales_1_1,
    arte_convivencia_2_1: data?.user?.arte_convivencia_2_1,
    ghc_2_1: data?.user?.ghc_2_1,
    ingles_2_1: data?.user?.ingles_2_1,
    castellano_2_1: data?.user?.castellano_2_1,
    orientacion_2_1: data?.user?.orientacion_2_1,
    grupo_estable_2_1: data?.user?.grupo_estable_2_1,
    matematica_2_2: data?.user?.matematica_2_2,
    deportes_2_2: data?.user?.deportes_2_2,
    ciencias_naturales_2_2: data?.user?.ciencias_naturales_2_2,
    arte_convivencia_2_2: data?.user?.arte_convivencia_2_2,
    ghc_2_2: data?.user?.ghc_2_2,
    ingles_2_2: data?.user?.ingles_2_2,
    castellano_2_2: data?.user?.castellano_2_2,
    orientacion_2_2: data?.user?.orientacion_2_2,
    grupo_estable_2_2: data?.user?.grupo_estable_2_2,
    matematica_2_3: data?.user?.matematica_2_3,
    deportes_2_3: data?.user?.deportes_2_3,
    ciencias_naturales_2_3: data?.user?.ciencias_naturales_2_3,
    arte_convivencia_2_3: data?.user?.arte_convivencia_2_3,
    ghc_2_3: data?.user?.ghc_2_3,
    ingles_2_3: data?.user?.ingles_2_3,
    castellano_2_3: data?.user?.castellano_2_3,
    orientacion_2_3: data?.user?.orientacion_2_3,
    grupo_estable_2_3: data?.user?.grupo_estable_2_3,

    // matematica_3_1: data?.user?.notas[0].primero[0].lapso_1.matematica,
    // deportes_3_1: data?.user?.notas[0].primero[0].lapso_1?.deportes,
    // biologia_3_1: data?.user?.notas[0].primero[0].lapso_1?.biologia,
    // fisica_3_1: data?.user?.notas[0].primero[0].lapso_1?.fisica,
    // quimica_3_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_3_1: data?.user?.notas[0].primero[0].lapso_1?.ghc,
    // ingles_3_1: data?.user?.notas[0].primero[0].lapso_1?.ingles,
    // castellano_3_1: data?.user?.notas[0].primero[0].lapso_1?.castellano,
    // orientacion_3_1: data?.user?.notas[0].primero[0].lapso_1?.orientacion,
    // grupo_estable_3_1: data?.user?.notas[0].primero[0].lapso_1?.grupo_estable,
    // matematica_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
    // deportes_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
    // biologia_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.biologia,
    // fisica_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.fisica,
    // quimica_3_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_3_2: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
    // ingles_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
    // castellano_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
    // orientacion_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
    // grupo_estable_3_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable,
    // matematica_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
    // deportes_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
    // biologia_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.biologia,
    // fisica_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // quimica_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
    // ingles_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
    // castellano_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
    // orientacion_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // grupo_estable_3_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable,

      matematica_3_1: data?.user?.matematica_3_1,
      deportes_3_1: data?.user?.deportes_3_1,
      biologia_3_1: data?.user?.biologia_3_1,
      fisica_3_1: data?.user?.fisica_3_1,
      quimica_3_1: data?.user?.quimica_3_1,
      ghc_3_1: data?.user?.ghc_3_1,
      ingles_3_1: data?.user?.ingles_3_1,
      castellano_3_1: data?.user?.castellano_3_1,
      orientacion_3_1: data?.user?.orientacion_3_1,
      grupo_estable_3_1: data?.user?.grupo_estable_3_1,
      matematica_3_2: data?.user?.matematica_3_2,
      deportes_3_2: data?.user?.deportes_3_2,
      biologia_3_2: data?.user?.biologia_3_2,
      fisica_3_2: data?.user?.fisica_3_2,
      quimica_3_2: data?.user?.quimica_3_2,
      ghc_3_2: data?.user?.ghc_3_2,
      ingles_3_2: data?.user?.ingles_3_2,
      castellano_3_2: data?.user?.castellano_3_2,
      orientacion_3_2: data?.user?.orientacion_3_2,
      grupo_estable_3_2: data?.user?.grupo_estable_3_2,
      matematica_3_3: data?.user?.matematica_3_3,
      deportes_3_3: data?.user?.deportes_3_3,
      biologia_3_3: data?.user?.biologia_3_3,
      fisica_3_3: data?.user?.fisica_3_3,
      quimica_3_3: data?.user?.quimica_3_3,
      ghc_3_3: data?.user?.ghc_3_3,
      ingles_3_3: data?.user?.ingles_3_3,
      castellano_3_3: data?.user?.castellano_3_3,
      orientacion_3_3: data?.user?.orientacion_3_3,
      grupo_estable_3_3: data?.user?.grupo_estable_3_3,

    // matematica_4_1: data?.user?.notas[0].primero[0].lapso_1.matematica,
    // deportes_4_1: data?.user?.notas[0].primero[0].lapso_1?.deportes,
    // biologia_4_1: data?.user?.notas[0].primero[0].lapso_1?.biologia,
    // fisica_4_1: data?.user?.notas[0].primero[0].lapso_1?.fisica,
    // quimica_4_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_4_1: data?.user?.notas[0].primero[0].lapso_1?.ghc,
    // ingles_4_1: data?.user?.notas[0].primero[0].lapso_1?.ingles,
    // castellano_4_1: data?.user?.notas[0].primero[0].lapso_1?.castellano,
    // orientacion_4_1: data?.user?.notas[0].primero[0].lapso_1?.orientacion,
    // grupo_estable_4_1: data?.user?.notas[0].primero[0].lapso_1?.grupo_estable,
    // soberania_4_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // matematica_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
    // deportes_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
    // biologia_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.biologia,
    // fisica_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.fisica,
    // quimica_4_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_4_2: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
    // ingles_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
    // castellano_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
    // orientacion_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
    // grupo_estable_4_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable,
    // soberania_4_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // matematica_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
    // deportes_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
    // biologia_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.biologia,
    // fisica_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // quimica_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
    // ingles_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
    // castellano_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
    // orientacion_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // grupo_estable_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable,
    // soberania_4_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,

      matematica_4_1: data?.user?.matematica_4_1,
      deportes_4_1: data?.user?.deportes_4_1,
      biologia_4_1: data?.user?.biologia_4_1,
      fisica_4_1: data?.user?.fisica_4_1,
      quimica_4_1: data?.user?.quimica_4_1,
      ghc_4_1: data?.user?.ghc_4_1,
      ingles_4_1: data?.user?.ingles_4_1,
      castellano_4_1: data?.user?.castellano_4_1,
      orientacion_4_1: data?.user?.orientacion_4_1,
      grupo_estable_4_1: data?.user?.grupo_estable_4_1,
      soberania_4_1: data?.user?.soberania_4_1,
      matematica_4_2: data?.user?.matematica_4_2,
      deportes_4_2: data?.user?.deportes_4_2,
      biologia_4_2: data?.user?.biologia_4_2,
      fisica_4_2: data?.user?.fisica_4_2,
      quimica_4_2: data?.user?.quimica_4_2,
      ghc_4_2: data?.user?.ghc_4_2,
      ingles_4_2: data?.user?.ingles_4_2,
      castellano_4_2: data?.user?.castellano_4_2,
      orientacion_4_2: data?.user?.orientacion_4_2,
      grupo_estable_4_2: data?.user?.grupo_estable_4_2,
      soberania_4_2: data?.user?.soberania_4_2,
      matematica_4_3: data?.user?.matematica_4_3,
      deportes_4_3: data?.user?.deportes_4_3,
      biologia_4_3: data?.user?.biologia_4_3,
      fisica_4_3: data?.user?.fisica_4_3,
      quimica_4_3: data?.user?.quimica_4_3,
      ghc_4_3: data?.user?.ghc_4_3,
      ingles_4_3: data?.user?.ingles_4_3,
      castellano_4_3: data?.user?.castellano_4_3,
      orientacion_4_3: data?.user?.orientacion_4_3,
      grupo_estable_4_3: data?.user?.grupo_estable_4_3,
      soberania_4_3: data?.user?.soberania_4_3,

    // matematica_5_1: data?.user?.notas[0].primero[0].lapso_1.matematica,
    // deportes_5_1: data?.user?.notas[0].primero[0].lapso_1?.deportes,
    // biologia_5_1: data?.user?.notas[0].primero[0].lapso_1?.biologia,
    // fisica_5_1: data?.user?.notas[0].primero[0].lapso_1?.fisica,
    // quimica_5_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_5_1: data?.user?.notas[0].primero[0].lapso_1?.ghc,
    // ingles_5_1: data?.user?.notas[0].primero[0].lapso_1?.ingles,
    // castellano_5_1: data?.user?.notas[0].primero[0].lapso_1?.castellano,
    // orientacion_5_1: data?.user?.notas[0].primero[0].lapso_1?.orientacion,
    // grupo_estable_5_1: data?.user?.notas[0].primero[0].lapso_1?.grupo_estable,
    // soberania_5_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // ciencias_tierra_5_1: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // matematica_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
    // deportes_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
    // biologia_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.biologia,
    // fisica_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.fisica,
    // quimica_5_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_5_2: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
    // ingles_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
    // castellano_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
    // orientacion_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
    // grupo_estable_5_2: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable,
    // soberania_5_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // ciencias_tierra_5_2: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // matematica_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
    // deportes_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
    // biologia_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.biologia,
    // fisica_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // quimica_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.fisica,
    // ghc_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
    // ingles_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
    // castellano_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
    // orientacion_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // grupo_estable_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable,
    // soberania_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
    // ciencias_tierra_5_3: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,

    matematica_5_1: data?.user?.matematica_5_1,
    deportes_5_1: data?.user?.deportes_5_1,
    biologia_5_1: data?.user?.biologia_5_1,
    fisica_5_1: data?.user?.fisica_5_1,
    quimica_5_1: data?.user?.quimica_5_1,
    ghc_5_1: data?.user?.ghc_5_1,
    ingles_5_1: data?.user?.ingles_5_1,
    castellano_5_1: data?.user?.castellano_5_1,
    orientacion_5_1: data?.user?.orientacion_5_1,
    grupo_estable_5_1: data?.user?.grupo_estable_5_1,
    soberania_5_1: data?.user?.soberania_5_1,
    ciencias_tierra_5_1: data?.user?.ciencias_tierra_5_1,
    matematica_5_2: data?.user?.matematica_5_2,
    deportes_5_2: data?.user?.deportes_5_2,
    biologia_5_2: data?.user?.biologia_5_2,
    fisica_5_2: data?.user?.fisica_5_2,
    quimica_5_2: data?.user?.quimica_5_2,
    ghc_5_2: data?.user?.ghc_5_2,
    ingles_5_2: data?.user?.ingles_5_2,
    castellano_5_2: data?.user?.castellano_5_2,
    orientacion_5_2: data?.user?.orientacion_5_2,
    grupo_estable_5_2: data?.user?.grupo_estable_5_2,
    soberania_5_2: data?.user?.soberania_5_2,
    ciencias_tierra_5_2: data?.user?.ciencias_tierra_5_2,
    matematica_5_3: data?.user?.matematica_5_3,
    deportes_5_3: data?.user?.deportes_5_3,
    biologia_5_3: data?.user?.biologia_5_3,
    fisica_5_3: data?.user?.fisica_5_3,
    quimica_5_3: data?.user?.quimica_5_3,
    ghc_5_3: data?.user?.ghc_5_3,
    ingles_5_3: data?.user?.ingles_5_3,
    castellano_5_3: data?.user?.castellano_5_3,
    orientacion_5_3: data?.user?.orientacion_5_3,
    grupo_estable_5_3: data?.user?.grupo_estable_5_3,
    soberania_5_3: data?.user?.soberania_5_3,
    ciencias_tierra_5_3: data?.user?.ciencias_tierra_5_3,

    notas : [{
      primero: [{
          lapso_1:{
              matematica :" matematica_1_1",
              deportes  : "notas.deportes_1_1",
              ciencias_naturales: "notas.ciencias_naturales_1_1",
              arte_convivencia: "notas.arte_convivencia_1_1",
              ghc: "notas.ghc_1_1",
              ingles: "notas.ingles_1_1",
              castellano: "notas.castellano_1_1",
              orientacion: "notas.orientacion_1_1",
              grupo_estable: "notas.grupo_estable_1_"

              
          },
          lapso_2:{
            matematica : data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
            deportes  : data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
            ciencias_naturales: data?.user?.notas[0]?.primero[0]?.lapso_2?.ciencias_naturales,
            arte_convivencia: data?.user?.notas[0]?.primero[0]?.lapso_2?.arte_convivencia,
            ghc: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
            ingles: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
            castellano: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
            orientacion: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
            grupo_estable: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable

            
        },
        lapso_3:{
          matematica : data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
          deportes  : data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
          ciencias_naturales: data?.user?.notas[0]?.primero[0]?.lapso_3?.ciencias_naturales,
          arte_convivencia: data?.user?.notas[0]?.primero[0]?.lapso_3?.arte_convivencia,
          ghc: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
          ingles: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
          castellano: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
          orientacion: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
          grupo_estable: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable

          
      },
      }],
      primero: [{
        lapso_1:{
            matematica : data?.user?.notas[0].segundo[0].lapso_1.matematica,
            deportes  : data?.user?.notas[0].segundo[0].lapso_1?.deportes,
            ciencias_naturales: data?.user?.notas[0].segundo[0].lapso_1?.ciencias_naturales,
            arte_convivencia: data?.user?.notas[0].segundo[0].lapso_1?.arte_convivencia,
            ghc: data?.user?.notas[0].segundo[0].lapso_1?.ghc,
            ingles: data?.user?.notas[0].segundo[0].lapso_1?.ingles,
            castellano: data?.user?.notas[0].segundo[0].lapso_1?.castellano,
            orientacion: data?.user?.notas[0].segundo[0].lapso_1?.orientacion,
            grupo_estable: data?.user?.notas[0].segundo[0].lapso_1?.grupo_estable

            
        },
        lapso_2:{
          matematica : data?.user?.notas[0]?.segundo[0]?.lapso_2?.matematica,
          deportes  : data?.user?.notas[0]?.segundo[0]?.lapso_2?.deportes,
          ciencias_naturales: data?.user?.notas[0]?.segundo[0]?.lapso_2?.ciencias_naturales,
          arte_convivencia: data?.user?.notas[0]?.segundo[0]?.lapso_2?.arte_convivencia,
          ghc: data?.user?.notas[0]?.segundo[0]?.lapso_1?.ghc,
          ingles: data?.user?.notas[0]?.segundo[0]?.lapso_2?.ingles,
          castellano: data?.user?.notas[0]?.segundo[0]?.lapso_2?.castellano,
          orientacion: data?.user?.notas[0]?.segundo[0]?.lapso_2?.orientacion,
          grupo_estable: data?.user?.notas[0]?.segundo[0]?.lapso_2?.grupo_estable

          
      },
      lapso_3:{
        matematica : data?.user?.notas[0]?.segundo[0]?.lapso_3?.matematica,
        deportes  : data?.user?.notas[0]?.segundo[0]?.lapso_3?.deportes,
        ciencias_naturales: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ciencias_naturales,
        arte_convivencia: data?.user?.notas[0]?.segundo[0]?.lapso_3?.arte_convivencia,
        ghc: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ghc,
        ingles: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ingles,
        castellano: data?.user?.notas[0]?.segundo[0]?.lapso_3?.castellano,
        orientacion: data?.user?.notas[0]?.segundo[0]?.lapso_3?.orientacion,
        grupo_estable: data?.user?.notas[0]?.segundo[0]?.lapso_3?.grupo_estable

        
    },
    }],
    tercero: [{
      lapso_1:{
          matematica : data?.user?.notas[0]?.tercero[0]?.lapso_1?.matematica,
          deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_1?.deportes,
          biologia: data?.user?.notas[0]?.tercero[0]?.lapso_1?.biologia,
          fisica: data?.user?.notas[0]?.tercero[0]?.lapso_1?.fisica,
          quimica: data?.user?.notas[0]?.tercero[0]?.lapso_1?.quimica,
          ghc: data?.user?.notas[0]?.tercero[0]?.lapso_1?.ghc,
          ingles: data?.user?.notas[0]?.tercero[0]?.lapso_1?.ingles,
          castellano: data?.user?.notas[0]?.tercero[0]?.lapso_1?.castellano,
          orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_1?.orientacion,
          grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_1?.grupo_estable

          
      },
      lapso_2:{
        matematica : data?.user?.notas[0]?.tercero[0]?.lapso_2?.matematica,
        deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_2?.deportes,
        biologia: data?.user?.notas[0]?.tercero[0]?.lapso_2?.biologia,
        fisica: data?.user?.notas[0]?.tercero[0]?.lapso_2?.fisica,
        quimica: data?.user?.notas[0]?.tercero[0]?.lapso_2?.quimica,
        ghc: data?.user?.notas[0]?.tercero[0]?.lapso_2?.ghc,
        ingles: data?.user?.notas[0]?.tercero[0]?.lapso_2?.ingles,
        castellano: data?.user?.notas[0]?.tercero[0]?.lapso_2?.castellano,
        orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_2?.orientacion,
        grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_2?.grupo_estable

        
    },
    lapso_3:{
      matematica : data?.user?.notas[0]?.tercero[0]?.lapso_3?.matematica,
      deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_3?.deportes,
      biologia: data?.user?.notas[0]?.tercero[0]?.lapso_3?.biologia,
      fisica: data?.user?.notas[0]?.tercero[0]?.lapso_3?.fisica,
      quimica: data?.user?.notas[0]?.tercero[0]?.lapso_3?.quimica,
      ghc: data?.user?.notas[0]?.tercero[0]?.lapso_3?.ghc,
      ingles: data?.user?.notas[0]?.tercero[0]?.lapso_3?.ingles,
      castellano: data?.user?.notas[0]?.tercero[0]?.lapso_3?.castellano,
      orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_3?.orientacion,
      grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_3?.grupo_estable

      
  },
  }],
  cuarto: [{
    lapso_1:{
        matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_1?.matematica,
        deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_1?.deportes,
        biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.biologia,
        fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.fisica,
        quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.quimica,
        ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.ghc,
        ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.ingles,
        castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.castellano,
        orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.orientacion,
        grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.grupo_estable,
        soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.soberania

        
    },
    lapso_2:{
      matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_2?.matematica,
      deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_2?.deportes,
      biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.biologia,
      fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.fisica,
      quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.quimica,
      ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.ghc,
      ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.ingles,
      castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.castellano,
      orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.orientacion,
      grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.grupo_estable,
      soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.soberania

      
  },
  lapso_3:{
    matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_3?.matematica,
    deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_3?.deportes,
    biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.biologia,
    fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.fisica,
    quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.quimica,
    ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.ghc,
    ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.ingles,
    castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.castellano,
    orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.orientacion,
    grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.grupo_estable,
    soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.soberania
    

    
},
}],
cuarto: [{
  lapso_1:{
      matematica : data?.user?.notas[0]?.quinto[0]?.lapso_1?.matematica,
      deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_1?.deportes,
      biologia: data?.user?.notas[0]?.quinto[0]?.lapso_1?.biologia,
      fisica: data?.user?.notas[0]?.quinto[0]?.lapso_1?.fisica,
      quimica: data?.user?.notas[0]?.quinto[0]?.lapso_1?.quimica,
      ghc: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ghc,
      ingles: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ingles,
      castellano: data?.user?.notas[0]?.quinto[0]?.lapso_1?.castellano,
      orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_1?.orientacion,
      grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_1?.grupo_estable,
      soberania: data?.user?.notas[0]?.quinto[0]?.lapso_1?.soberania,
      ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ciencias_tierra

      
  },
  lapso_2:{
    matematica : data?.user?.notas[0]?.quinto[0]?.lapso_2?.matematica,
    deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_2?.deportes,
    biologia: data?.user?.notas[0]?.quinto[0]?.lapso_2?.biologia,
    fisica: data?.user?.notas[0]?.quinto[0]?.lapso_2?.fisica,
    quimica: data?.user?.notas[0]?.quinto[0]?.lapso_2?.quimica,
    ghc: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ghc,
    ingles: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ingles,
    castellano: data?.user?.notas[0]?.quinto[0]?.lapso_2?.castellano,
    orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_2?.orientacion,
    grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_2?.grupo_estable,
    soberania: data?.user?.notas[0]?.quinto[0]?.lapso_2?.soberania,
    ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ciencias_tierra

    
},
lapso_3:{
  matematica : data?.user?.notas[0]?.quinto[0]?.lapso_3?.matematica,
  deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_3?.deportes,
  biologia: data?.user?.notas[0]?.quinto[0]?.lapso_3?.biologia,
  fisica: data?.user?.notas[0]?.quinto[0]?.lapso_3?.fisica,
  quimica: data?.user?.notas[0]?.quinto[0]?.lapso_3?.quimica,
  ghc: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ghc,
  ingles: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ingles,
  castellano: data?.user?.notas[0]?.quinto[0]?.lapso_3?.castellano,
  orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_3?.orientacion,
  grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_3?.grupo_estable,
  soberania: data?.user?.notas[0]?.quinto[0]?.lapso_3?.soberania,
  ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ciencias_tierra

  

  
},
}],
//   cuarto: [{
//     lapso_1:{
//         matematica : cuartoAnoMatematica_1,
//         deportes  : cuartoAnoDeporte_1,
//         biologia: cuartoAnoBiologia_1,
//         fisica: cuartoAnoFisica_1,
//         quimica: cuartoAnoQuimica_1,
//         ghc: cuartoAnoGHC_1,
//         ingles: cuartoAnoIngles_1,
//         castellano: cuartoAnoCastellano_1,
//         orientacion: cuartoAnoOrientacion_1,
//         grupo_estable: cuartoAnoGrupoEstable_1,
//         soberania: cuartoAnoSoberania_1

//     },
//     lapso_2:{
//       matematica : cuartoAnoMatematica_2,
//       deportes  : cuartoAnoDeporte_2,
//       biologia: cuartoAnoBiologia_2,
//       fisica: cuartoAnoFisica_2,
//       quimica: cuartoAnoQuimica_2,
//       ghc: cuartoAnoGHC_2,
//       ingles: cuartoAnoIngles_2,
//       castellano: cuartoAnoCastellano_2,
//       orientacion: cuartoAnoOrientacion_2,
//       grupo_estable: cuartoAnoGrupoEstable_2,
//       soberania: cuartoAnoSoberania_2

//   },
//   lapso_3:{
//     matematica : cuartoAnoMatematica_3,
//     deportes  : cuartoAnoDeporte_3,
//     biologia: cuartoAnoBiologia_3,
//     fisica: cuartoAnoFisica_3,
//     quimica: cuartoAnoQuimica_3,
//     ghc: cuartoAnoGHC_3,
//     ingles: cuartoAnoIngles_3,
//     castellano: cuartoAnoCastellano_3,
//     orientacion: cuartoAnoOrientacion_3,
//     grupo_estable: cuartoAnoGrupoEstable_3,
//     soberania: cuartoAnoSoberania_3

// }
// }],
// quinto: [{
//   lapso_1:{
//       matematica : quintoAnoMatematica_1,
//       deportes  : quintoAnoDeporte_1,
//       biologia: quintoAnoBiologia_1,
//       fisica: quintoAnoFisica_1,
//       quimica: quintoAnoQuimica_1,
//       ghc: quintoAnoGHC_1,
//       ingles: quintoAnoIngles_1,
//       castellano: quintoAnoCastellano_1,
//       orientacion: quintoAnoOrientacion_1,
//       grupo_estable: quintoAnoGrupoEstable_1,
//       soberania: quintoAnoSoberania_1,
//       ciencias_tierra: quintoAnoCienciasTierra_1

      
//   },
//   lapso_2:{
//     matematica : quintoAnoMatematica_2,
//     deportes  : quintoAnoDeporte_2,
//     biologia: quintoAnoBiologia_2,
//     fisica: quintoAnoFisica_2,
//     quimica: quintoAnoQuimica_2,
//     ghc: quintoAnoGHC_2,
//     ingles: quintoAnoIngles_2,
//     castellano: quintoAnoCastellano_2,
//     orientacion: quintoAnoOrientacion_2,
//     grupo_estable: quintoAnoGrupoEstable_2,
//     soberania: quintoAnoSoberania_2,
//     ciencias_tierra: quintoAnoCienciasTierra_2

    
// },
// lapso_3:{
//   matematica : quintoAnoMatematica_3,
//   deportes  : quintoAnoDeporte_3,
//   biologia: quintoAnoBiologia_3,
//   fisica: quintoAnoFisica_3,
//   quimica: quintoAnoQuimica_3,
//   ghc: quintoAnoGHC_3,
//   ingles: quintoAnoIngles_3,
//   castellano: quintoAnoCastellano_3,
//   orientacion: quintoAnoOrientacion_3,
//   grupo_estable: quintoAnoGrupoEstable_3,
//   soberania: quintoAnoSoberania_3,
//   ciencias_tierra: quintoAnoCienciasTierra_3

  
// }
// }]
    
  }]

  })

  const [notas, setNotas] = useState([{
    primero: [{
        lapso_1:{
            matematica : datos.matematica_1_1,
            deportes  : datos.deportes_1_1,
            ciencias_naturales: datos.ciencias_naturales_1_1,
            arte_convivencia: datos.arte_convivencia_1_1,
            ghc: datos.ghc_1_1,
            ingles: datos.ingles_1_1,
            castellano: datos.castellano_1_1,
            orientacion: datos.orientacion_1_1,
            grupo_estable: datos.grupo_estable_1_1

            
        },
        lapso_2:{
          matematica : data?.user?.notas[0]?.primero[0]?.lapso_2?.matematica,
          deportes  : data?.user?.notas[0]?.primero[0]?.lapso_2?.deportes,
          ciencias_naturales: data?.user?.notas[0]?.primero[0]?.lapso_2?.ciencias_naturales,
          arte_convivencia: data?.user?.notas[0]?.primero[0]?.lapso_2?.arte_convivencia,
          ghc: data?.user?.notas[0]?.primero[0]?.lapso_1?.ghc,
          ingles: data?.user?.notas[0]?.primero[0]?.lapso_2?.ingles,
          castellano: data?.user?.notas[0]?.primero[0]?.lapso_2?.castellano,
          orientacion: data?.user?.notas[0]?.primero[0]?.lapso_2?.orientacion,
          grupo_estable: data?.user?.notas[0]?.primero[0]?.lapso_2?.grupo_estable

          
      },
      lapso_3:{
        matematica : data?.user?.notas[0]?.primero[0]?.lapso_3?.matematica,
        deportes  : data?.user?.notas[0]?.primero[0]?.lapso_3?.deportes,
        ciencias_naturales: data?.user?.notas[0]?.primero[0]?.lapso_3?.ciencias_naturales,
        arte_convivencia: data?.user?.notas[0]?.primero[0]?.lapso_3?.arte_convivencia,
        ghc: data?.user?.notas[0]?.primero[0]?.lapso_3?.ghc,
        ingles: data?.user?.notas[0]?.primero[0]?.lapso_3?.ingles,
        castellano: data?.user?.notas[0]?.primero[0]?.lapso_3?.castellano,
        orientacion: data?.user?.notas[0]?.primero[0]?.lapso_3?.orientacion,
        grupo_estable: data?.user?.notas[0]?.primero[0]?.lapso_3?.grupo_estable

        
    },
    }],
    primero: [{
      lapso_1:{
          matematica : data?.user?.notas[0].segundo[0].lapso_1.matematica,
          deportes  : data?.user?.notas[0].segundo[0].lapso_1?.deportes,
          ciencias_naturales: data?.user?.notas[0].segundo[0].lapso_1?.ciencias_naturales,
          arte_convivencia: data?.user?.notas[0].segundo[0].lapso_1?.arte_convivencia,
          ghc: data?.user?.notas[0].segundo[0].lapso_1?.ghc,
          ingles: data?.user?.notas[0].segundo[0].lapso_1?.ingles,
          castellano: data?.user?.notas[0].segundo[0].lapso_1?.castellano,
          orientacion: data?.user?.notas[0].segundo[0].lapso_1?.orientacion,
          grupo_estable: data?.user?.notas[0].segundo[0].lapso_1?.grupo_estable

          
      },
      lapso_2:{
        matematica : data?.user?.notas[0]?.segundo[0]?.lapso_2?.matematica,
        deportes  : data?.user?.notas[0]?.segundo[0]?.lapso_2?.deportes,
        ciencias_naturales: data?.user?.notas[0]?.segundo[0]?.lapso_2?.ciencias_naturales,
        arte_convivencia: data?.user?.notas[0]?.segundo[0]?.lapso_2?.arte_convivencia,
        ghc: data?.user?.notas[0]?.segundo[0]?.lapso_1?.ghc,
        ingles: data?.user?.notas[0]?.segundo[0]?.lapso_2?.ingles,
        castellano: data?.user?.notas[0]?.segundo[0]?.lapso_2?.castellano,
        orientacion: data?.user?.notas[0]?.segundo[0]?.lapso_2?.orientacion,
        grupo_estable: data?.user?.notas[0]?.segundo[0]?.lapso_2?.grupo_estable

        
    },
    lapso_3:{
      matematica : data?.user?.notas[0]?.segundo[0]?.lapso_3?.matematica,
      deportes  : data?.user?.notas[0]?.segundo[0]?.lapso_3?.deportes,
      ciencias_naturales: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ciencias_naturales,
      arte_convivencia: data?.user?.notas[0]?.segundo[0]?.lapso_3?.arte_convivencia,
      ghc: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ghc,
      ingles: data?.user?.notas[0]?.segundo[0]?.lapso_3?.ingles,
      castellano: data?.user?.notas[0]?.segundo[0]?.lapso_3?.castellano,
      orientacion: data?.user?.notas[0]?.segundo[0]?.lapso_3?.orientacion,
      grupo_estable: data?.user?.notas[0]?.segundo[0]?.lapso_3?.grupo_estable

      
  },
  }],
  tercero: [{
    lapso_1:{
        matematica : data?.user?.notas[0]?.tercero[0]?.lapso_1?.matematica,
        deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_1?.deportes,
        biologia: data?.user?.notas[0]?.tercero[0]?.lapso_1?.biologia,
        fisica: data?.user?.notas[0]?.tercero[0]?.lapso_1?.fisica,
        quimica: data?.user?.notas[0]?.tercero[0]?.lapso_1?.quimica,
        ghc: data?.user?.notas[0]?.tercero[0]?.lapso_1?.ghc,
        ingles: data?.user?.notas[0]?.tercero[0]?.lapso_1?.ingles,
        castellano: data?.user?.notas[0]?.tercero[0]?.lapso_1?.castellano,
        orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_1?.orientacion,
        grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_1?.grupo_estable

        
    },
    lapso_2:{
      matematica : data?.user?.notas[0]?.tercero[0]?.lapso_2?.matematica,
      deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_2?.deportes,
      biologia: data?.user?.notas[0]?.tercero[0]?.lapso_2?.biologia,
      fisica: data?.user?.notas[0]?.tercero[0]?.lapso_2?.fisica,
      quimica: data?.user?.notas[0]?.tercero[0]?.lapso_2?.quimica,
      ghc: data?.user?.notas[0]?.tercero[0]?.lapso_2?.ghc,
      ingles: data?.user?.notas[0]?.tercero[0]?.lapso_2?.ingles,
      castellano: data?.user?.notas[0]?.tercero[0]?.lapso_2?.castellano,
      orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_2?.orientacion,
      grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_2?.grupo_estable

      
  },
  lapso_3:{
    matematica : data?.user?.notas[0]?.tercero[0]?.lapso_3?.matematica,
    deportes  : data?.user?.notas[0]?.tercero[0]?.lapso_3?.deportes,
    biologia: data?.user?.notas[0]?.tercero[0]?.lapso_3?.biologia,
    fisica: data?.user?.notas[0]?.tercero[0]?.lapso_3?.fisica,
    quimica: data?.user?.notas[0]?.tercero[0]?.lapso_3?.quimica,
    ghc: data?.user?.notas[0]?.tercero[0]?.lapso_3?.ghc,
    ingles: data?.user?.notas[0]?.tercero[0]?.lapso_3?.ingles,
    castellano: data?.user?.notas[0]?.tercero[0]?.lapso_3?.castellano,
    orientacion: data?.user?.notas[0]?.tercero[0]?.lapso_3?.orientacion,
    grupo_estable: data?.user?.notas[0]?.tercero[0]?.lapso_3?.grupo_estable

    
},
}],
cuarto: [{
  lapso_1:{
      matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_1?.matematica,
      deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_1?.deportes,
      biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.biologia,
      fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.fisica,
      quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.quimica,
      ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.ghc,
      ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.ingles,
      castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.castellano,
      orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.orientacion,
      grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.grupo_estable,
      soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_1?.soberania

      
  },
  lapso_2:{
    matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_2?.matematica,
    deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_2?.deportes,
    biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.biologia,
    fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.fisica,
    quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.quimica,
    ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.ghc,
    ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.ingles,
    castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.castellano,
    orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.orientacion,
    grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.grupo_estable,
    soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_2?.soberania

    
},
lapso_3:{
  matematica : data?.user?.notas[0]?.cuarto[0]?.lapso_3?.matematica,
  deportes  : data?.user?.notas[0]?.cuarto[0]?.lapso_3?.deportes,
  biologia: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.biologia,
  fisica: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.fisica,
  quimica: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.quimica,
  ghc: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.ghc,
  ingles: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.ingles,
  castellano: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.castellano,
  orientacion: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.orientacion,
  grupo_estable: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.grupo_estable,
  soberania: data?.user?.notas[0]?.cuarto[0]?.lapso_3?.soberania
  

  
},
}],
cuarto: [{
lapso_1:{
    matematica : data?.user?.notas[0]?.quinto[0]?.lapso_1?.matematica,
    deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_1?.deportes,
    biologia: data?.user?.notas[0]?.quinto[0]?.lapso_1?.biologia,
    fisica: data?.user?.notas[0]?.quinto[0]?.lapso_1?.fisica,
    quimica: data?.user?.notas[0]?.quinto[0]?.lapso_1?.quimica,
    ghc: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ghc,
    ingles: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ingles,
    castellano: data?.user?.notas[0]?.quinto[0]?.lapso_1?.castellano,
    orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_1?.orientacion,
    grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_1?.grupo_estable,
    soberania: data?.user?.notas[0]?.quinto[0]?.lapso_1?.soberania,
    ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_1?.ciencias_tierra

    
},
lapso_2:{
  matematica : data?.user?.notas[0]?.quinto[0]?.lapso_2?.matematica,
  deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_2?.deportes,
  biologia: data?.user?.notas[0]?.quinto[0]?.lapso_2?.biologia,
  fisica: data?.user?.notas[0]?.quinto[0]?.lapso_2?.fisica,
  quimica: data?.user?.notas[0]?.quinto[0]?.lapso_2?.quimica,
  ghc: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ghc,
  ingles: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ingles,
  castellano: data?.user?.notas[0]?.quinto[0]?.lapso_2?.castellano,
  orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_2?.orientacion,
  grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_2?.grupo_estable,
  soberania: data?.user?.notas[0]?.quinto[0]?.lapso_2?.soberania,
  ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_2?.ciencias_tierra

  
},
lapso_3:{
matematica : data?.user?.notas[0]?.quinto[0]?.lapso_3?.matematica,
deportes  : data?.user?.notas[0]?.quinto[0]?.lapso_3?.deportes,
biologia: data?.user?.notas[0]?.quinto[0]?.lapso_3?.biologia,
fisica: data?.user?.notas[0]?.quinto[0]?.lapso_3?.fisica,
quimica: data?.user?.notas[0]?.quinto[0]?.lapso_3?.quimica,
ghc: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ghc,
ingles: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ingles,
castellano: data?.user?.notas[0]?.quinto[0]?.lapso_3?.castellano,
orientacion: data?.user?.notas[0]?.quinto[0]?.lapso_3?.orientacion,
grupo_estable: data?.user?.notas[0]?.quinto[0]?.lapso_3?.grupo_estable,
soberania: data?.user?.notas[0]?.quinto[0]?.lapso_3?.soberania,
ciencias_tierra: data?.user?.notas[0]?.quinto[0]?.lapso_3?.ciencias_tierra




},
}],

  
}])



  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });

    
   
    console.log(datos)
    console.log(notas)
    console.log(datos.matematica_1_1)
  };

  useEffect(()=>{
    console.log(notas)
  }, [datos])

  
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

  //ID
   
  
  //NEW WAY TO FETCH DATA


  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("admin/login");
  }

  function click (){
    console.log(data)
    console.log(datos.notas[0].primero[0].lapso_1.matematica)
    console.log(data?.user?.notas[0].primero[0].lapso_1.matematica)
    return data
    
  }
  
  const {
    cedula, 
    email, 
    nombre, 
    apellido, 
    password, 
    edad, 
    seccion, 
    curso_actual,
    matematica_1_1,
    matematica_1_2,
    matematica_1_3,
    matematica_2_1,
    matematica_2_2,
    matematica_2_3,
    matematica_3_1,
    matematica_3_2,
    matematica_3_3,
    matematica_4_1,
    matematica_4_2,
    matematica_4_3,
    matematica_5_1,
    matematica_5_2,
    matematica_5_3,
    deporte_1_1,
    deporte_1_2,
    deporte_1_3,
    deporte_2_1,
    deporte_2_2,
    deporte_2_3,
    deporte_3_1,
    deporte_3_2,
    deporte_3_3,
    deporte_4_1,
    deporte_4_2,
    deporte_4_3,
    deporte_5_1,
    deporte_5_2,
    deporte_5_3,
    orientacion_1_1,
    orientacion_1_2,
    orientacion_1_3,
    orientacion_2_1,
    orientacion_2_2,
    orientacion_2_3,
    orientacion_3_1,
    orientacion_3_2,
    orientacion_3_3,
    orientacion_4_1,
    orientacion_4_2,
    orientacion_4_3,
    orientacion_5_1,
    orientacion_5_2,
    orientacion_5_3,
    grupo_estable_1_1,
    grupo_estable_1_2,
    grupo_estable_1_3,
    grupo_estable_2_1,
    grupo_estable_2_2,
    grupo_estable_2_3,
    grupo_estable_3_1,
    grupo_estable_3_2,
    grupo_estable_3_3,
    grupo_estable_4_1,
    grupo_estable_4_2,
    grupo_estable_4_3,
    grupo_estable_5_1,
    grupo_estable_5_2,
    grupo_estable_5_3,
    ghc_1_1,
    ghc_1_2,
    ghc_1_3,
    ghc_2_1,
    ghc_2_2,
    ghc_2_3,
    ghc_3_1,
    ghc_3_2,
    ghc_3_3,
    ghc_4_1,
    ghc_4_2,
    ghc_4_3,
    ghc_5_1,
    ghc_5_2,
    ghc_5_3,
    castellano_1_1,
    castellano_1_2,
    castellano_1_3,
    castellano_2_1,
    castellano_2_2,
    castellano_2_3,
    castellano_3_1,
    castellano_3_2,
    castellano_3_3,
    castellano_4_1,
    castellano_4_2,
    castellano_4_3,
    castellano_5_1,
    castellano_5_2,
    castellano_5_3,
    ingles_1_1,
    ingles_1_2,
    ingles_1_3,
    ingles_2_1,
    ingles_2_2,
    ingles_2_3,
    ingles_3_1,
    ingles_3_2,
    ingles_3_3,
    ingles_4_1,
    ingles_4_2,
    ingles_4_3,
    ingles_5_1,
    ingles_5_2,
    ingles_5_3,
    quimica_1_1,
    quimica_1_2,
    quimica_1_3,
    quimica_2_1,
    quimica_2_2,
    quimica_2_3,
    quimica_3_1,
    quimica_3_2,
    quimica_3_3,
    quimica_4_1,
    quimica_4_2,
    quimica_4_3,
    quimica_5_1,
    quimica_5_2,
    quimica_5_3,
    biologia_3_1,
    biologia_3_2,
    biologia_3_3,
    biologia_4_1,
    biologia_4_2,
    biologia_4_3,
    biologia_5_1,
    biologia_5_2,
    biologia_5_3,
    fisica_3_1,
    fisica_3_2,
    fisica_3_3,
    fisica_4_1,
    fisica_4_2,
    fisica_4_3,
    fisica_5_1,
    fisica_5_2,
    fisica_5_3,
    ciencias_naturales_1_1,
    ciencias_naturales_1_2,
    ciencias_naturales_1_3,
    ciencias_naturales_2_1,
    ciencias_naturales_2_2,
    ciencias_naturales_2_3,
    arte_convivencia_1_1,
    arte_convivencia_1_2,
    arte_convivencia_1_3,
    arte_convivencia_2_1,
    arte_convivencia_2_2,
    arte_convivencia_2_3,
    soberania_4_1,
    soberania_4_2,
    soberania_4_3,
    soberania_5_1,
    soberania_5_2,
    soberania_5_3,
    ciencias_tierra_5_1,
    ciencias_tierra_5_2,
    ciencias_tierra_5_3
  } = datos;
  
  // Ejemplo de uso de los nombres extraídos
  console.log(matematica_1_1); // nombre
  console.log(matematica_1_2); // nombre
  console.log(matematica_1_3); // nombre
  // ...
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const nombre = e.target[0].value;
    // const apellido = e.target[1].value;
    // const cedula = e.target[2].value;
    // const email = e.target[3].value;
    // const edad = e.target[4].value;
    // const password = e.target[5].value;
    // const curso_actual = e.target[6].value;
    // const seccion = e.target[7].value;

    const primerAnoMatematica_1 = e.target[8].value;
    const primerAnoDeporte_1 = e.target[9].value;
    const primerAnoCienciasNaturales_1 = e.target[10].value;
    const primerAnoArteConvivencia_1 = e.target[11].value;
    const primerAnoGHC_1 = e.target[12].value;
    const primerAnoIngles_1 = e.target[13].value;
    const primerAnoCastellano_1 = e.target[14].value;
    const primerAnoOrientacion_1 = e.target[15].value;
    const primerAnoGrupoEstable_1 = e.target[16].value;

    const primerAnoMatematica_2 = e.target[17].value;
    const primerAnoDeporte_2 = e.target[18].value;
    const primerAnoCienciasNaturales_2 = e.target[19].value;
    const primerAnoArteConvivencia_2 = e.target[20].value;
    const primerAnoGHC_2 = e.target[21].value;
    const primerAnoIngles_2 = e.target[22].value;
    const primerAnoCastellano_2 = e.target[23].value;
    const primerAnoOrientacion_2 = e.target[24].value;
    const primerAnoGrupoEstable_2 = e.target[25].value;

    const primerAnoMatematica_3 = e.target[26].value;
    const primerAnoDeporte_3 = e.target[27].value;
    const primerAnoCienciasNaturales_3 = e.target[28].value;
    const primerAnoArteConvivencia_3 = e.target[29].value;
    const primerAnoGHC_3 = e.target[30].value;
    const primerAnoIngles_3 = e.target[31].value;
    const primerAnoCastellano_3 = e.target[32].value;
    const primerAnoOrientacion_3 = e.target[33].value;
    const primerAnoGrupoEstable_3 = e.target[34].value;

    const segundoAnoMatematica_1 = e.target[35].value;
    const segundoAnoDeporte_1 = e.target[36].value;
    const segundoAnoCienciasNaturales_1 = e.target[37].value;
    const segundoAnoArteConvivencia_1 = e.target[38].value;
    const segundoAnoGHC_1 = e.target[39].value;
    const segundoAnoIngles_1 = e.target[40].value;
    const segundoAnoCastellano_1 = e.target[41].value;
    const segundoAnoOrientacion_1 = e.target[42].value;
    const segundoAnoGrupoEstable_1 = e.target[43].value;

    const segundoAnoMatematica_2 = e.target[44].value;
    const segundoAnoDeporte_2 = e.target[45].value;
    const segundoAnoCienciasNaturales_2 = e.target[46].value;
    const segundoAnoArteConvivencia_2 = e.target[47].value;
    const segundoAnoGHC_2 = e.target[48].value;
    const segundoAnoIngles_2 = e.target[49].value;
    const segundoAnoCastellano_2 = e.target[50].value;
    const segundoAnoOrientacion_2 = e.target[51].value;
    const segundoAnoGrupoEstable_2 = e.target[52].value;

    const segundoAnoMatematica_3 = e.target[53].value;
    const segundoAnoDeporte_3 = e.target[54].value;
    const segundoAnoCienciasNaturales_3 = e.target[55].value;
    const segundoAnoArteConvivencia_3 = e.target[56].value;
    const segundoAnoGHC_3 = e.target[57].value;
    const segundoAnoIngles_3 = e.target[58].value;
    const segundoAnoCastellano_3 = e.target[59].value;
    const segundoAnoOrientacion_3 = e.target[60].value;
    const segundoAnoGrupoEstable_3 = e.target[61].value;

    const tercerAnoMatematica_1 = e.target[62].value;
    const tercerAnoDeporte_1 = e.target[63].value;
    const tercerAnoBiologia_1 = e.target[64].value;
    const tercerAnoFisica_1 = e.target[65].value;
    const tercerAnoQuimica_1 = e.target[66].value;
    const tercerAnoCastellano_1 = e.target[67].value;
    const tercerAnoIngles_1 = e.target[68].value;
    const tercerAnoGHC_1 = e.target[69].value;
    const tercerAnoOrientacion_1 = e.target[70].value;
    const tercerAnoGrupoEstable_1 = e.target[71].value;

    const tercerAnoMatematica_2 = e.target[72].value;
    const tercerAnoDeporte_2 = e.target[73].value;
    const tercerAnoBiologia_2 = e.target[74].value;
    const tercerAnoFisica_2 = e.target[75].value;
    const tercerAnoQuimica_2 = e.target[76].value;
    const tercerAnoCastellano_2 = e.target[77].value;
    const tercerAnoIngles_2 = e.target[78].value;
    const tercerAnoGHC_2 = e.target[79].value;
    const tercerAnoOrientacion_2 = e.target[80].value;
    const tercerAnoGrupoEstable_2 = e.target[81].value;

    const tercerAnoMatematica_3 = e.target[82].value;
    const tercerAnoDeporte_3 = e.target[83].value;
    const tercerAnoBiologia_3 = e.target[84].value;
    const tercerAnoFisica_3 = e.target[85].value;
    const tercerAnoQuimica_3 = e.target[86].value;
    const tercerAnoCastellano_3 = e.target[87].value;
    const tercerAnoIngles_3 = e.target[88].value;
    const tercerAnoGHC_3 = e.target[89].value;
    const tercerAnoOrientacion_3 = e.target[90].value;
    const tercerAnoGrupoEstable_3 = e.target[91].value;

    const cuartoAnoMatematica_1 = e.target[92].value;
    const cuartoAnoDeporte_1 = e.target[93].value;
    const cuartoAnoBiologia_1 = e.target[94].value;
    const cuartoAnoFisica_1 = e.target[95].value;
    const cuartoAnoQuimica_1 = e.target[96].value;
    const cuartoAnoCastellano_1 = e.target[97].value;
    const cuartoAnoIngles_1 = e.target[98].value;
    const cuartoAnoGHC_1 = e.target[99].value;
    const cuartoAnoOrientacion_1 = e.target[100].value;
    const cuartoAnoGrupoEstable_1 = e.target[101].value;
    const cuartoAnoSoberania_1 = e.target[102].value;

    const cuartoAnoMatematica_2 = e.target[103].value;
    const cuartoAnoDeporte_2 = e.target[104].value;
    const cuartoAnoBiologia_2 = e.target[105].value;
    const cuartoAnoFisica_2 = e.target[106].value;
    const cuartoAnoQuimica_2 = e.target[107].value;
    const cuartoAnoCastellano_2 = e.target[108].value;
    const cuartoAnoIngles_2 = e.target[109].value;
    const cuartoAnoGHC_2 = e.target[110].value;
    const cuartoAnoOrientacion_2 = e.target[111].value;
    const cuartoAnoGrupoEstable_2 = e.target[112].value;
    const cuartoAnoSoberania_2 = e.target[113].value;

    const cuartoAnoMatematica_3 = e.target[114].value;
    const cuartoAnoDeporte_3 = e.target[115].value;
    const cuartoAnoBiologia_3 = e.target[116].value;
    const cuartoAnoFisica_3 = e.target[117].value;
    const cuartoAnoQuimica_3 = e.target[118].value;
    const cuartoAnoCastellano_3 = e.target[119].value;
    const cuartoAnoIngles_3 = e.target[120].value;
    const cuartoAnoGHC_3 = e.target[121].value;
    const cuartoAnoOrientacion_3 = e.target[122].value;
    const cuartoAnoGrupoEstable_3 = e.target[123].value;
    const cuartoAnoSoberania_3 = e.target[124].value;

    const quintoAnoMatematica_1 = e.target[125].value;
    const quintoAnoDeporte_1 = e.target[126].value;
    const quintoAnoBiologia_1 = e.target[127].value;
    const quintoAnoFisica_1 = e.target[128].value;
    const quintoAnoQuimica_1 = e.target[129].value;
    const quintoAnoCastellano_1 = e.target[130].value;
    const quintoAnoIngles_1 = e.target[131].value;
    const quintoAnoGHC_1 = e.target[132].value;
    const quintoAnoOrientacion_1 = e.target[133].value;
    const quintoAnoGrupoEstable_1 = e.target[134].value;
    const quintoAnoSoberania_1 = e.target[135].value;
    const quintoAnoCienciasTierra_1 = e.target[136].value;

    const quintoAnoMatematica_2 = e.target[137].value;
    const quintoAnoDeporte_2 = e.target[138].value;
    const quintoAnoBiologia_2 = e.target[139].value;
    const quintoAnoFisica_2 = e.target[140].value;
    const quintoAnoQuimica_2 = e.target[141].value;
    const quintoAnoCastellano_2 = e.target[142].value;
    const quintoAnoIngles_2 = e.target[143].value;
    const quintoAnoGHC_2 = e.target[144].value;
    const quintoAnoOrientacion_2 = e.target[145].value;
    const quintoAnoGrupoEstable_2 = e.target[146].value;
    const quintoAnoSoberania_2 = e.target[147].value;
    const quintoAnoCienciasTierra_2 = e.target[148].value;

    const quintoAnoMatematica_3 = e.target[150].value;
    const quintoAnoDeporte_3 = e.target[151].value;
    const quintoAnoBiologia_3 = e.target[152].value;
    const quintoAnoFisica_3 = e.target[153].value;
    const quintoAnoQuimica_3 = e.target[154].value;
    const quintoAnoCastellano_3 = e.target[155].value;
    const quintoAnoIngles_3 = e.target[156].value;
    const quintoAnoGHC_3 = e.target[157].value;
    const quintoAnoOrientacion_3 = e.target[158].value;
    const quintoAnoGrupoEstable_3 = e.target[159].value;
    const quintoAnoSoberania_3 = e.target[160].value;
    const quintoAnoCienciasTierra_3 = e.target[161].value;

    const notas = [{
        primero: [{
            lapso_1:{
                matematica : primerAnoMatematica_1,
                deportes  : primerAnoDeporte_1,
                ciencias_naturales: primerAnoCienciasNaturales_1,
                arte_convivencia: primerAnoArteConvivencia_1,
                ghc: primerAnoGHC_1,
                ingles: primerAnoIngles_1,
                castellano: primerAnoCastellano_1,
                orientacion: primerAnoOrientacion_1,
                grupo_estable: primerAnoGrupoEstable_1

                
            },
            lapso_2:{
              matematica : primerAnoMatematica_2,
              deportes  : primerAnoDeporte_2,
              ciencias_naturales: primerAnoCienciasNaturales_2,
              arte_convivencia: primerAnoArteConvivencia_2,
              ghc: primerAnoGHC_2,
              ingles: primerAnoIngles_2,
              castellano: primerAnoCastellano_2,
              orientacion: primerAnoOrientacion_2,
              grupo_estable: primerAnoGrupoEstable_2

              
          },
          lapso_3:{
            matematica : primerAnoMatematica_3,
            deportes  : primerAnoDeporte_3,
            ciencias_naturales: primerAnoCienciasNaturales_3,
            arte_convivencia: primerAnoArteConvivencia_3,
            ghc: primerAnoGHC_3,
            ingles: primerAnoIngles_3,
            castellano: primerAnoCastellano_3,
            orientacion: primerAnoOrientacion_3,
            grupo_estable: primerAnoGrupoEstable_3

            
        },
        }],
        segundo: [{
          lapso_1:{
              matematica : segundoAnoMatematica_1,
              deportes  : segundoAnoDeporte_1,
              ciencias_naturales: segundoAnoCienciasNaturales_1,
              arte_convivencia: segundoAnoArteConvivencia_1,
              ghc: segundoAnoGHC_1,
              ingles: segundoAnoIngles_1,
              castellano: segundoAnoCastellano_1,
              orientacion: segundoAnoOrientacion_1,
              grupo_estable: segundoAnoGrupoEstable_1

          },
          lapso_2:{
            matematica : segundoAnoMatematica_2,
            deportes  : segundoAnoDeporte_2,
            ciencias_naturales: segundoAnoCienciasNaturales_2,
            arte_convivencia: segundoAnoArteConvivencia_2,
            ghc: segundoAnoGHC_2,
            ingles: segundoAnoIngles_2,
            castellano: segundoAnoCastellano_2,
            orientacion: segundoAnoOrientacion_2,
            grupo_estable: segundoAnoGrupoEstable_2

            
        },
        lapso_3:{
          matematica : segundoAnoMatematica_1,
          deportes  : segundoAnoDeporte_1,
          ciencias_naturales: segundoAnoCienciasNaturales_1,
          arte_convivencia: segundoAnoArteConvivencia_1,
          ghc: segundoAnoGHC_1,
          ingles: segundoAnoIngles_1,
          castellano: segundoAnoCastellano_1,
          orientacion: segundoAnoOrientacion_1,
          grupo_estable: segundoAnoGrupoEstable_1

          
      },
      }],
      tercero: [{
        lapso_1:{
            matematica : tercerAnoMatematica_1,
            deportes  : tercerAnoDeporte_1,
            biologia: tercerAnoBiologia_1,
            fisica: tercerAnoFisica_1,
            quimica: tercerAnoQuimica_1,
            ghc: tercerAnoGHC_1,
            ingles: tercerAnoIngles_1,
            castellano: tercerAnoCastellano_1,
            orientacion: tercerAnoOrientacion_1,
            grupo_estable: tercerAnoGrupoEstable_1

            
        },
        lapso_2:{
          matematica : tercerAnoMatematica_2,
          deportes  : tercerAnoDeporte_2,
          biologia: tercerAnoBiologia_2,
          fisica: tercerAnoFisica_2,
          quimica: tercerAnoQuimica_2,
          ghc: tercerAnoGHC_2,
          ingles: tercerAnoIngles_2,
          castellano: tercerAnoCastellano_2,
          orientacion: tercerAnoOrientacion_2,
          grupo_estable: tercerAnoGrupoEstable_2

          
      },
      lapso_3:{
        matematica : tercerAnoMatematica_3,
        deportes  : tercerAnoDeporte_3,
        biologia: tercerAnoBiologia_3,
        fisica: tercerAnoFisica_3,
        quimica: tercerAnoQuimica_3,
        ghc: tercerAnoGHC_3,
        ingles: tercerAnoIngles_3,
        castellano: tercerAnoCastellano_3,
        orientacion: tercerAnoOrientacion_3,
        grupo_estable: tercerAnoGrupoEstable_3

        
    }
    }],
    cuarto: [{
      lapso_1:{
          matematica : cuartoAnoMatematica_1,
          deportes  : cuartoAnoDeporte_1,
          biologia: cuartoAnoBiologia_1,
          fisica: cuartoAnoFisica_1,
          quimica: cuartoAnoQuimica_1,
          ghc: cuartoAnoGHC_1,
          ingles: cuartoAnoIngles_1,
          castellano: cuartoAnoCastellano_1,
          orientacion: cuartoAnoOrientacion_1,
          grupo_estable: cuartoAnoGrupoEstable_1,
          soberania: cuartoAnoSoberania_1

      },
      lapso_2:{
        matematica : cuartoAnoMatematica_2,
        deportes  : cuartoAnoDeporte_2,
        biologia: cuartoAnoBiologia_2,
        fisica: cuartoAnoFisica_2,
        quimica: cuartoAnoQuimica_2,
        ghc: cuartoAnoGHC_2,
        ingles: cuartoAnoIngles_2,
        castellano: cuartoAnoCastellano_2,
        orientacion: cuartoAnoOrientacion_2,
        grupo_estable: cuartoAnoGrupoEstable_2,
        soberania: cuartoAnoSoberania_2

    },
    lapso_3:{
      matematica : cuartoAnoMatematica_3,
      deportes  : cuartoAnoDeporte_3,
      biologia: cuartoAnoBiologia_3,
      fisica: cuartoAnoFisica_3,
      quimica: cuartoAnoQuimica_3,
      ghc: cuartoAnoGHC_3,
      ingles: cuartoAnoIngles_3,
      castellano: cuartoAnoCastellano_3,
      orientacion: cuartoAnoOrientacion_3,
      grupo_estable: cuartoAnoGrupoEstable_3,
      soberania: cuartoAnoSoberania_3

  }
  }],
  quinto: [{
    lapso_1:{
        matematica : quintoAnoMatematica_1,
        deportes  : quintoAnoDeporte_1,
        biologia: quintoAnoBiologia_1,
        fisica: quintoAnoFisica_1,
        quimica: quintoAnoQuimica_1,
        ghc: quintoAnoGHC_1,
        ingles: quintoAnoIngles_1,
        castellano: quintoAnoCastellano_1,
        orientacion: quintoAnoOrientacion_1,
        grupo_estable: quintoAnoGrupoEstable_1,
        soberania: quintoAnoSoberania_1,
        ciencias_tierra: quintoAnoCienciasTierra_1

        
    },
    lapso_2:{
      matematica : quintoAnoMatematica_2,
      deportes  : quintoAnoDeporte_2,
      biologia: quintoAnoBiologia_2,
      fisica: quintoAnoFisica_2,
      quimica: quintoAnoQuimica_2,
      ghc: quintoAnoGHC_2,
      ingles: quintoAnoIngles_2,
      castellano: quintoAnoCastellano_2,
      orientacion: quintoAnoOrientacion_2,
      grupo_estable: quintoAnoGrupoEstable_2,
      soberania: quintoAnoSoberania_2,
      ciencias_tierra: quintoAnoCienciasTierra_2

      
  },
  lapso_3:{
    matematica : quintoAnoMatematica_3,
    deportes  : quintoAnoDeporte_3,
    biologia: quintoAnoBiologia_3,
    fisica: quintoAnoFisica_3,
    quimica: quintoAnoQuimica_3,
    ghc: quintoAnoGHC_3,
    ingles: quintoAnoIngles_3,
    castellano: quintoAnoCastellano_3,
    orientacion: quintoAnoOrientacion_3,
    grupo_estable: quintoAnoGrupoEstable_3,
    soberania: quintoAnoSoberania_3,
    ciencias_tierra: quintoAnoCienciasTierra_3

    
}
}]
      
    }]

    const {
      cedula, 
      email, 
      nombre, 
      apellido, 
      password, 
      edad, 
      seccion, 
      curso_actual,
      matematica_1_1,
      matematica_1_2,
      matematica_1_3,
      matematica_2_1,
      matematica_2_2,
      matematica_2_3,
      matematica_3_1,
      matematica_3_2,
      matematica_3_3,
      matematica_4_1,
      matematica_4_2,
      matematica_4_3,
      matematica_5_1,
      matematica_5_2,
      matematica_5_3,
      deporte_1_1,
      deporte_1_2,
      deporte_1_3,
      deporte_2_1,
      deporte_2_2,
      deporte_2_3,
      deporte_3_1,
      deporte_3_2,
      deporte_3_3,
      deporte_4_1,
      deporte_4_2,
      deporte_4_3,
      deporte_5_1,
      deporte_5_2,
      deporte_5_3,
      orientacion_1_1,
      orientacion_1_2,
      orientacion_1_3,
      orientacion_2_1,
      orientacion_2_2,
      orientacion_2_3,
      orientacion_3_1,
      orientacion_3_2,
      orientacion_3_3,
      orientacion_4_1,
      orientacion_4_2,
      orientacion_4_3,
      orientacion_5_1,
      orientacion_5_2,
      orientacion_5_3,
      grupo_estable_1_1,
      grupo_estable_1_2,
      grupo_estable_1_3,
      grupo_estable_2_1,
      grupo_estable_2_2,
      grupo_estable_2_3,
      grupo_estable_3_1,
      grupo_estable_3_2,
      grupo_estable_3_3,
      grupo_estable_4_1,
      grupo_estable_4_2,
      grupo_estable_4_3,
      grupo_estable_5_1,
      grupo_estable_5_2,
      grupo_estable_5_3,
      ghc_1_1,
      ghc_1_2,
      ghc_1_3,
      ghc_2_1,
      ghc_2_2,
      ghc_2_3,
      ghc_3_1,
      ghc_3_2,
      ghc_3_3,
      ghc_4_1,
      ghc_4_2,
      ghc_4_3,
      ghc_5_1,
      ghc_5_2,
      ghc_5_3,
      castellano_1_1,
      castellano_1_2,
      castellano_1_3,
      castellano_2_1,
      castellano_2_2,
      castellano_2_3,
      castellano_3_1,
      castellano_3_2,
      castellano_3_3,
      castellano_4_1,
      castellano_4_2,
      castellano_4_3,
      castellano_5_1,
      castellano_5_2,
      castellano_5_3,
      ingles_1_1,
      ingles_1_2,
      ingles_1_3,
      ingles_2_1,
      ingles_2_2,
      ingles_2_3,
      ingles_3_1,
      ingles_3_2,
      ingles_3_3,
      ingles_4_1,
      ingles_4_2,
      ingles_4_3,
      ingles_5_1,
      ingles_5_2,
      ingles_5_3,
      quimica_1_1,
      quimica_1_2,
      quimica_1_3,
      quimica_2_1,
      quimica_2_2,
      quimica_2_3,
      quimica_3_1,
      quimica_3_2,
      quimica_3_3,
      quimica_4_1,
      quimica_4_2,
      quimica_4_3,
      quimica_5_1,
      quimica_5_2,
      quimica_5_3,
      biologia_3_1,
      biologia_3_2,
      biologia_3_3,
      biologia_4_1,
      biologia_4_2,
      biologia_4_3,
      biologia_5_1,
      biologia_5_2,
      biologia_5_3,
      fisica_3_1,
      fisica_3_2,
      fisica_3_3,
      fisica_4_1,
      fisica_4_2,
      fisica_4_3,
      fisica_5_1,
      fisica_5_2,
      fisica_5_3,
      ciencias_naturales_1_1,
      ciencias_naturales_1_2,
      ciencias_naturales_1_3,
      ciencias_naturales_2_1,
      ciencias_naturales_2_2,
      ciencias_naturales_2_3,
      arte_convivencia_1_1,
      arte_convivencia_1_2,
      arte_convivencia_1_3,
      arte_convivencia_2_1,
      arte_convivencia_2_2,
      arte_convivencia_2_3,
      soberania_4_1,
      soberania_4_2,
      soberania_4_3,
      soberania_5_1,
      soberania_5_2,
      soberania_5_3,
      ciencias_tierra_5_1,
      ciencias_tierra_5_2,
      ciencias_tierra_5_3
    } = datos;
    
    // Ejemplo de uso de los nombres extraídos
    console.log(matematica_1_1); // nombre
    console.log(matematica_1_2); // nombre
    console.log(matematica_1_3); // nombre

    router?.push("admin");

    console.log(`/api/user/${params.id}`)

    try {
        await fetch(`/api/user/${params.id}`, {
          method: "PUT",
          body: JSON.stringify({
              cedula,
              email,
              nombre, 
              apellido,
              password,
              edad,
              seccion,
              curso_actual,
              matematica_1_1,
              
      matematica_1_2,
      matematica_1_3,
      matematica_2_1,
      matematica_2_2,
      matematica_2_3,
      matematica_3_1,
      matematica_3_2,
      matematica_3_3,
      matematica_4_1,
      matematica_4_2,
      matematica_4_3,
      matematica_5_1,
      matematica_5_2,
      matematica_5_3,
      deporte_1_1,
      deporte_1_2,
      deporte_1_3,
      deporte_2_1,
      deporte_2_2,
      deporte_2_3,
      deporte_3_1,
      deporte_3_2,
      deporte_3_3,
      deporte_4_1,
      deporte_4_2,
      deporte_4_3,
      deporte_5_1,
      deporte_5_2,
      deporte_5_3,
      orientacion_1_1,
      orientacion_1_2,
      orientacion_1_3,
      orientacion_2_1,
      orientacion_2_2,
      orientacion_2_3,
      orientacion_3_1,
      orientacion_3_2,
      orientacion_3_3,
      orientacion_4_1,
      orientacion_4_2,
      orientacion_4_3,
      orientacion_5_1,
      orientacion_5_2,
      orientacion_5_3,
      grupo_estable_1_1,
      grupo_estable_1_2,
      grupo_estable_1_3,
      grupo_estable_2_1,
      grupo_estable_2_2,
      grupo_estable_2_3,
      grupo_estable_3_1,
      grupo_estable_3_2,
      grupo_estable_3_3,
      grupo_estable_4_1,
      grupo_estable_4_2,
      grupo_estable_4_3,
      grupo_estable_5_1,
      grupo_estable_5_2,
      grupo_estable_5_3,
      ghc_1_1,
      ghc_1_2,
      ghc_1_3,
      ghc_2_1,
      ghc_2_2,
      ghc_2_3,
      ghc_3_1,
      ghc_3_2,
      ghc_3_3,
      ghc_4_1,
      ghc_4_2,
      ghc_4_3,
      ghc_5_1,
      ghc_5_2,
      ghc_5_3,
      castellano_1_1,
      castellano_1_2,
      castellano_1_3,
      castellano_2_1,
      castellano_2_2,
      castellano_2_3,
      castellano_3_1,
      castellano_3_2,
      castellano_3_3,
      castellano_4_1,
      castellano_4_2,
      castellano_4_3,
      castellano_5_1,
      castellano_5_2,
      castellano_5_3,
      ingles_1_1,
      ingles_1_2,
      ingles_1_3,
      ingles_2_1,
      ingles_2_2,
      ingles_2_3,
      ingles_3_1,
      ingles_3_2,
      ingles_3_3,
      ingles_4_1,
      ingles_4_2,
      ingles_4_3,
      ingles_5_1,
      ingles_5_2,
      ingles_5_3,
      quimica_1_1,
      quimica_1_2,
      quimica_1_3,
      quimica_2_1,
      quimica_2_2,
      quimica_2_3,
      quimica_3_1,
      quimica_3_2,
      quimica_3_3,
      quimica_4_1,
      quimica_4_2,
      quimica_4_3,
      quimica_5_1,
      quimica_5_2,
      quimica_5_3,
      biologia_3_1,
      biologia_3_2,
      biologia_3_3,
      biologia_4_1,
      biologia_4_2,
      biologia_4_3,
      biologia_5_1,
      biologia_5_2,
      biologia_5_3,
      fisica_3_1,
      fisica_3_2,
      fisica_3_3,
      fisica_4_1,
      fisica_4_2,
      fisica_4_3,
      fisica_5_1,
      fisica_5_2,
      fisica_5_3,
      ciencias_naturales_1_1,
      ciencias_naturales_1_2,
      ciencias_naturales_1_3,
      ciencias_naturales_2_1,
      ciencias_naturales_2_2,
      ciencias_naturales_2_3,
      arte_convivencia_1_1,
      arte_convivencia_1_2,
      arte_convivencia_1_3,
      arte_convivencia_2_1,
      arte_convivencia_2_2,
      arte_convivencia_2_3,
      soberania_4_1,
      soberania_4_2,
      soberania_4_3,
      soberania_5_1,
      soberania_5_2,
      soberania_5_3,
      ciencias_tierra_5_1,
      ciencias_tierra_5_2,
      ciencias_tierra_5_3
            }),
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
  };



  
 

  if (session.status === "authenticated" && session?.data?.user?.email === "valero.jozee@gmail.com") {
    return (
      <div className={styles.container}>
       <button onClick={click}>Data</button> 
        <form className={styles.new} onSubmit={handleSubmit}>
          
          <h1>Editar </h1>
          <div className={styles.periodo}>
            <input type="text" required value={datos.nombre} placeholder="Nombre" name="nombre" onChange={handleChange} className={styles.input} />
            <input type="text" value={datos.apellido} placeholder="Apellido" name="apellido" onChange={handleChange} className={styles.input} />
            <input type="number" required placeholder="Cedula" value={datos.cedula} name="cedula" onChange={handleChange} className={styles.input} />


          </div>
          <div className={styles.periodo}>
            <input type="email" required placeholder="Email" value={datos.email} name="email" onChange={handleChange} className={styles.input} />
            <input type="number" placeholder="Edad" value={datos.edad} name="edad" onChange={handleChange} className={styles.input} />
            <input type="password" required placeholder="Password" value={datos.password} name="password" onChange={handleChange} className={styles.input} />
            
          </div>
          <div className={styles.periodo}>
            
            <input type="number" placeholder="Año cursando" value={datos.curso_actual} name="curso_actual" onChange={handleChange} className={styles.input} />
            <input type="text" placeholder="Sección" value={datos.seccion} name="seccion" onChange={handleChange} className={styles.input} />
            
            
          </div>
          <h2>Notas</h2>
          <h3>1er Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p >1er Lapso</p>
            <input type="number" value={notas.matematica_1_1} name="matematica_1_1" onChange={handleChange} placeholder="Matematica" className={styles.input} />
            <input type="number" value={datos.deportes_1_1} name="deportes_1_1" onChange={handleChange} placeholder="Educación Fisica" className={styles.input} />
            <input type="number" value={datos.ciencias_naturales_1_1} name="ciencias_naturales_1_1" onChange={handleChange} placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" value={datos.arte_convivencia_1_1} name="arte_convivencia_1_1" onChange={handleChange} placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>

          <h3>2do Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p >1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Ciencias Naturales" className={styles.input} />
            <input type="number" placeholder="Arte y Convivencia" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <h3>3er Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <div>
            <p className={styles.periodo}>3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
          </div>
          <h3 className={styles.periodo}>4to Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p >3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
          </div>
          <h3>5to Año</h3>
          <hr />
          <div className={styles.periodo}>
            <p>1er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
            <input type="number" placeholder="Ciencias de la tierra" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>2do Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
            <input type="number" placeholder="Ciencias de la tierra" className={styles.input} />
          </div>
          <div className={styles.periodo}>
            <p>3er Lapso</p>
            <input type="number" placeholder="Matematica" className={styles.input} />
            <input type="number" placeholder="Educación Fisica" className={styles.input} />
            <input type="number" placeholder="Biologia" className={styles.input} />
            <input type="number" placeholder="Fisica" className={styles.input} />
            <input type="number" placeholder="Quimica" className={styles.input} />
            <input type="number" placeholder="Castellano" className={styles.input} />
            <input type="number" placeholder="Ingles" className={styles.input} />
            <input type="number" placeholder="GHC" className={styles.input} />
            <input type="number" placeholder="Orientación" className={styles.input} />
            <input type="number" placeholder="Grupo Estable" className={styles.input} />
            <input type="number" placeholder="Soberanía" className={styles.input} />
            <input type="number" placeholder="Ciencias de la tierra" className={styles.input} />
          </div>
          
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Estudiante;