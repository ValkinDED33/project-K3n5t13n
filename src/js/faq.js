export function messageFunctionFQ() {
  console.log('FAQ module loaded successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
  const faqData = [
    {
      question:
        'What programming languages are most often used in your project?',
      answer:
        'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
    },
    {
      question: 'How can I contact you?',
      answer:
        'You can contact me via email, phone, or through social media platforms listed on the website.',
    },
    {
      question: 'What are the deadlines for the project?',
      answer:
        'The terms of project implementation depend on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines usually occurs during the planning phase.',
    },
    {
      question: 'Do you provide advice or support?',
      answer:
        'Yes! I offer consultations and ongoing support throughout the project lifecycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum.',
    },
  ];

  const faqContainer = document.querySelector('.faq-grid');

  if (!faqContainer) {
    console.error('FAQ container not found!');
    return;
  }

  const createFaqItem = item => {
    return `
      <li class="faq-item">
        <div class="faq-question">
          ${item.question}
          <span class="faq-toggle">
            <!-- Добавлен SVG стрелки -->
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.5L6 6.5L1 1.5" stroke="#FAFAFA" stroke-width="2" />
            </svg>
          </span>
        </div>
        <div class="faq-answer hidden">${item.answer}</div>
      </li>
    `;
  };

  faqContainer.innerHTML = faqData.map(createFaqItem).join('');

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      answer.classList.toggle('hidden');
      const toggle = item.querySelector('.faq-toggle svg');
      toggle.style.transform = answer.classList.contains('hidden')
        ? 'rotate(0deg)'
        : 'rotate(180deg)';
    });
  });
});
