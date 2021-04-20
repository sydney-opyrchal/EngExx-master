//import config from "./config";
const {MongoClient} = require('mongodb');


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://brUser:gp6unZWVYat4CbSv@cluster0.myko0.mongodb.net/test";

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
/*
        await addUserToSchema(client, 
          {
            username: "admin",
            password: "admin",
            email: "admin",
            isAdmin: true
          });*/
      
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function addUserToSchema(client, newUser){
  const result = await client.db("database").collection("login").insertOne(newUser);
  console.log('New user created with the following username: ', newUser.username);
}

main().catch(console.error);