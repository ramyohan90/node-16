import { User } from './entity/User';
import { DataSource } from "typeorm"

 const source = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Bright#123",
    database: "sms",
    synchronize: false,
    entities: [
      User
    ]
 })
 
 source.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export {source}