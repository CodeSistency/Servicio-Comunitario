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
    },
    curso_actual: {
      type: Number,
      default: 0,
    },
    seccion: {
      type: String,
      default: " ",
    },
    /* notas: {
      type: Array
    }, */
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

export default mongoose.model("User", userSchema);
