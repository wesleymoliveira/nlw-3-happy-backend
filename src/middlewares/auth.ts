import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: "Rota não autorizada!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    //const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    const data = jwt.verify(token, authConfig.secret);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.status(401).json({ erro: "Token inválido" });
  }
};
