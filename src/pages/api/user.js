// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/database/models";

async function getAll() {
  try {
    const users = await User.findAll();
    return users;
  } catch (e) {
    return e.message;
  }
}

async function create() {
  try {
    // Implementasi logika pembuatan user di sini
  } catch (e) {
    return e.message;
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await getAll();
    res.status(200).json(users);
  }
}
