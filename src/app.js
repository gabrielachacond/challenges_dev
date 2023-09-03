const express = require('express')
const app = express()
const port = 3000;

const mainRoute = require ('./api/route')

// invocation of route
app.use("/", mainRoute);
  
  // Match with non existing routes
app.use("*", (req, res, next) => {
	res.status(404).json({ message: "Non route under that path o method" });
});

  app.listen(port,async (item) => {
	console.log(`escuchando el puerto ${port}`);
})

