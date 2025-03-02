"use client"

import { useState, useRef, useEffect } from "react"
import axios from "axios"

const RecipeChatBot = () => {
  const API_KEY = "AIzaSyDb6gsfLkkQkLl0XEhzHv2Kb8BS5JUQwbg"
  const [input, setInput] = useState("")
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)
  const chatBoxRef = useRef(null)

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [chat])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { sender: "User", message: input }
    setChat((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: `Suggest some short recipes using these ingredients: ${input}` }] }],
        }
      )

      if (response.data?.candidates?.length > 0) {
        const botMessage = {
          sender: "Bot",
          message: response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, no recipes found!",
        }
        setChat((prev) => [...prev, botMessage])
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message)
      setChat((prev) => [
        ...prev,
        {
          sender: "Bot",
          message: "Sorry, I couldn't find any recipes. Try different ingredients!",
        },
      ])
    } finally {
      setLoading(false)
      setInput("")
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-primary/10 to-secondary/10 p-4">
      <div className="navbar bg-base-100 rounded-box shadow-lg mb-4">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">Back</a>
        </div>
        <h2 className="text-xl font-bold">RecipeChat</h2>
      </div>

      {/* Chat Area */}
      <div ref={chatBoxRef} className="flex-1 overflow-y-auto mb-4 rounded-box bg-base-100 shadow-lg p-4">
        {chat.length === 0 ? (
          <p className="text-center text-base-content/70">Tell me what ingredients you have.</p>
        ) : (
          chat.map((message, index) => (
            <div key={index} className={`chat ${message.sender === "User" ? "chat-end" : "chat-start"} mb-4`}>
              <div className={`chat-bubble ${message.sender === "User" ? "chat-bubble-primary" : "chat-bubble-secondary"}`}>
                {message.message}
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">Thinking...</div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="join w-full shadow-lg">
        <input
          type="text"
          className="input input-bordered join-item w-full focus:outline-none"
          placeholder="Enter ingredients..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="btn btn-primary join-item" onClick={handleSendMessage} disabled={loading || !input.trim()}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  )
}

export default RecipeChatBot
