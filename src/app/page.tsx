"use client"

import BoardContent from "./pages/BoardContent/BoardContent"
import LayoutContent from "./pages/LayoutContent/LayoutContent"


export default function Home() {
  return (
    <div style={{ fontFamily: "Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Helvetica Neue',sans-serif" }}>
      <BoardContent />
      <LayoutContent />
    </div >
  )
}
