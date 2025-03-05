import { loops } from "~/entry.server";
import { sleep } from "./utils.server";

export const transactionalIds = {
  waitlist: "cm77s7uhm05eqtnp96da1sdvz",
};

export async function sendTransactionalEmail(email: string, transactionalId: string) {
  if (process.env.NODE_ENV === "development") {
    console.log("Sending email to", email, "with transactionalId", transactionalId);
    
    await sleep(1000);
    return { success: true };
  }

  return await loops.sendTransactionalEmail({
    email,
    transactionalId,
  });
}
