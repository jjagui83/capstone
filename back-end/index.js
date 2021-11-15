const express = require("express");
const cors = require("cors");
const supabase = require("@supabase/supabase-js");
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());
// app.use(supabase());

// NEW user_login table NEED TO RUN
// NEED BCRYPT
app.post("/create_user", (req, res) => {
  const { first_name, last_name, email, password, error } =
    supabase.auth.signUp({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
});

// AUTH user_login table NEED TO RUN
// NEED BCRYPT
app.get("/read/user_login", (req, res) => {
  const { email, password, error } = supabase.auth.signIn({
    email: "",
    password: "",
  });
});

// update cars to cart NEED TO RUN
app.get("/read_cars", (req, res) => {
  const { car_name, image, pickup_date, return_date, day_price, total_price } =
    supabase
      .from("cars")
      .update({
        car_name: "",
        image: "",
        pickup_date: "",
        return_date: "",
        day_price: "",
        total_price: "",
      })
      .match({ car_name: "" });
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
});

// delete from cart NEED TO RUN
app.delete("/delete_car/:car_name", (req, res) => {
  const {
    first_name,
    last_name,
    car_name,
    pickup_date,
    return_date,
    day_price,
    total_price,
  } = supabase
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
  creds.connect(
    async () => {
      const data = await creds.query(
        `DELETE FROM cart WHERE car_name = ${car_name}`
      );
    }
    //     res.send(data);
    //   });
    // } catch (err) {
    //   res.send(err);
  );
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));

// STOP RIGHT THERE!!
// NO FOR REAL JUST STOP!!

// manually put car in cars table WORKS
// don't need for supabase
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
//       )})}})
