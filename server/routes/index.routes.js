import { Router } from "express";
import rateLimit from "../middlewares/rateLimit.js";
import {
    getCoreData,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    createUser,
    loginUser 
} from "../controllers/core.controllers.js";

const router = Router();

// Aplicar rate limiting a todas las rutas
router.use(rateLimit);

// Ruta de inicio de sesión
router.post("/login", loginUser);

// Rutas de usuarios
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
