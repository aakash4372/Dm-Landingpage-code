document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    const countUp = (counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / speed;

        let count = 0;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    document.querySelectorAll(".achievement-box").forEach((box, index) => {
        let icon = box.querySelector("i");
        let originalIconClass = icon.classList[1];

        const iconMapping = {
            "fa-volume-low": "fa-volume-high",
            "bi-graph-up": "bi-graph-up-arrow",
            "fa-rocket": "bi-rocket-takeoff-fill"
        };

        box.addEventListener("mouseenter", () => {
            if (iconMapping[originalIconClass]) {
                icon.classList.replace(originalIconClass, iconMapping[originalIconClass]);
            }
            activateStep(index);
        });

        box.addEventListener("mouseleave", () => {
            if (iconMapping[originalIconClass]) {
                icon.classList.replace(iconMapping[originalIconClass], originalIconClass);
            }
        });

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });

    function redirectToWhatsApp() {
        setTimeout(() => {
            window.open("https://wa.me/9952787198", "_blank");
        }, 300);
    }

    setTimeout(function() {
        document.getElementById('floating-icons').classList.add('visible');
    }, 5000);
    
    AOS.init();
    
});
