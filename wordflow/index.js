
import { connect } from "mongoose";
const uri = "mongodb+srv://hentik1:EhVP8YaHrdQ36MQN@cluster0.l0a9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


connect(uri).then(() => {
  console.log("connected to db")
}).catch(() => console.log("connection failed"))

