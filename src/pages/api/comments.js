import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { body, postId, authorEmail } = req.body;
      const response = await prisma.comment.create({
        data: {
          body,
          postId,
          authorEmail,
        },
      });
      res.status(200).json(response);
      break;
    case "GET":
      const { slug } = req.body;
      const comments = await prisma.comment.findMany({
        where: {
          postId: slug,
        },
        include: {
          author: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json({ comments });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
