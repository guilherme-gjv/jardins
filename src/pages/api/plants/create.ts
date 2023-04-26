import { IPlant } from "@/interfaces/IPlant";
import { ref, set } from "@firebase/database";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../firebase";
import { uid } from "uid";

const Create = async (
  req: NextApiRequest,
  res: NextApiResponse<{ response: string }>
) => {
  if (!req.body.name || !req.body.email) {
    return res
      .status(400)
      .json({ response: "Missing 'name' or 'email' fields." });
  }

  set(ref(db, uid()), {
    uid: uid(),
    name: req.body.name,
    email: req.body.email,
    date: new Date(Date.now()).toString(),
  })
    .then(() => {
      return res.status(200).json({ response: "Saved data." });
    })
    .catch(() => {
      return res.status(500).json({ response: "Server error." });
    });
};

export default Create;
