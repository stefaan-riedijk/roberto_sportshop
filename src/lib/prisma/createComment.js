import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createPost(textBody, authorId) {
  await prisma.comment.create({
    data: {
      body: textBody,
      authorId: authorId,
    },
  });
}

export default createPost;
