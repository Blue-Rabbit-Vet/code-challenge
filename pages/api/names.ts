// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { namesRepo, User, UserData } from "../../lib/db";
import { ReturnResult } from "../../components/Common/CommonFunctions";

const returnResult: ReturnResult<UserData[]> = {
  result: [],
  error: "",
  code: 200,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnResult<UserData[]>>
) {
  try {
    const user = req?.body ?? "";

    switch (req.method) {
      case "GET":
        returnResult.result = namesRepo.getAll();
        res.status(200).json(returnResult);
        break;
      case "POST":
        namesRepo.create(user);
        returnResult.result = namesRepo.getAll();
        returnResult.code = 201;
        res.status(201).json(returnResult);
        break;
      case "PUT":
        namesRepo.update(user.id, user);
        returnResult.result = namesRepo.getAll();
        returnResult.code = 204;
        res.status(204).json(returnResult);
        break;
      case "DELETE":
        namesRepo.delete(user);
        returnResult.result = namesRepo.getAll();
        res.status(200).json(returnResult);
        break;
      default:
        res.status(500);
        break;
    }
  } catch (e: unknown) {
    if (typeof e === "string") {
      returnResult.error = e.toUpperCase();
    } else if (e instanceof Error) {
      returnResult.error = e.message;
    }
    res.status(500).json(returnResult);
  }
}
