/* 
  JAVASCRIPT - IPAG (Huambo)
  Funcionalidades interativas simples.
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. MENU HAMBÚRGUER (MOBILE)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Alterar ícone se necessário (ex: de hambúrguer para X)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                // Se estiver usando lucide, precisa dar refresh
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        });
    }

    // 2. HIGHLIGHT LINK ATIVO
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Verifica se o caminho atual termina com o href do link
        if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 3. VALIDAÇÃO DE FORMULÁRIO (PÁGINA DE CONTACTO)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Simulação de envio
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Enviando...';

            setTimeout(() => {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contacto em breve.`);
                contactForm.reset();
                btn.disabled = false;
                btn.textContent = originalText;
            }, 1500);
        });
    }

    // 4. ANIMAÇÕES SUAVES AO ROLAR (OPCIONAL)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .about-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
