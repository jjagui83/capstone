const express = require("express");
const cors = require("cors");
const supabase = require("@supabase/supabase-js");
const app = express();
require("dotenv").config()
 const PORT = process.env.PORT||3001;

app.use(express.json());
app.use(cors());
// app.use(supabase());

// NEW user_login table WORKS!!!

app.get("/", (req,res) => {
  res.send("kWe made it")
});

app.post("/create_user", (req, res) => {
  const { first_name, last_name, email, password, error } =
    supabase.auth.signUp({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
});

// AUTH user_login table WORKS!!!

app.get("/read/user_login", (req, res) => {
  const { email, password, error } = supabase.auth.signIn({
    email: "",
    password: "",
  });
});

// sign out of lavish motors? Giving problems
app.put("/update/user_login", (req, res) => {
  const { error } = await supabase.auth.signOut({});
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


