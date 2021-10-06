const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb+srv://AustinDB:Vcube56!@cluster0.abnfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
        // await createListing(client, {
        //     name: "leg press",
        //     difficulty: 2
        // })
        // await createListing(client, {
        //     name: "pull ups",
        //     difficulty: 5
        // })
        // await createListing(client, {
        //     name: "bench press",
        //     difficulty: 8
        // })
        await findOneListingByName(client, "pull ups");
        await findAllListings(client, 0, 10);
    } catch (err) {
        console.log("error: " + err);
    } finally {
        await client.close();
    }

}

async function createDatabase() {
    await client.db()
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function createListing(client, newListing) {
    const result = await client.db("workouts").collection("list").insertOne(newListing);
    console.log(`${result.insertedId}`);

    // await createListing(client, {
    //     name: "Lovely Loft",
    //     summary: "A charming loft in Paris",
    //     bedroom: 1,
    //     bathroom: 1
    // });
}

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("workouts").collection("list").findOne({ name: nameOfListing });
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

// maybe i can find workouts based on difficulty (scale 1-10)
async function findAllListings(client, minDifficulty, maxDifficulty) {
    const cursor = client.db("workouts").collection("list").find({
        difficulty: { $gte: minDifficulty },
        difficulty: { $lte: maxDifficulty }
    });
    const result = await cursor.toArray();
    
    result.forEach((result, i) => {
        console.log(`${result.name}`);
    })
    // if (result) {
    //     console.log(result);
    // } else {
    //     console.log("This is broken you noob");
    // }
}

main().catch(console.error);