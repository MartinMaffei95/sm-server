"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const webhook_1 = require("../controllers/webhook");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/whatsapp', webhook_1.getMessages);
