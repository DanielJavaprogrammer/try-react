import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './HeaderSecundario.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para o efeito da navbar
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 50px, ativa o estado "scrolled"
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpeza do evento ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          Skill<span>Market</span>
        </a>
        
        {/* Menu Desktop */}
        <div className={styles.desktopMenu}>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#seguranca" className={styles.navLink}>Segurança</a>
          <a href="#planos" className={styles.navLink}>Planos</a>
          <button className={styles.btnEnter}>
            Entrar
          </button>
        </div>

        {/* Botão Mobile (Hambúrguer) */}
        <div className={styles.mobileToggle}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <a href="#como-funciona" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
          <a href="#seguranca" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Segurança</a>
          <a href="#planos" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Planos</a>
          <button className={styles.mobileBtn}>Entrar</button>
        </div>
      )}
    </nav>
  );
}