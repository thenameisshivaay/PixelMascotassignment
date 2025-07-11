
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', function (e) {
        const href = el.getAttribute('href');

        
        const allowedDomains = ['facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com', 'github.com'];

        const isSocialLink = href && allowedDomains.some(domain => href.includes(domain));
        const isMailOrPhone = href && (href.startsWith('mailto:') || href.startsWith('tel:'));
        const isHashLink = href && href.startsWith('#');

        if (isSocialLink || isMailOrPhone || isHashLink) {
            return; 
        }

        
        e.preventDefault();

        alert('🚧 This feature is still in building.');
    });
});


document.querySelectorAll('.footer a').forEach(link => {
    const href = link.getAttribute('href');

    if (
        href &&
        (href.includes('facebook.com') ||
         href.includes('twitter.com') ||
         href.includes('instagram.com') ||
         href.includes('linkedin.com') ||
         href.includes('github.com'))
    ) {
        link.addEventListener('click', function (e) {
            const confirmOpen = confirm('This link will open an external app. Do you want to continue?');
            if (!confirmOpen) {
                e.preventDefault();
            }
        });
    }
});


// 1. Show "In building" message for footer menu links
document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    alert('🚧 This section is still in building.');
  });
});

document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const confirmed = confirm('This link will open an external app. Do you want to continue?');
    if (confirmed) {
      
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        window.open(href, '_blank');
      }
    }
  });
});

