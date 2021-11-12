const express = require("express");
const cors = require("cors");
const supabase = require("@supabase/supabase-js");
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(supabase());

// create user_login
const { data, error } = await supabase
  .from("user_login")
  .insert([{ first_name: "", last_name: "", email: "", password: "" }]);

// auth user_login...need bcrypt?
const { data, error } = await supabase
  .from("user_login")
  .select("email", "password");

// get/read car
const { data, error } = await supabase.from("cars").select("car_name");

// add/update to cart
const { data, error } = await supabase
  .from("cars")
  .update({
    first_name: "",
    last_name: "",
    car_name: "",
    pickup_date: "",
    return_date: "",
    day_price: "",
    total_price: "",
  })
  .match({ car_name: "" });

// delete from cart
const { data, error } = await supabase
  .from("cart")
  .delete({
    first_name: "",
    last_name: "",
    car_name: "",
    pickup_date: "",
    return_date: "",
    day_price: "",
    total_price: "",
  })
  .match({ car_name: "" });

// // user_login table WORKS
// // NEED BCRYPT
// app.post("/create_user", (req, res) => {
//   try {
//     creds.connect(() => {
//       const { first_name, last_name, email, password } = req.body;
//       creds.query(
//         `INSERT INTO user_login(
//            first_name,
//            last_name,
//            email,
//            password)
//            VALUES(
//              '${first_name}',
//              '${last_name}',
//              '${email}',
//              '${password}')`,
//         function (err, result) {
//           if (err) {
//             console.log(err);
//             res.status(401).send(err);
//           }
//           res.send(result);
//         }
//       );
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// // AUTH user_login?
// app.get("/read/user_login", (req, res) => {
//   const id = req.params.id;
//   try {
//     creds.connect(() => {
//       creds.query(
//         `SELECT * FROM user_login WHERE id = ${id}`,
//         function (err, result) {
//           if (err) {
//             console.log(err);
//             res.status(401).send(err);
//           }
//           res.send(result);
//         }
//       );
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// // manually put car in cars table WORKS
// app.post("/create_car", (req, res) => {
//   try {
//     creds.connect(() => {
//       const {
//         car_name,
//         car_model,
//         year,
//         color,
//         day_price,
//         week_price,
//         car_seats,
//         image,
//       } = req.body;
//       creds.query(
//         `INSERT INTO cars(
//       car_name,
//       car_model,
//       year,
//       color,
//       day_price,
//       week_price,
//       car_seats,
//       image)
//       VALUES(
//         '${car_name}',
//         '${car_model}',
//         '${year}',
//         '${color}',
//         '${day_price}',
//         '${week_price}',
//         '${car_seats}',
//         '${image}')`,
//         function (err, result) {
//           if (err) {
//             console.log(err);
//             res.status(401).send(err);
//           }
//           res.send(result);
//         }
//       );
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// // cars table reads ALL cars WORKS
// app.get("/read_cars", (req, res) => {
//   const id = req.params.id;
//   try {
//     creds.connect(() => {
//       creds.query(`SELECT * FROM cars`, function (err, result) {
//         if (err) {
//           console.log(err);
//           res.status(401).send(err);
//         }
//         res.send(result);
//       });
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

// // order/invoice add car to cart?
// // app.put("/update_cart/:car_name", (req, res) => {
// //   const car_name = req.params.car_name;
// //   try {
// //     creds.connect(async () => {
// //       const data = await creds.query(
// //         `SELECT * FROM cars WHERE car_name = ${car_name}`
// //       );
// //       for (i in data.rows) {
// //         await creds.query(
// //           `INSERT INTO cart(car_name, engine, car_seats, transmission, msrp, fuel_economy, drivetrain, horsepower, image)
// //            VALUES ('${data.rows[0].car_name}', '${data.rows[0].engine}', '${data.rows[0].car_seats}', '${data.rows[0].transmission}', '${data.rows[0].msrp}', '${data.rows[0].fuel_economy}', '${data.rows[0].drivetrain}', '${data.rows[0].horsepower}', '${data.rows[0].image}')`
// //         );
// //         res.send(data);
// //       }
// //     });
// //   } catch (err) {
// //     res.send(err);
// //   }
// // });

// // order/invoice reading cart?
// // app.get("/read_cart", (req, res) => {
// //   try {
// //     creds.connect(async () => {
// //       const data = await creds.query(`SELECT * FROM cart`);
// //       res.send(data);
// //     });
// //   } catch (err) {
// //     res.send(err);
// //   }
// // });

// // delete from cart?
// // app.delete("/delete_car/:car_name", (req, res) => {
// //   const car_name = req.params.car_name;
// //   try {
// //     creds.connect(async () => {
// //       const data = await creds.query(
// //         `DELETE FROM cart WHERE car_name = ${car_name}`
// //       );
// //       res.send(data);
// //     });
// //   } catch (err) {
// //     res.send(err);
// //   }
// // });
// app.listen(PORT, console.log(`Listening on port ${PORT}`));

// // cart table schema
// // id SERIAL PRIMARY KEY,
// // car_name VARCHAR NOT NULL,
// // first_name VARCHAR NOT NULL,
// // last_name VARCHAR NOT NULL,
// // pickup_date DATE NOT NULL,
// // return_date DATE NOT NULL,
// // day_price INTEGER NOT NULL FOREIGN KEY day_price FROM cars,
// // total_price INTEGER NOT NULL
