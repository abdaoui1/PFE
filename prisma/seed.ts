// haha i have problem with the ts extension.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const users = await prisma.filiere.findUnique(
        {
            where: {
                idFiliere: 1
            }
        }
    )



    console.log(users);

}









main().then(async () => {
    await prisma.$disconnect();
    console.log("✅ User inserted or already exists");
})
    .catch(async (error) => {
        console.error("abdaoui Error " + error);
        await prisma.$disconnect();
        process.exit(1)
    });




