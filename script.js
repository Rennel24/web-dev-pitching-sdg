document.addEventListener('DOMContentLoaded', function() {
    const accButtons = document.querySelectorAll('.accordion-button');

    accButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;

           
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
             
                document.querySelectorAll('.accordion-content').forEach(item => {
                    if (item !== content) {
                        item.style.display = 'none';
                    }
                });
                content.style.display = 'block';
            }
        });
    });
});


