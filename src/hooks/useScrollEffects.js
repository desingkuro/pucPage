import { useEffect } from 'react'

/**
 * Efectos de scroll del sitio:
 *  - Header: añade la clase .header--scrolled al pasar de 12px.
 *  - Reveal: observa los nodos [data-reveal] y les añade .revealed
 *    cuando entran en el viewport.
 *
 * Se ejecuta en useEffect (después del commit de React) para garantizar
 * que el DOM ya existe, tanto en el render del cliente como en la hidratación.
 */
export function useScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ---------- Header ---------- */
    const header = document.querySelector('.header')
    const onScroll = () => {
      header?.classList.toggle('header--scrolled', window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    /* ---------- Reveal ---------- */
    const revealAll = () => {
      document
        .querySelectorAll('[data-reveal]:not(.revealed)')
        .forEach(el => el.classList.add('revealed'))
    }

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      revealAll()
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('revealed')
            obs.unobserve(entry.target)
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )

      document
        .querySelectorAll('[data-reveal]:not(.revealed)')
        .forEach(el => observer.observe(el))
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
