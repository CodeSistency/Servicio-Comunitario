// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    apellido: {
      type: String,
      default: " ",
    },
    cedula: {
      type: Number,
      default: 0,
      unique: true,
    },
    curso_actual: {
      type: Number,
      default: 0,
    },
    seccion: {
      type: String,
      default: " ",
    },
    notas: {
      type: Array,
      default: new Array([{}]),
    },
    matematica_1_1: {
      type: Number,
      default: 0,
    },
    matematica_1_2: {
      type: Number,
      default: 0,
    },
    matematica_1_3: {
      type: Number,
      default: 0,
    },
    matematica_2_1: {
      type: Number,
      default: 0,
    },
    matematica_2_2: {
      type: Number,
      default: 0,
    },
    matematica_2_3: {
      type: Number,
      default: 0,
    },
    matematica_3_1: {
      type: Number,
      default: 0,
    },
    matematica_3_2: {
      type: Number,
      default: 0,
    },
    matematica_3_3: {
      type: Number,
      default: 0,
    },
    matematica_4_1: {
      type: Number,
      default: 0,
    },
    matematica_4_2: {
      type: Number,
      default: 0,
    },
    matematica_4_3: {
      type: Number,
      default: 0,
    },
    matematica_5_1: {
      type: Number,
      default: 0,
    },
    matematica_5_2: {
      type: Number,
      default: 0,
    },
    matematica_5_3: {
      type: Number,
      default: 0,
    },
    deporte_1_1: {
      type: Number,
      default: 0,
    },
    deporte_1_2: {
      type: Number,
      default: 0,
    },
    deporte_1_3: {
      type: Number,
      default: 0,
    },
    deporte_2_1: {
      type: Number,
      default: 0,
    },
    deporte_2_2: {
      type: Number,
      default: 0,
    },
    deporte_2_3: {
      type: Number,
      default: 0,
    },
    deporte_3_1: {
      type: Number,
      default: 0,
    },
    deporte_3_2: {
      type: Number,
      default: 0,
    },
    deporte_3_3: {
      type: Number,
      default: 0,
    },
    deporte_4_1: {
      type: Number,
      default: 0,
    },
    deporte_4_2: {
      type: Number,
      default: 0,
    },
    deporte_4_3: {
      type: Number,
      default: 0,
    },
    deporte_5_1: {
      type: Number,
      default: 0,
    },
    deporte_5_2: {
      type: Number,
      default: 0,
    },
    deporte_5_3: {
      type: Number,
      default: 0,
    },
    orientacion_1_1: {
      type: Number,
      default: 0,
    },
    orientacion_1_2: {
      type: Number,
      default: 0,
    },
    orientacion_1_3: {
      type: Number,
      default: 0,
    },
    orientacion_2_1: {
      type: Number,
      default: 0,
    },
    orientacion_2_2: {
      type: Number,
      default: 0,
    },
    orientacion_2_3: {
      type: Number,
      default: 0,
    },
    orientacion_3_1: {
      type: Number,
      default: 0,
    },
    orientacion_3_2: {
      type: Number,
      default: 0,
    },
    orientacion_3_3: {
      type: Number,
      default: 0,
    },
    orientacion_4_1: {
      type: Number,
      default: 0,
    },
    orientacion_4_2: {
      type: Number,
      default: 0,
    },
    orientacion_4_3: {
      type: Number,
      default: 0,
    },
    orientacion_5_1: {
      type: Number,
      default: 0,
    },
    orientacion_5_2: {
      type: Number,
      default: 0,
    },
    orientacion_5_3: {
      type: Number,
      default: 0,
    },
    grupo_estable_1_1: {
      type: Number,
      default: 0,
    },
    grupo_estable_1_2: {
      type: Number,
      default: 0,
    },
    grupo_estable_1_3: {
      type: Number,
      default: 0,
    },
    grupo_estable_2_1: {
      type: Number,
      default: 0,
    },
    grupo_estable_2_2: {
      type: Number,
      default: 0,
    },
    grupo_estable_2_3: {
      type: Number,
      default: 0,
    },
    grupo_estable_3_1: {
      type: Number,
      default: 0,
    },
    grupo_estable_3_2: {
      type: Number,
      default: 0,
    },
    grupo_estable_3_3: {
      type: Number,
      default: 0,
    },
    grupo_estable_4_1: {
      type: Number,
      default: 0,
    },
    grupo_estable_4_2: {
      type: Number,
      default: 0,
    },
    grupo_estable_4_3: {
      type: Number,
      default: 0,
    },
    grupo_estable_5_1: {
      type: Number,
      default: 0,
    },
    grupo_estable_5_2: {
      type: Number,
      default: 0,
    },
    grupo_estable_5_3: {
      type: Number,
      default: 0,
    },
    ghc_1_1: {
      type: Number,
      default: 0,
    },
    ghc_1_2: {
      type: Number,
      default: 0,
    },
    ghc_1_3: {
      type: Number,
      default: 0,
    },
    ghc_2_1: {
      type: Number,
      default: 0,
    },
    ghc_2_2: {
      type: Number,
      default: 0,
    },
    ghc_2_3: {
      type: Number,
      default: 0,
    },
    ghc_3_1: {
      type: Number,
      default: 0,
    },
    ghc_3_2: {
      type: Number,
      default: 0,
    },
    ghc_3_3: {
      type: Number,
      default: 0,
    },
    ghc_4_1: {
      type: Number,
      default: 0,
    },
    ghc_4_2: {
      type: Number,
      default: 0,
    },
    ghc_4_3: {
      type: Number,
      default: 0,
    },
    ghc_5_1: {
      type: Number,
      default: 0,
    },
    ghc_5_2: {
      type: Number,
      default: 0,
    },
    ghc_5_3: {
      type: Number,
      default: 0,
    },
    castellano_1_1: {
      type: Number,
      default: 0,
    },
    castellano_1_2: {
      type: Number,
      default: 0,
    },
    castellano_1_3: {
      type: Number,
      default: 0,
    },
    castellano_2_1: {
      type: Number,
      default: 0,
    },
    castellano_2_2: {
      type: Number,
      default: 0,
    },
    castellano_2_3: {
      type: Number,
      default: 0,
    },
    castellano_3_1: {
      type: Number,
      default: 0,
    },
    castellano_3_2: {
      type: Number,
      default: 0,
    },
    castellano_3_3: {
      type: Number,
      default: 0,
    },
    castellano_4_1: {
      type: Number,
      default: 0,
    },
    castellano_4_2: {
      type: Number,
      default: 0,
    },
    castellano_4_3: {
      type: Number,
      default: 0,
    },
    castellano_5_1: {
      type: Number,
      default: 0,
    },
    castellano_5_2: {
      type: Number,
      default: 0,
    },
    castellano_5_3: {
      type: Number,
      default: 0,
    },
    ingles_1_1: {
      type: Number,
      default: 0,
    },
    ingles_1_2: {
      type: Number,
      default: 0,
    },
    ingles_1_3: {
      type: Number,
      default: 0,
    },
    ingles_2_1: {
      type: Number,
      default: 0,
    },
    ingles_2_2: {
      type: Number,
      default: 0,
    },
    ingles_2_3: {
      type: Number,
      default: 0,
    },
    ingles_3_1: {
      type: Number,
      default: 0,
    },
    ingles_3_2: {
      type: Number,
      default: 0,
    },
    ingles_3_3: {
      type: Number,
      default: 0,
    },
    ingles_4_1: {
      type: Number,
      default: 0,
    },
    ingles_4_2: {
      type: Number,
      default: 0,
    },
    ingles_4_3: {
      type: Number,
      default: 0,
    },
    ingles_5_1: {
      type: Number,
      default: 0,
    },
    ingles_5_2: {
      type: Number,
      default: 0,
    },
    ingles_5_3: {
      type: Number,
      default: 0,
    },
    quimica_1_1: {
      type: Number,
      default: 0,
    },
    quimica_1_2: {
      type: Number,
      default: 0,
    },
    quimica_1_3: {
      type: Number,
      default: 0,
    },
    quimica_2_1: {
      type: Number,
      default: 0,
    },
    quimica_2_2: {
      type: Number,
      default: 0,
    },
    quimica_2_3: {
      type: Number,
      default: 0,
    },
    quimica_3_1: {
      type: Number,
      default: 0,
    },
    quimica_3_2: {
      type: Number,
      default: 0,
    },
    quimica_3_3: {
      type: Number,
      default: 0,
    },
    quimica_4_1: {
      type: Number,
      default: 0,
    },
    quimica_4_2: {
      type: Number,
      default: 0,
    },
    quimica_4_3: {
      type: Number,
      default: 0,
    },
    quimica_5_1: {
      type: Number,
      default: 0,
    },
    quimica_5_2: {
      type: Number,
      default: 0,
    },
    quimica_5_3: {
      type: Number,
      default: 0,
    },
    biologia_3_1: {
      type: Number,
      default: 0,
    },
    biologia_3_2: {
      type: Number,
      default: 0,
    },
    biologia_3_3: {
      type: Number,
      default: 0,
    },
    biologia_4_1: {
      type: Number,
      default: 0,
    },
    biologia_4_2: {
      type: Number,
      default: 0,
    },
    biologia_4_3: {
      type: Number,
      default: 0,
    },
    biologia_5_1: {
      type: Number,
      default: 0,
    },
    biologia_5_2: {
      type: Number,
      default: 0,
    },
    biologia_5_3: {
      type: Number,
      default: 0,
    },
    fisica_3_1: {
      type: Number,
      default: 0,
    },
    fisica_3_2: {
      type: Number,
      default: 0,
    },
    fisica_3_3: {
      type: Number,
      default: 0,
    },
    fisica_4_1: {
      type: Number,
      default: 0,
    },
    fisica_4_2: {
      type: Number,
      default: 0,
    },
    fisica_4_3: {
      type: Number,
      default: 0,
    },
    fisica_5_1: {
      type: Number,
      default: 0,
    },
    fisica_5_2: {
      type: Number,
      default: 0,
    },
    fisica_5_3: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_1_1: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_1_2: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_1_3: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_2_1: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_2_2: {
      type: Number,
      default: 0,
    },
    ciencias_naturales_2_3: {
      type: Number,
      default: 0,
    },
    arte_convivencia_1_1: {
      type: Number,
      default: 0,
    },
    arte_convivencia_1_2: {
      type: Number,
      default: 0,
    },
    arte_convivencia_1_3: {
      type: Number,
      default: 0,
    },
    arte_convivencia_2_1: {
      type: Number,
      default: 0,
    },
    arte_convivencia_2_2: {
      type: Number,
      default: 0,
    },
    arte_convivencia_2_3: {
      type: Number,
      default: 0,
    },
    soberania_4_1: {
      type: Number,
      default: 0,
    },
    soberania_4_2: {
      type: Number,
      default: 0,
    },
    soberania_4_3: {
      type: Number,
      default: 0,
    },
    soberania_5_1: {
      type: Number,
      default: 0,
    },
    soberania_5_2: {
      type: Number,
      default: 0,
    },
    soberania_5_3: {
      type: Number,
      default: 0,
    },
    ciencias_tierra_5_1: {
      type: Number,
      default: 0,
    },
    ciencias_tierra_5_2: {
      type: Number,
      default: 0,
    },
    ciencias_tierra_5_3: {
      type: Number,
      default: 0,
    }
    
    // Continúa la lista con los demás nombres extraídos
    
    // notas: [{
    //     primero: [{
    //       lapso_1: {
    //         matematica: Number,
    //         fisica: Number,
    //         quimica: Number,
    //       },

    //     }],
    //    }],

    // notas: [{
    //   primero: [{
    //     lapso_1: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_2: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_3: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //   }],
    //   segundo: [{
    //     lapso_1: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_2: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_3: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //   }],
    //   tercero: [{
    //     lapso_1: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_2: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_3: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //   }],
    //   cuarto: [{
    //     lapso_1: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_2: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_3: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //   }],
    //   quinto: [{
    //     lapso_1: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_2: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //     lapso_3: {
    //       matematica: Number,
    //       fisica: Number,
    //       quimica: Number,
    //     },
    //   }],
    // }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
