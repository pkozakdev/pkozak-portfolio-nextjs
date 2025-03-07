"use client"

import { useEffect, useRef } from "react"

export default function SoftGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size once and ensure it stays fixed
    const setCanvasSize = () => {
      if (!canvas) return

      // Set dimensions with a slight buffer to prevent any visible edges
      canvas.width = window.innerWidth * 1.1
      canvas.height = window.innerHeight * 1.1

      // Apply CSS to ensure canvas stays fixed in position
      canvas.style.position = 'fixed'
      canvas.style.top = '-5%'
      canvas.style.left = '-5%'
      canvas.style.width = '110%'
      canvas.style.height = '110%'
    }

    class GradientBlob {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number

      constructor() {
        // Add null check for canvas width/height
        this.x = Math.random() * (canvas?.width || window.innerWidth)
        this.y = Math.random() * (canvas?.height || window.innerHeight)
        this.radius = Math.random() * 300 + 100

        const colors = ["#2979ff", "#00bfff", "#4895ef", "#007ea7", "#64b5f6"]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Add null checks for canvas dimensions
        const width = canvas?.width || window.innerWidth
        const height = canvas?.height || window.innerHeight
        const padding = this.radius
        
        if (this.x < -padding) this.vx = Math.abs(this.vx)
        if (this.x > width + padding) this.vx = -Math.abs(this.vx)
        if (this.y < -padding) this.vy = Math.abs(this.vy)
        if (this.y > height + padding) this.vy = -Math.abs(this.vy)
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)

        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const blobs: GradientBlob[] = []
    const createBlobs = () => {
      const blobCount = 6
      for (let i = 0; i < blobCount; i++) {
        blobs.push(new GradientBlob())
      }
    }

    const animate = () => {
      if (!canvas || !ctx) return
      
      ctx.fillStyle = "hsl(215, 100%, 10%)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob) => {
        blob.update()
        blob.draw(ctx)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    setCanvasSize()
    createBlobs()
    animate()

    // Only resize when window actually changes dimensions
    window.addEventListener("resize", setCanvasSize)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-canvas" />
}

