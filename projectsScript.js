const projects = [
    {
        images: [
            "Metrogate/1 (1).jpg", 
            "Metrogate/1 (2).jpg", 
            "Metrogate/1 (3).jpg", 
            "Metrogate/1 (4).jpg", 
            "Metrogate/1.jpg", 
            "Metrogate/1 (5).jpg"
        ],
        title: "Metrogate",
        description: "Project At Metrogate SJDM Bulacan"
    },
    {
        images: [
            "WHO/1 (1).jpg", 
            "WHO/1 (2).jpg", 
            "WHO/1 (3).jpg", 
            "WHO/1 (4).jpg", 
            "WHO/1 (5).jpg"
        ],
        title: "World Health Organization",
        description: "WHO Roof Deck Garden"
    },
    {
        images: [
            "Moldex Silang/1 (1).jpg", 
            "Moldex Silang/1 (3).jpg", 
            "Moldex Silang/1 (4).jpg", 
            "Moldex Silang/1 (5).jpg"
        ],
        title: "Moldex Residences Silang",
        description: "Project At Moldex Residences Silang Cavite"
    },
    {
        images: [
            "Baguio/1 (1).jpg", 
            "Baguio/1 (2).jpg", 
            "Baguio/1 (3).jpg", 
            "Baguio/1 (4).jpg", 
            "Baguio/1 (5).jpg", 
            "Baguio/1 (6).jpg", 
            "Baguio/1 (7).jpg", 
            "Baguio/1 (8).jpg"
        ],
        title: "Moldex Residences Baguio",
        description: "Project At Moldex Residences Baguio"
    },
    {
        images: [
            "North Caloocan/1 (1).jpg", 
            "North Caloocan/1 (2).jpg", 
            "North Caloocan/1 (3).jpg"
        ],
        title: "North Caloocan",
        description: "Project At North Caloocan"
    },
    {
        images: [
            "Silang/1 (1).jpg", 
            "Silang/1 (2).jpg", 
            "Silang/1 (3).jpg", 
            "Silang/1 (4).jpg"
        ],
        title: "Silang Cavite",
        description: "Renovate Water Feature & Coi Pond At Silang Cavite"
    },
    {
        images: [
            "Icon/1.jpg", 
            "Icon/2.jpg",
            "Icon/3.jpg",
            "Icon/4.jpg",
            "Icon/5.jpg",
            "Icon/6.jpg"
        ],
        title: "ICON Residences",
        description: "Project At BGC Taguig"
    },
    {
        images: [
            "MGE/1.jpg", 
            "MGE/2.jpg",
            "MGE/3.jpg",
            "MGE/4.jpg",
            "MGE/5.jpg",
            "MGE/6.jpg"
        ],
        title: "Madera Grove Estate",
        description: "Project At Malolos Bulacan"
    }
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

function openProjectModal(projectIndex) {
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;

    const project = projects[projectIndex];

    const carouselImage = document.getElementById("carouselImage");
    carouselImage.src = project.images[currentImageIndex];
    
    const modal = document.getElementById("projectModal");
    modal.style.display = "block";
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    const project = projects[currentProjectIndex];
    const totalImages = project.images.length;
    
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;

    const carouselImage = document.getElementById("carouselImage");
    carouselImage.src = project.images[currentImageIndex];
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeProjectModal();
    }
};

function openModal() {
    document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}
