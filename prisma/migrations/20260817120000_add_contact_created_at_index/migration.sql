-- Optimize the chronological lead listing used by listLeads().
CREATE INDEX "Contact_createdAt_idx" ON "Contact"("createdAt");
