import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { body, postId, authorEmail } = req.body;
      const comment = await prisma.comment.create({
        data: {
          body,
          postId,
          authorEmail,
        },
      });
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
      return comments;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
