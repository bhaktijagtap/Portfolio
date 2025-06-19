import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Resume download
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, "..", "attached_assets", "Bhakti Jagtap_1750310309459.pdf");
    res.download(resumePath, "Bhakti_Jagtap_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ error: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
