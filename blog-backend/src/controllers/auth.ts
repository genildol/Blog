import { RequestHandler } from "express"
import { z } from "zod";
import { createUser } from "../services/user";

export const signup: RequestHandler = async (req, res) => {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
  });
  const data = schema.safeParse(req.body);
  if (!data.success) {
    res.json({ error: data.error?.flatten().fieldErrors });
    return
  }

  const newUser = await createUser(data.data);
  if (!newUser) {
    res.json({ error: "Erro ao criar usuário" });
    return;
  }
  const token = '123'; //TODO: gerar token

  res.status(201).json({
    user: {
      id: newUser.di,
      name: newUser.name,
      email: newUser.email,
    },
    token
  });
}

