document.addEventListener('DOMContentLoaded', () => {
    const boxItems = document.querySelectorAll('.box');
    const loadMoreBtn = document.getElementById('load-more');
    let itemsToShow = 4; 
    let currentItems = itemsToShow; 

    function showItems() {
        boxItems.forEach((item, index) => {
            if (index < currentItems) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
        });

        if (currentItems >= boxItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    loadMoreBtn.addEventListener('click', () => {
        currentItems += itemsToShow; 
        showItems(); 
    });

    showItems();
});

let carrito = [];

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function eliminarDelCarrito(idProducto) {
    const indice = carrito.findIndex(p => p.id === idProducto);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        actualizarCarrito();  
    }
}

function actualizarCarrito() {
    const carritoContenedor = document.getElementById('lista_carrito').getElementsByTagName('tbody')[0];
    carritoContenedor.innerHTML = ''; 

    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px;"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><button class="eliminar" data-id="${producto.id}">−</button></td>
        `;
        carritoContenedor.appendChild(row);
    });

    const imgCarrito = document.getElementById('img-carrito');
    imgCarrito.alt = `Carrito (${carrito.length})`;

    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    vaciarCarritoBtn.style.display = carrito.length > 0 ? 'inline-block' : 'none';
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

const productos = [
    {
        id: 1,
        nombre: 'Zoho Inventory',
        precio: 249,
        imagen: 'https://play-lh.googleusercontent.com/UZQeorPpWfNRA23FMQY5ONlZ_7cbSE2o3pwgloJMBWenZIdU7TM7wJlKrChZa6XzyXQ'
    },
    {
        id: 2,
        nombre: 'Inflow',
        precio: 439,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOB4uKM868UXpRi7ngdXWVPdpVd5G4MEF_zw&s'
    },
    {
        id: 3,
        nombre: 'Cin7',
        precio: 325,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyOUOw16QrnVXLThH5-INtkMKVtD2JEBkjA&s'
    },
    {
        id: 4,
        nombre: 'NetSuite ERP',
        precio: 999,
        imagen: 'https://www.nopcommerce.com/images/thumbs/0020096_netsuite-erp.png'
    },
    {
        id: 5,
        nombre: 'Tradegecko',
        precio: 755,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbERcJgBgbBn-ap-3vMqQsLY3fgWIctlX4vg&s'
    },
    {
        id: 6,
        nombre: 'Odoo',
        precio: 455,
        imagen: 'https://media.licdn.com/dms/image/D4D12AQEcBhJNjOSWGg/article-cover_image-shrink_600_2000/0/1694600725344?e=2147483647&v=beta&t=NcLo1LBGOtUPIaEU0nppIg6cCrbZevuIZPzGWWcDo_A'
    },
    {
        id: 7,
        nombre: 'Square Retail',
        precio: 655,
        imagen: 'https://www.comparasoftware.com/media/1970'
    },
    {
        id: 8,
        nombre: 'Dear',
        precio: 325,
        imagen: 'https://dearsystems.com.cn/wp-content/uploads/2019/02/release-notes-logo-400x250.jpg'
    },
    {
        id: 9,
        nombre: 'Katana',
        precio: 190,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbhOo-ZnSW-yUTp8maOHNJcYATh7UOz0yeQ&s'
    },
    {
        id: 10,
        nombre: 'Ordoro',
        precio: 150,
        imagen: 'https://www.comparasoftware.co/media/6644'
    },
    {
        id: 11,
        nombre: 'UnleashedSof',
        precio: 249,
        imagen: 'https://pbs.twimg.com/profile_images/1125907224419655680/g6qkzqhu_400x400.png'
    },
    {
        id: 12,
        nombre: 'BusinessOne',
        precio: 288,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKF3phYFXMSK2N2deY11esBYSXTlt_asxWsQ&s'
    },
    {
        id: 13,
        nombre: 'BEZOffice',
        precio : 444,
        imagen: 'https://play-lh.googleusercontent.com/oWWPj8MTRjarVT1S7OG-R-4DMtWp1YjIQ2X81dwA0VOu3iTh9iq_frQqwKtF_gVzS5k'
    }
];

document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', (e) => {
        const idProducto = parseInt(e.target.getAttribute('data-id'));  
        agregarAlCarrito(idProducto);
    });
});

document.getElementById('vaciar-carrito').addEventListener('click', (e) => {
    e.preventDefault(); 
    vaciarCarrito();
});

document.getElementById('lista_carrito').addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        eliminarDelCarrito(idProducto);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contenedorCarrito = document.getElementById('carrito');
    const iconoCarrito = document.getElementById('icono-carrito');

    iconoCarrito.addEventListener('click', () => {
        if (contenedorCarrito.style.display === 'none' || contenedorCarrito.style.display === '') {
            contenedorCarrito.style.display = 'block'; 
        } else {
            contenedorCarrito.style.display = 'none';
        }
    });
});
document.getElementById('comprar-productos').addEventListener('click', (e) => {
    e.preventDefault();

    // Guardar el carrito en el localStorage cuando el usuario haga clic en "Realizar Compra"
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Redirigir a la página de factura
    window.location.href = 'factura.html';
});
function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    var link = info.previousElementSibling;

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block"; // Mostrar la información
        link.innerHTML = "&#8593; Leer menos"; // Cambiar el texto de la flecha
    } else {
        info.style.display = "none"; // Ocultar la información
        link.innerHTML = "&#8595; Leer más"; // Volver al texto original de la flecha
    }
}

