import express , {urlencoded, json} from "express";
import path from "path";
import compression from "compression-webpack-plugin"
const PORT = process.env.PORT || 8080;

const app = express();
app.use(compression());
app.use(urlencoded({extended:true}));
app.use(json());

if(process.env.NODE_ENV === "production"){
    app.use(path("dist"));
};
app.listen(PORT, () =>{
    console.log(`Weathered App is active at http://localhost:${PORT}`);
});