const app = require("express")();

app.get("/", (req, res) => res.send("hi there"));
app.listen(8000, () => console.log(`server started`));
 