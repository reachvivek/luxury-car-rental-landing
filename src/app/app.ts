import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected title = 'sehej-car-rental';
  protected showLoading = true;
  protected currentSpeed = 0;
  protected Array = Array;
  protected currentYear = new Date().getFullYear();
  protected scrollProgress = 0;
  
  public scrollToFleet() {
    console.log('ScrollToFleet called'); // Debug log
    const fleetSection = document.getElementById('fleet-section');
    console.log('Fleet section found:', fleetSection); // Debug log
    
    if (fleetSection) {
      // Try with a slight offset to account for any fixed headers
      const yOffset = -20;
      const y = fleetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
  
  protected cars = [
    {
      brand: 'Porsche',
      model: 'Taycan',
      year: '2023',
      category: 'Luxury',
      price: '4,000',
      fuel: 'Electric',
      transmission: 'Automatic',
      seats: '4',
      kmsAllowed: '200',
      image: 'https://stimg.cardekho.com/images/car-images/large/Porsche/Taycan/11515/1725257414377/230_Frozenberry-Metallic_857274.jpg?impolicy=resize&imwidth=420'
    },
    {
      brand: 'BMW',
      model: 'X5',
      year: '2022',
      category: 'Luxury',
      price: '2,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: '7',
      kmsAllowed: '200',
      image: 'https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/24bmwx5m/bmw_24x5m_angularfront_alpinewhite'
    },
    {
      brand: 'Audi',
      model: 'Q7',
      year: '2022',
      category: 'Luxury',
      price: '2,500',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: '7',
      kmsAllowed: '200',
      image: 'https://www.pngplay.com/wp-content/uploads/13/Audi-Quattro-Q7-Transparent-File.png'
    },
    {
      brand: 'Maruti',
      model: 'Invicto',
      year: '2023',
      category: 'Premium',
      price: '700',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: '8',
      kmsAllowed: '200',
      image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/152321/maruti-suzuki-invicto-right-front-three-quarter0.webp?isig=0&wm=0'
    },
    {
      brand: 'Maruti',
      model: 'Espresso',
      year: '2023',
      category: 'Compact',
      price: '200',
      fuel: 'Petrol',
      transmission: 'Manual',
      seats: '4',
      kmsAllowed: '200',
      image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/48312/exterior-right-front-three-quarter.jpeg'
    },
    {
      brand: 'Kia',
      model: 'Seltos',
      year: '2023',
      category: 'Mid-Segment',
      price: '500',
      fuel: 'Petrol',
      transmission: 'Manual',
      seats: '5',
      kmsAllowed: '200',
      image: 'https://kia-wa.com/wp-content/uploads/sites/27/2020/04/kia_seltos_ClearWhite.png'
    }
  ];

  protected testimonials = [
    {
      name: 'Arjun Reddy',
      role: 'From Delhi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Amazing service! The Porsche Taycan was delivered right to my office and was in pristine condition. Professional staff and transparent pricing. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      role: 'From Pune',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Perfect for my wedding! The BMW X5 was immaculate and the team was so accommodating. They even decorated it beautifully. Excellent customer service throughout.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'From Bangalore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Great value for money! Rented a Kia Seltos for a family trip. Clean car, competitive rates, and excellent customer support. Will definitely use their services again.'
    },
    {
      name: 'Neha Gupta',
      role: 'From Hyderabad',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Exceptional experience with the Audi Q7! Perfect for our corporate event. The car was spotless and the service was impeccable. Will definitely book again.'
    },
    {
      name: 'Vikram Singh',
      role: 'From Chennai',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Loved the doorstep delivery service! Rented a Maruti Invicto for a family function and everything was seamless. Great communication and hassle-free process.'
    },
    {
      name: 'Anjali Patel',
      role: 'From Ahmedabad',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      review: 'Professional service from start to finish. The Maruti Espresso was perfect for city driving. Clean, comfortable, and affordable. Highly satisfied with the experience.'
    }
  ];

  protected currentTestimonialIndex = 0;
  private testimonialInterval: any;

  ngOnInit() {
    // Animate speed counter smoothly
    let speed = 0;
    const interval = setInterval(() => {
      speed += 8;
      this.currentSpeed = Math.min(speed, 360);
      if (speed >= 360) {
        clearInterval(interval);
      }
    }, 30);
    
    // Hide loading after 3 seconds
    setTimeout(() => {
      this.showLoading = false;
      // Initialize premium effects after loading
      this.initializePremiumEffects();
    }, 3000);

    // Start testimonial carousel
    this.startTestimonialCarousel();
  }

  private initializePremiumEffects() {
    this.setupScrollAnimations();
    this.setupScrollProgress();
    this.createParticleSystem();
    this.enhanceButtons();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    // Add scroll triggers to elements
    setTimeout(() => {
      document.querySelectorAll('.scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-bottom').forEach(el => {
        observer.observe(el);
        
        // Immediately animate elements that are already in view
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add('animate-in-view');
        }
      });
    }, 100);
  }

  private setupScrollProgress() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (scrollTop / docHeight) * 100;
      
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${this.scrollProgress}%`;
      }
    });
  }

  private createParticleSystem() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Create floating particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 12}s`;
      particle.style.animationDuration = `${12 + Math.random() * 8}s`;
      heroSection.appendChild(particle);
    }
  }

  private enhanceButtons() {
    setTimeout(() => {
      document.querySelectorAll('a[href*="wa.me"], a[href*="tel:"], button').forEach(btn => {
        if (!btn.classList.contains('testimonial-btn')) {
          btn.classList.add('magnetic-btn');
        }
      });
    }, 100);
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  private startTestimonialCarousel() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 6000); // Change every 6 seconds
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonialIndex - 1;
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
  }
}
