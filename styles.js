.carousel {
    max-width: 600px;
    position: relative;
}

.carousel .carousel-item,
.carousel .carousel-item-hidden {
    display: none;
}

.carousel .carousel-item-visible {
    display: block;
    animation: fadeVisibility 0.5s;
}

.carousel .carousel-item img {
    width: 100%;
    max-width: 600px;
    height: auto;
}

.carousel .carousel-actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.carousel .carousel-actions button {
    border-radius: 50px;
    background-color: white;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.carousel .carousel-actions button#carousel-button-prev {
    margin-left: 20px;
}

.carousel .carousel-actions button#carousel-button-next {
    margin-right: 20px;   
}

@keyframes fadeVisibility {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
