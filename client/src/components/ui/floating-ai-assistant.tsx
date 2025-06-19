import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, X, MessageCircle } from "lucide-react";

export function FloatingAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                size="sm"
              >
                <Bot className="h-6 w-6 text-white" />
              </Button>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 animate-ping"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Widget */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 right-0 mb-2"
            >
              <Card className="w-80 shadow-2xl border-0 bg-white">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Bhakti's AI Assistant</h3>
                          <p className="text-white text-xs opacity-90">Ask me anything!</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-white hover:bg-opacity-20 h-8 w-8 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-3">
                        <MessageCircle className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Chat with Bhakti's AI</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Get instant answers about my skills, experience, and projects
                      </p>
                    </div>
                    
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      asChild
                    >
                      <a 
                        href="https://bhaktis-ai-assistant.replit.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Bot className="w-4 h-4 mr-2" />
                        Start Conversation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}