import React from 'react'
import "../../global-styles/Page.css"

export default function Page({ children }) {
  return (
    <section className="page">
      {children}
    </section>
  )
}
