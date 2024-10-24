document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.opcode-button').forEach(button => {
        button.addEventListener('click', function () {
            const opcode = this.getAttribute('data-opcode');
            const targetElement = document.getElementById(opcode); 
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetElement.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    targetElement.style.backgroundColor = '';
                }, 800);
            }
        });
    });
});