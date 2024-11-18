// Lista de productos
const productos = [
    {
        id: 1,
        nombre: 'Zoho Inventory',
        imagen: 'https://play-lh.googleusercontent.com/UZQeorPpWfNRA23FMQY5ONlZ_7cbSE2o3pwgloJMBWenZIdU7TM7wJlKrChZa6XzyXQ',
    },
    {
        id: 2,
        nombre: 'Fishbowl',
        imagen: 'https://tarabyte.com/wp-content/uploads/2021/12/Untitled-design-41.png',
    },
    {
        id: 3,
        nombre: 'Cin7',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyOUOw16QrnVXLThH5-INtkMKVtD2JEBkjA&s',
    },
    {
        id: 4,
        nombre: 'NetSuite ERP',
        imagen: 'https://www.nopcommerce.com/images/thumbs/0020096_netsuite-erp.png',
    },
    {
        id: 5,
        nombre: 'Tradegecko',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbERcJgBgbBn-ap-3vMqQsLY3fgWIctlX4vg&s',
    },
    {
        id: 6,
        nombre: 'Odoo',
        imagen: 'https://media.licdn.com/dms/image/D4D12AQEcBhJNjOSWGg/article-cover_image-shrink_600_2000/0/1694600725344?e=2147483647&v=beta&t=NcLo1LBGOtUPIaEU0nppIg6cCrbZevuIZPzGWWcDo_A',
    },
    {
        id: 7,
        nombre: 'Square Retail',
        imagen: 'https://www.comparasoftware.com/media/1970',
    },
    {
        id: 8,
        nombre: 'Dear',
        imagen: 'https://dearsystems.com.cn/wp-content/uploads/2019/02/release-notes-logo-400x250.jpg',
    }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <h2>${producto.nombre}</h2>
        `;
        
        productosContainer.appendChild(productoDiv);
    });
}

// Llamar la función para mostrar los productos cuando cargue la página
document.addEventListener('DOMContentLoaded', mostrarProductos);
