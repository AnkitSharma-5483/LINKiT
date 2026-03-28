import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()
    
    const client = await clientPromise;
    const db = client.db("LINK!T")
    const collection = db.collection("user")

    // if the username is already used then you can't create the link!t
    const doc = await collection.findOne({username: body.username})

    if(doc){
        return Response.json({success: false, error: true ,  message: 'This LINK!T has already exists!', result: null})
    }

    const result = await collection.insertOne(body)
    
    return Response.json({ success: true, error: false,  message: 'Your LINK!T has been generated', result: result })
}