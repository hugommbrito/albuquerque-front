// 'use client'

// import { usePathname } from "next/navigation"
// import { AnimatePresence, motion } from "framer-motion"

// export function PageWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname()

//   return (
//     <AnimatePresence mode="popLayout" initial={true} >
//       <motion.div
//         key={pathname}
//         initial={{ y: '100%', opacity: 1 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: '-20%', opacity: 1 }}
//         transition={{ duration: 0.8, ease: 'easeInOut' }}
//         className="h-full"

//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   )
// }

'use client'

import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [displayedPage, setDisplayedPage] = useState<ReactNode>(children)
  const [transitionStage, setTransitionStage] = useState<'idle' | 'animating'>('idle')

  useEffect(() => {
    if (children !== displayedPage) {
      setTransitionStage('animating')

      const timeout = setTimeout(() => {
        setDisplayedPage(children)
        setTransitionStage('idle')
      }, 600) // duração da animação

      return () => clearTimeout(timeout)
    }
  }, [children, displayedPage])

  return (
    <div className="relative w-full min-h-screen">
      {/* Página atual (em fundo) */}
      <div className="absolute inset-0 z-0">
        {displayedPage}
      </div>

      {/* Nova página animando por cima */}
      {transitionStage === 'animating' && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 z-10"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}