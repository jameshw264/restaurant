const load_page = () => {
    const content = document.getElementById('content');
    const image = document.createElement('div')
    image.classList.add('image');
    const text = document.createElement('div');
    text.classList.add('text');
    const heading = document.createElement('h1');
    heading.textContent = 'Restaurantica';
    const heading_text = document.createElement('p');
    heading_text.classList.add('heading-text');
    heading_text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue massa ac tempus placerat. Vestibulum auctor rutrum tortor a fringilla.';
    text.appendChild(heading);
    text.appendChild(heading_text);
    image.appendChild(text);
    content.appendChild(image);
    const main_text = document.createElement('div');
    main_text.classList.add('main-text');
    main_text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue massa ac tempus placerat. Vestibulum auctor rutrum tortor a fringilla. Aenean quis mi vitae neque lacinia ullamcorper a sed arcu. Nunc euismod porttitor nisi, imperdiet venenatis urna mattis et. Etiam ante purus, bibendum pharetra vulputate at, porttitor et odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eget lorem at leo dignissim maximus in a orci. Vestibulum scelerisque malesuada ligula, et dapibus sapien sagittis vitae.

    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam porttitor lectus et interdum mattis. Phasellus porttitor, ante non cursus feugiat, diam magna suscipit nulla, at porta felis erat eget erat. Ut vehicula magna id velit tempor congue. Curabitur sit amet lectus vitae nisi mollis tempor at in turpis. Quisque mauris ex, sollicitudin id dui sit amet, pretium efficitur nunc. Aenean libero nisl, auctor at lorem tincidunt, pulvinar aliquet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tempor congue dictum. Proin sed pellentesque neque, in semper urna. Nam iaculis mi a purus bibendum accumsan. Curabitur tincidunt non nibh non interdum. Suspendisse tellus velit, aliquam a metus eu, mattis aliquam orci. Etiam porta at ante vel bibendum. Sed sit amet maximus enim. Ut eu pulvinar nisi.
    
    Sed vulputate eros a eros tristique tristique. Vivamus magna nisi, faucibus vitae tempus non, placerat luctus purus. Mauris cursus justo lorem, quis malesuada augue rhoncus sit amet. Curabitur non turpis id quam maximus tincidunt. Vestibulum sit amet euismod est, id laoreet tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin feugiat, justo a aliquam dignissim, ante nunc porttitor sapien, et facilisis libero ligula vitae ex. Duis quis ultrices justo, vel lobortis sem. Quisque non mattis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat erat sed ultricies varius. Curabitur non enim gravida, pharetra nulla non, ultrices sapien. Donec odio ipsum, tincidunt ut laoreet vel, elementum eget diam.
    
    Morbi tristique viverra lorem vitae ornare. Suspendisse iaculis accumsan eros feugiat fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer bibendum lacus lacus, nec pellentesque nibh feugiat aliquet. Nam lacinia erat ac lacinia hendrerit. Pellentesque odio risus, pretium et velit vitae, imperdiet aliquet velit. Sed vulputate ante eu urna ornare porttitor. In mi erat, vestibulum in mi in, commodo lacinia arcu.
    
    Sed ipsum metus, tincidunt et turpis nec, suscipit molestie velit. Nunc commodo leo urna, eu elementum purus molestie blandit. Quisque pulvinar turpis interdum nulla rutrum, congue ultrices urna facilisis. Curabitur ante erat, laoreet nec urna ut, auctor ultrices dolor. Aenean felis nulla, rutrum a molestie eu, tempus elementum diam. In eget ligula metus. Nulla sem eros, malesuada ac efficitur in, auctor et magna. Maecenas non lectus rutrum, commodo turpis sit amet, efficitur erat.
    `;
    content.appendChild(main_text)
}

export default load_page;