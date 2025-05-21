import crypto from "crypto";
import { RequestHandler } from "express";

export const generateAuthLink: RequestHandler = (req, res) => {
  // Generate authentication link
  // and send that link to the users email address
  const randomToken = crypto.randomBytes(16).toString("hex");

  console.log(req.body);

  res.json({ ok: true });
};
