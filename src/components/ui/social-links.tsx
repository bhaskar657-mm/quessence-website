"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Social {
  name: string
  icon: React.ReactNode
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
  hoverDirection?: "top" | "left"
}

export function SocialLinks({ socials, className, hoverDirection = "top", ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
  const [rotation, setRotation] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  }

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true)
      setTimeout(() => {
        setClicked(false)
      }, 200)
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [clicked])

  const isLeft = hoverDirection === "left"

  return (
    <div
      className={cn("flex items-center justify-center gap-0", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <div
          className={cn(
            "relative cursor-pointer transition-opacity duration-200",
            isLeft ? "px-0 py-2" : "px-5 py-2",
          )}
          style={hoveredSocial && hoveredSocial !== social.name ? { opacity: 0.5 } : { opacity: 1 }}
          key={index}
          onMouseEnter={() => {
            setHoveredSocial(social.name)
            setRotation(Math.random() * 20 - 10)
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => {
            setClicked(true)
          }}
        >
          <span className="block text-lg font-medium">{social.name}</span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className={cn(
                  "absolute flex items-center pointer-events-none",
                  isLeft
                    ? "top-0 bottom-0 left-0"
                    : "bottom-0 left-0 right-0 h-full w-full justify-center"
                )}
                animate={animation}
              >
                <motion.div
                  key={social.name}
                  initial={
                    isLeft
                      ? { x: 20, rotate: rotation, opacity: 0, filter: "blur(2px)" }
                      : { y: -40, rotate: rotation, opacity: 0, filter: "blur(2px)" }
                  }
                  animate={
                    isLeft
                      ? { x: -52, opacity: 1, filter: "blur(0px)" }
                      : { y: -50, opacity: 1, filter: "blur(0px)" }
                  }
                  exit={
                    isLeft
                      ? { x: 20, opacity: 0, filter: "blur(2px)" }
                      : { y: -40, opacity: 0, filter: "blur(2px)" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
