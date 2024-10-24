import express from "express";
const router = express.Router();
import memberController from './controllers/member.controller';
import uploader from "./libs/type/uploader";
import productController from "./controllers/product.controller";

/* Mmber */
router.get("/member/restaurant", memberController.getRestaurant );
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post("/member/logout", 
    memberController.verifyAuth, 
    memberController.logout 
);
router.get("/member/detail", 
    memberController.verifyAuth,
    memberController.getMemberDetail
);

router.post("/member/update", 
    memberController.verifyAuth,
    uploader("members").single("memberImage"),
    memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);


/* Product */
router.get("/product/all", productController.getProducts)
router.get(
    "/product/:id", 
    memberController.retrieveAuth,
    productController.getProduct
);

/* Order */


export default router;
