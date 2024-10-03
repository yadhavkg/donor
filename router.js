import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.route("/adddonor").post(rh.addDonors);
router.route("/getdonors").get(rh.getDonors);
router.route("/getdonor/:_id").get(rh.getDonor)
router.route("/updatedonor/:_id").put(rh.updateDonor)
router.route("/deletedonor/:_id").delete(rh.deleteDonor)
// registeration
router.route("/signUp").post(rh.signUp)
router.route("/signIn").post(rh.signIn)

export default router;