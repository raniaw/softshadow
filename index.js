function softshadow(option) {
    let img = document.querySelectorAll('.softshadow');
    if (option.shadow_type === 'hard') {
        option.shadow_type = '15px';
    } else {
        option.shadow_type = '0px'
    }
    img.forEach((item) => {
        item.style.boxShadow = `1px 1px 10px ${option.shadow_type} #ccc`;
        if (option.padding) {
            item.style.padding = '1em';
        }
        item.style.margin = '1em';
    })

}

module.exports.softshadow = softshadow;