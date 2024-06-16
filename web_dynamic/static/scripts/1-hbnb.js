document.addEventListener('DOMContentLoaded', (event) => {
    const contentList = []
    const checked = document.querySelectorAll('.popover__input');
    checked.forEach(input => {
        input.addEventListener('click', () => {
            if (input.checked)  contentList.push(input.getAttribute('data-name'));
            else {
                const index = contentList.findIndex(check => check === input.getAttribute('data-name'))
                contentList.splice(index, 1)
            }
            const heading = document.querySelector('.amenities h4');
            heading.textContent = contentList.join(', ')
        })
    })
})