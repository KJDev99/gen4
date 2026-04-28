const tabs = document.querySelectorAll('.code-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

const copyBtn = document.querySelector('.code-footer-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const code = `const { OpenAI } = require('openai');\n\nconst api = new OpenAI({\n  baseURL: 'https://api.4gen.ru/v1',\n  apiKey: '<YOUR_API_KEY>',\n});\n\nconst result = await api.chat.completions.create({\n  model: '4gen-assistant',\n  messages: [\n    { role: 'system', content: 'Ты AI-ассистент...' },\n    { role: 'user', content: 'Напиши SEO статью...' }\n  ]\n});`;
        navigator.clipboard.writeText(code).catch(() => { });
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Скопировано`;
        setTimeout(() => { copyBtn.innerHTML = original; }, 2000);
    });
}