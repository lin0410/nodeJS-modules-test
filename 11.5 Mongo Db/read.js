
import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://ikhela-04KK:ikhela-04KK@test0.s9iyuh2.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}); 

// read the data in the collection
async function findOneListingByName(client,nameOfListing){
    const cursor= await client.db('sample_airbnb').collection('listingsAndReviews').find()

    const results = await cursor.toArray()
    console.log(results.forEach(objects => console.log(objects.name)));  


   
    // result  
    //     ? console.log(`Found a listening to '${nameOfListing}' : `,result)
    // //     : console.log(`No listening to ${nameOfListing}`)
    // if (result){
    //     console.log(`Found a listening to '${nameOfListing}'`);
    //     console.log(JSON.stringify(result));
    // }
    // else{
    //     console.log(`No listening to '${nameOfListing}'`)
    // }
}

// read the specifics data with the conditions 
// const cursor = client.db('sample_airbnb').collection('listingsAndReviews').find(
//         {
//             bedrooms: {$gte :minimumNumberOfbedrooms},
//             bathrooms: {$gte : minimmumNumberOfbathrooms}
//         }
//     ).sort({last_review : -1})
//     .limit(maximumNumberOfResults)

// const results = await cursor.toArray(); // obtenir les resultats sous forme de tableau , 

    // console.log(JSON.stringify(result));


// Now that we have our query ready to go
// async function fidw(client, {
//     minimumNumberOfbathrooms = 0,
//     minimumNumberOfbedrooms=0,
//     maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
// } = {}) {  // {} define the optional parameters
//     const cursor = client.db('sample_airbnb').collection('listingsAndReviews').find(
//         {
//             bedrooms: {$gte :minimumNumberOfbedrooms},
//             bathrooms: {$gte : minimumNumberOfbathrooms}
//         }
//     ).sort({last_review : -1})
//     .limit(maximumNumberOfResults)

// const results = await cursor.toArray(); // obtenir les resultats sous forme de tableau , 
// // console.log(JSON.stringify(result));
// if (results.length > 0) {
//     console.log(`Found listing(s) with at least ${minimumNumberOfbedrooms} bedrooms and ${minimumNumberOfbathrooms} bathrooms:`);
//     results.forEach((result, i) => {
//         const date = new Date(result.last_review).toDateString();
//         console.log();
//         console.log(`${i + 1}. name: ${result.name}`);
//         console.log(`   _id: ${result._id}`);
//         console.log(`   bedrooms: ${result.bedrooms}`);
//         console.log(`   bathrooms: ${result.bathrooms}`);
//         console.log(`   most recent review date: ${date}`);
//     });
// } else {
//     console.log(`No listings found with at least ${minimumNumberOfbedrooms} bedrooms and ${minimumNumberOfbathrooms} bathrooms`);
// }
// }

async function run() {
  try {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    // display list of name of the document for one collection
    await findOneListingByName(client,"Duplex sunshine");

    // display result of multple result 
    // await fidw(client,{
    //     minimmumNumberOfbathrooms:4,
    //     minimumNumberOfBedrooms:3,
    //     maximumNumberOfResults : 5,
    // })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close(); 
  }
}
run().catch(console.dir);