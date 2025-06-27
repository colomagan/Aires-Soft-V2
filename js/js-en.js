
    // Portfolio Filter functionality
    const portfolioFilterTabs = document.querySelectorAll('.portfolio-filter-tab');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    portfolioFilterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        portfolioFilterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        portfolioCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            card.style.animation = 'portfolioFadeIn 0.6s ease-in-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Portfolio Modal functionality
    const portfolioModal = document.getElementById('portfolioProjectModal');
    const portfolioCloseBtn = document.querySelector('.portfolio-close');

    function openPortfolioModal(projectType) {
      const portfolioModalData = {
        tourism: {
          title: 'Tourism Services Website',
          image: './img/fotosWeb/1.png',
          description: 'A comprehensive tourism website featuring advanced booking systems, interactive destination galleries, and integrated customer review management.',
          features: [
            'Advanced online booking system',
            'Interactive destination maps',
            'Customer review management',
            'Multi-language support',
            'Payment gateway integration',
            'Mobile-responsive design',
            'SEO optimization',
            'Social media integration'
          ]
        },
        shop: {
          title: 'Advanced Online Shop',
          image: './img/fotosWeb/6.png',
          description: 'Complete e-commerce solution with advanced features designed for modern online retail businesses.',
          features: [
            'Advanced shopping cart',
            'Inventory management system',
            'Multiple payment gateways',
            'Order tracking system',
            'Customer account management',
            'Analytics dashboard',
            'Email marketing integration',
            'Mobile commerce optimization'
          ]
        },
        marketing: {
          title: 'Marketing Services Website',
          image: './img/fotosWeb/2.1.png',
          description: 'Professional marketing agency website with comprehensive portfolio showcase and advanced lead generation capabilities.',
          features: [
            'Dynamic portfolio showcase',
            'Client testimonial system',
            'Advanced lead generation',
            'Blog management system',
            'SEO optimization tools',
            'Social media integration',
            'Analytics tracking',
            'Contact management'
          ]
        },
        travel: {
          title: 'Travel Agency Platform',
          image: './img/fotosWeb/3.png',
          description: 'Comprehensive travel booking platform with real-time availability and detailed destination information.',
          features: [
            'Real-time booking system',
            'Comprehensive destination guides',
            'Price comparison tools',
            'Custom travel itineraries',
            'Customer support chat',
            'Mobile app integration',
            'Payment processing',
            'Review and rating system'
          ]
        },
        restaurant: {
          title: 'Restaurant Website',
          image: './img/fotosWeb/4.png',
          description: 'Elegant restaurant website with comprehensive online menu and advanced reservation management.',
          features: [
            'Interactive online menu',
            'Table reservation system',
            'Food delivery integration',
            'Customer review system',
            'Event booking management',
            'Social media feeds',
            'Newsletter integration',
            'Mobile optimization'
          ]
        },
        realestate: {
          title: 'Real Estate Agency',
          image: './img/fotosWeb/5.png',
          description: 'Professional real estate platform with advanced property search and immersive virtual tour capabilities.',
          features: [
            'Advanced property search',
            'Virtual property tours',
            'Agent profile management',
            'Mortgage calculator',
            'Neighborhood information',
            'Lead management system',
            'Property comparison tools',
            'Mobile-first design'
          ]
        }
      };

      const data = portfolioModalData[projectType];
      if (data) {
        document.getElementById('portfolioModalTitle').textContent = data.title;
        document.getElementById('portfolioModalImage').src = data.image;
        document.getElementById('portfolioModalDescription').textContent = data.description;

        const featuresHtml = data.features.map(feature =>
          `<li>${feature}</li>`
        ).join('');

        document.getElementById('portfolioModalFeatures').innerHTML =
          `<h4>Key Features & Technologies:</h4>
                         <ul>${featuresHtml}</ul>`;

        portfolioModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }

    portfolioCloseBtn.addEventListener('click', () => {
      portfolioModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
      if (e.target === portfolioModal) {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // Add portfolio fade in animation
    const portfolioStyle = document.createElement('style');
    portfolioStyle.textContent = `
                @keyframes portfolioFadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
    document.head.appendChild(portfolioStyle);

    // Portfolio Intersection Observer for scroll animations
    const portfolioObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const portfolioObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'portfolioFadeIn 0.8s ease-out forwards';
        }
      });
    }, portfolioObserverOptions);

    portfolioCards.forEach(card => {
      card.style.opacity = '0';
      portfolioObserver.observe(card);
    });