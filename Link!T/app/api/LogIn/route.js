import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()
    
    const client = await clientPromise;
    const db = client.db("LINK!T")
    const collection = db.collection("user")

    // if the email or username exist then you can login link!t
    const doc = await collection.findOne({
        $or: [
            { email: body.identifier },
            { username: body.identifier }
        ],
    });

    if(!doc){
        return Response.json({ success: false, error: true,  message: "This email or username doesn't exists!", result: null });
    }
    
    return Response.json({success: true, error: false,  message: "You've successfully logged in", result: {email: doc.email, username: doc.username}});
    
}

