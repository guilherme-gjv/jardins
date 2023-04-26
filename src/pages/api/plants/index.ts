import { IPlant } from "@/interfaces/IPlant";
import { onValue, ref } from "@firebase/database";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../firebase";

const Index = async (
  req: NextApiRequest,
  res: NextApiResponse<{ response: IPlant[] | string }>
) => {
  let plants: IPlant[] = [];

  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      Object.values(data).forEach((plant) => {
        plants.push(plant as IPlant);
      });
      return res.status(200).json({ response: plants as IPlant[] });
    } else {
      return res.status(404).json({ response: "Not found." });
    }
  });
};

export default Index;
