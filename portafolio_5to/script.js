'use strict';

// Entry point for portfolio interactions
console.log('Portafolio de Evidencias listo.');

document.addEventListener('DOMContentLoaded', () => {
  const unitCards = document.querySelectorAll('.unit-card[data-link]');
  const evidenceButton = document.querySelector('#open-evidence');
  const modal = document.querySelector('#evidence-modal');
  const modalClosers = document.querySelectorAll('[data-close-modal]');

  unitCards.forEach((card) => {
    const target = card.dataset.link;
    if (!target) return;

    const goToUnit = () => {
      window.location.href = target;
    };

    card.addEventListener('click', goToUnit);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToUnit();
      }
    });
  });

  if (evidenceButton && modal) {
    const openModal = () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    evidenceButton.addEventListener('click', openModal);
    modalClosers.forEach((el) => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }
});
