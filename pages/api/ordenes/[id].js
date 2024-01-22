import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) { // Con req.query accedemos a los valores pasados seguido del nombre que asignamos [id].js req.query.id

    const prisma = new PrismaClient();

    if(req.method === 'POST') {
        const { id } = req.query;

        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id),
            },
            data: {
                estado: true
            }
        })
        res.status(200).json(ordenActualizada)
    }
}