const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const drawingControllers = require("../controllers/drawingControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", userControllers.browse);
router.get("/:id", authControllers.verifyToken, userControllers.read);

router.get("/:id/drawings", drawingControllers.allCreation);

router.put("/:id", userControllers.edit);
router.put(
  "/:id/change-password",
  userControllers.hashPassword,
  userControllers.edit
);

router.post(
  "/",
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);

router.post("/login", userControllers.login, authControllers.createToken);

router.delete(
  "/:id",
  authControllers.verifyToken,
  authControllers.isAdmin,
  userControllers.destroy
);

module.exports = router;
